import type { IncomingMessage, ServerResponse } from 'http';

interface ContactPayload {
  sheet?: string;
  website?: string;
  name?: string;
  phone?: string;
  email?: string;
  city?: string;
  service?: string;
  serviceNeeded?: string;
  message?: string;
  website_hp?: string;
}

const DEFAULT_WEBHOOK_URL =
  'https://script.google.com/macros/s/AKfycbz0v3r0fYvggUx5qGUFUgqIyRopT687iE_wZqYqCvtAWNTEKtA0ovub2yp60GiQTMh0/exec';

// Helper to sanitize strings and strip excessive HTML/control characters
function sanitize(input: unknown): string {
  if (typeof input !== 'string') return '';
  return input
    .trim()
    .replace(/<[^>]*>?/gm, '') // Remove HTML tags
    .slice(0, 3000); // Enforce max length
}

// Helper to parse JSON body from incoming stream if not pre-parsed
async function getRequestBody(req: any): Promise<ContactPayload> {
  if (req.body && typeof req.body === 'object') {
    return req.body;
  }
  if (typeof req.body === 'string' && req.body.length > 0) {
    try {
      return JSON.parse(req.body);
    } catch {
      return {};
    }
  }

  return new Promise((resolve) => {
    let data = '';
    req.on('data', (chunk: any) => {
      data += chunk;
      if (data.length > 1e6) {
        req.destroy();
        resolve({});
      }
    });
    req.on('end', () => {
      try {
        resolve(data ? JSON.parse(data) : {});
      } catch {
        resolve({});
      }
    });
    req.on('error', () => {
      resolve({});
    });
  });
}

export default async function handler(req: any, res: any) {
  // Enforce POST method only
  if (req.method !== 'POST') {
    if (typeof res.setHeader === 'function') {
      res.setHeader('Allow', ['POST']);
      res.setHeader('Content-Type', 'application/json');
    }
    res.statusCode = 405;
    return res.end(
      JSON.stringify({
        success: false,
        error: 'Method Not Allowed. Only POST requests are supported.'
      })
    );
  }

  try {
    const rawBody = await getRequestBody(req);

    // 1. Honeypot check (anti-spam protection)
    if (rawBody.website_hp && rawBody.website_hp.trim().length > 0) {
      // Silently return success to spam bots without adding junk to Google Sheets
      if (typeof res.setHeader === 'function') {
        res.setHeader('Content-Type', 'application/json');
      }
      res.statusCode = 200;
      return res.end(
        JSON.stringify({
          success: true,
          message: "Thank you. Your request has been received. We'll be in touch shortly."
        })
      );
    }

    // 2. Extract and sanitize fields
    const name = sanitize(rawBody.name);
    const phone = sanitize(rawBody.phone);
    const email = sanitize(rawBody.email);
    const city = sanitize(rawBody.city);
    const service = sanitize(rawBody.service || rawBody.serviceNeeded);
    const message = sanitize(rawBody.message);

    // 3. Server-side validation
    if (!name || name.length < 2) {
      if (typeof res.setHeader === 'function') {
        res.setHeader('Content-Type', 'application/json');
      }
      res.statusCode = 400;
      return res.end(
        JSON.stringify({
          success: false,
          error: 'Please provide your full name.'
        })
      );
    }

    if (!phone || phone.length < 7) {
      if (typeof res.setHeader === 'function') {
        res.setHeader('Content-Type', 'application/json');
      }
      res.statusCode = 400;
      return res.end(
        JSON.stringify({
          success: false,
          error: 'Please provide a valid phone number.'
        })
      );
    }

    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      if (typeof res.setHeader === 'function') {
        res.setHeader('Content-Type', 'application/json');
      }
      res.statusCode = 400;
      return res.end(
        JSON.stringify({
          success: false,
          error: 'Please provide a valid email address.'
        })
      );
    }

    if (!service) {
      if (typeof res.setHeader === 'function') {
        res.setHeader('Content-Type', 'application/json');
      }
      res.statusCode = 400;
      return res.end(
        JSON.stringify({
          success: false,
          error: 'Please select a service needed.'
        })
      );
    }

    // 4. Construct payload for Google Apps Script Web App
    // The exact sheet/tab name is "Elkhart"
    // The website is "elkhartgaragedoorrepair.com"
    const googleSheetsPayload = {
      sheet: 'Elkhart',
      website: 'elkhartgaragedoorrepair.com',
      name: name,
      phone: phone,
      email: email || '',
      city: city || 'Elkhart, IN',
      service: service,
      message: message || ''
    };

    const webhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL || DEFAULT_WEBHOOK_URL;

    // 5. Post to Google Apps Script Web App with timeout
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 20000);

    const sheetsResponse = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(googleSheetsPayload),
      redirect: 'follow',
      signal: controller.signal
    });

    clearTimeout(timeoutId);

    // 6. Check Google Apps Script Response
    if (!sheetsResponse.ok) {
      console.error(
        '[API /api/contact] Google Apps Script responded with error status:',
        sheetsResponse.status,
        sheetsResponse.statusText
      );
      if (typeof res.setHeader === 'function') {
        res.setHeader('Content-Type', 'application/json');
      }
      res.statusCode = 502;
      return res.end(
        JSON.stringify({
          success: false,
          error: "Sorry, we couldn't send your request. Please call us directly."
        })
      );
    }

    const responseText = await sheetsResponse.text();
    let responseData: any = {};
    try {
      responseData = JSON.parse(responseText);
    } catch {
      // If response is not JSON but status is 200, assume success
      responseData = { status: 'success' };
    }

    // Check if Google Apps Script indicates failure in JSON
    if (responseData.error || responseData.success === false) {
      console.error('[API /api/contact] Google Apps Script returned error data:', responseData);
      if (typeof res.setHeader === 'function') {
        res.setHeader('Content-Type', 'application/json');
      }
      res.statusCode = 502;
      return res.end(
        JSON.stringify({
          success: false,
          error: "Sorry, we couldn't send your request. Please call us directly."
        })
      );
    }

    // 7. Confirmed success response
    if (typeof res.setHeader === 'function') {
      res.setHeader('Content-Type', 'application/json');
    }
    res.statusCode = 200;
    return res.end(
      JSON.stringify({
        success: true,
        message: "Thank you. Your request has been received. We'll be in touch shortly."
      })
    );
  } catch (error: any) {
    console.error('[API /api/contact] Unhandled error during submission:', error);
    if (typeof res.setHeader === 'function') {
      res.setHeader('Content-Type', 'application/json');
    }
    res.statusCode = 500;
    return res.end(
      JSON.stringify({
        success: false,
        error: "Sorry, we couldn't send your request. Please call us directly."
      })
    );
  }
}

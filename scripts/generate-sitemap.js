import fs from 'fs';
import path from 'path';
import fm from 'front-matter';

function getDomainFromEnv() {
  // 1. Check explicit custom site URL environment variables
  let domain = process.env.VITE_SITE_URL || process.env.SITE_URL || process.env.DOMAIN;

  // 2. Parse .env files for VITE_SITE_URL, SITE_URL, or DOMAIN
  if (!domain) {
    const envFiles = ['.env.local', '.env.production', '.env'];
    for (const envFile of envFiles) {
      const fullPath = path.join(process.cwd(), envFile);
      if (fs.existsSync(fullPath)) {
        const content = fs.readFileSync(fullPath, 'utf8');
        const lines = content.split('\n');
        for (const line of lines) {
          const trimmed = line.trim();
          if (trimmed.startsWith('#') || !trimmed.includes('=')) continue;
          const [key, ...valParts] = trimmed.split('=');
          const val = valParts.join('=').trim().replace(/^["']|["']$/g, '');
          const cleanKey = key.trim();
          if (['VITE_SITE_URL', 'SITE_URL', 'DOMAIN'].includes(cleanKey) && val) {
            domain = val;
            break;
          }
        }
      }
      if (domain) break;
    }
  }

  // 3. Fallback to platform APP_URL or default site domain
  if (!domain) {
    domain = (process.env.APP_URL && process.env.APP_URL !== 'MY_APP_URL')
      ? process.env.APP_URL
      : 'https://www.garagedoorrepairelkhart.com';
  }

  // Ensure domain starts with http:// or https:// and has no trailing slash
  if (!domain.startsWith('http://') && !domain.startsWith('https://')) {
    domain = `https://${domain}`;
  }
  return domain.replace(/\/+$/, '');
}

const DOMAIN = getDomainFromEnv();
const BLOG_DIR = path.join(process.cwd(), 'content', 'blog');
const SITEMAP_PATH = path.join(process.cwd(), 'public', 'sitemap.xml');

const staticPages = [
  { loc: '/', changefreq: 'daily', priority: '1.0' },
  { loc: '/garage-door-repair', changefreq: 'weekly', priority: '0.9' },
  { loc: '/garage-door-spring-repair', changefreq: 'weekly', priority: '0.9' },
  { loc: '/garage-door-opener-repair', changefreq: 'weekly', priority: '0.9' },
  { loc: '/garage-door-opener-installation', changefreq: 'weekly', priority: '0.9' },
  { loc: '/garage-door-installation', changefreq: 'weekly', priority: '0.9' },
  { loc: '/emergency-garage-door-repair', changefreq: 'weekly', priority: '0.9' },
  { loc: '/city/elkhart', changefreq: 'weekly', priority: '0.8' },
  { loc: '/city/goshen', changefreq: 'weekly', priority: '0.8' },
  { loc: '/city/bristol', changefreq: 'weekly', priority: '0.8' },
  { loc: '/city/middlebury', changefreq: 'weekly', priority: '0.8' },
  { loc: '/city/dunlap', changefreq: 'weekly', priority: '0.8' },
  { loc: '/city/osceola', changefreq: 'weekly', priority: '0.8' },
  { loc: '/city/mishawaka', changefreq: 'weekly', priority: '0.8' },
  { loc: '/city/granger', changefreq: 'weekly', priority: '0.8' },
  { loc: '/city/nappanee', changefreq: 'weekly', priority: '0.8' },
  { loc: '/city/wakarusa', changefreq: 'weekly', priority: '0.8' },
  { loc: '/city/edwardsburg', changefreq: 'weekly', priority: '0.8' },
  { loc: '/city/simonton-lake', changefreq: 'weekly', priority: '0.8' },
  { loc: '/city/concord', changefreq: 'weekly', priority: '0.8' },
  { loc: '/blog', changefreq: 'daily', priority: '0.8' },
  { loc: '/about', changefreq: 'monthly', priority: '0.7' },
  { loc: '/why-choose-us', changefreq: 'monthly', priority: '0.7' },
  { loc: '/service-areas', changefreq: 'monthly', priority: '0.7' },
  { loc: '/faqs', changefreq: 'monthly', priority: '0.7' },
  { loc: '/contact', changefreq: 'monthly', priority: '0.8' },
  { loc: '/privacy-policy', changefreq: 'yearly', priority: '0.3' },
  { loc: '/terms-and-conditions', changefreq: 'yearly', priority: '0.3' },
];

function generateSitemap() {
  const blogPosts = [];

  if (fs.existsSync(BLOG_DIR)) {
    const files = fs.readdirSync(BLOG_DIR);
    for (const file of files) {
      if (file.endsWith('.md') || file.endsWith('.mdx')) {
        const filePath = path.join(BLOG_DIR, file);
        const fileContent = fs.readFileSync(filePath, 'utf8');
        try {
          const parsed = fm(fileContent);
          const { slug, updatedDate, date } = parsed.attributes || {};
          if (slug) {
            blogPosts.push({
              slug,
              lastmod: updatedDate || date || new Date().toISOString().split('T')[0]
            });
          }
        } catch (err) {
          console.error(`Failed to parse markdown file ${file}:`, err);
        }
      }
    }
  }

  let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
  xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

  // Static Pages
  for (const page of staticPages) {
    xml += `  <url>\n`;
    xml += `    <loc>${DOMAIN}${page.loc}</loc>\n`;
    xml += `    <changefreq>${page.changefreq}</changefreq>\n`;
    xml += `    <priority>${page.priority}</priority>\n`;
    xml += `  </url>\n`;
  }

  // Blog Articles
  for (const post of blogPosts) {
    xml += `  <!-- Blog Post: ${post.slug} -->\n`;
    xml += `  <url>\n`;
    xml += `    <loc>${DOMAIN}/blog/${post.slug}</loc>\n`;
    xml += `    <lastmod>${post.lastmod}</lastmod>\n`;
    xml += `    <changefreq>weekly</changefreq>\n`;
    xml += `    <priority>0.8</priority>\n`;
    xml += `  </url>\n`;
  }

  xml += `</urlset>\n`;

  fs.writeFileSync(SITEMAP_PATH, xml, 'utf8');
  console.log(`[Sitemap] Generated sitemap.xml for ${DOMAIN} with ${staticPages.length + blogPosts.length} entries.`);

  const ROBOTS_PATH = path.join(process.cwd(), 'public', 'robots.txt');
  const robotsTxt = `User-agent: *\nAllow: /\n\nSitemap: ${DOMAIN}/sitemap.xml\n`;
  fs.writeFileSync(ROBOTS_PATH, robotsTxt, 'utf8');
  console.log(`[Robots] Generated robots.txt pointing to ${DOMAIN}/sitemap.xml`);
}

generateSitemap();

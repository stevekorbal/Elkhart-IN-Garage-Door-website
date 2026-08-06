import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeView from './components/HomeView';
import ServiceView from './components/ServiceView';
import CityView from './components/CityView';
import FaqView from './components/FaqView';
import AboutView from './components/AboutView';
import ContactView from './components/ContactView';
import LegalViews from './components/LegalViews';
import ServiceAreasView from './components/ServiceAreasView';
import WhyChooseUsView from './components/WhyChooseUsView';
import BlogIndexView from './components/BlogIndexView';
import BlogPostView from './components/BlogPostView';
import { servicesData } from './data/servicesData';
import { citiesData } from './data/citiesData';
import { getPostBySlug } from './lib/blog';

declare global {
  interface Window {
    dataLayer?: any[];
    gtag?: (...args: any[]) => void;
  }
}

export default function App() {
  const [currentPath, setCurrentPath] = useState(() => {
    const path = window.location.pathname.replace(/^\/|\/$/g, '') || 'home';
    return path;
  });

  // Google Analytics & Search Console Integration
  useEffect(() => {
    // Global listener for cross-origin third-party script errors
    const handleGlobalError = (event: ErrorEvent) => {
      if (event.message === 'Script error.' || event.filename?.includes('googletagmanager')) {
        // Prevent generic third-party script errors from crashing or logging as unhandled exceptions
        event.preventDefault();
      }
    };
    window.addEventListener('error', handleGlobalError);

    const gaMeasurementId = import.meta.env.VITE_GA_MEASUREMENT_ID;
    const searchConsoleVerification = import.meta.env.VITE_GOOGLE_SITE_VERIFICATION;

    // 1. Google Search Console Verification Tag Update
    if (searchConsoleVerification && searchConsoleVerification !== 'YOUR_GOOGLE_SEARCH_CONSOLE_VERIFICATION_CODE') {
      try {
        let gscMeta = document.querySelector('meta[name="google-site-verification"]');
        if (!gscMeta) {
          gscMeta = document.createElement('meta');
          gscMeta.setAttribute('name', 'google-site-verification');
          document.head.appendChild(gscMeta);
        }
        gscMeta.setAttribute('content', searchConsoleVerification);
      } catch (err) {
        console.warn('GSC verification tag injection failed:', err);
      }
    }

    // 2. Google Analytics (GA4) Integration
    if (gaMeasurementId && gaMeasurementId !== 'G-XXXXXXXXXX') {
      try {
        if (!document.getElementById('ga-gtag-script')) {
          const script = document.createElement('script');
          script.id = 'ga-gtag-script';
          script.async = true;
          script.onerror = () => {
            console.warn('Google Analytics script failed to load or was blocked.');
          };
          script.src = `https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}`;
          document.head.appendChild(script);

          window.dataLayer = window.dataLayer || [];
          window.gtag = function () {
            try {
              window.dataLayer?.push(arguments);
            } catch (err) {
              console.warn('GTag call failed:', err);
            }
          };
          window.gtag('js', new Date());
          window.gtag('config', gaMeasurementId);
        } else if (typeof window.gtag === 'function') {
          // Send page view event on route change
          const pagePath = currentPath === 'home' || currentPath === '' ? '/' : `/${currentPath}`;
          window.gtag('config', gaMeasurementId, {
            page_path: pagePath,
            page_title: document.title
          });
        }
      } catch (err) {
        console.warn('GA initialization error handled:', err);
      }
    }

    return () => {
      window.removeEventListener('error', handleGlobalError);
    };
  }, [currentPath]);

  // Monitor URL history state routing
  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname.replace(/^\/|\/$/g, '') || 'home';
      setCurrentPath(path);
      window.scrollTo({ top: 0, behavior: 'instant' });
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Dynamic SEO Tag and Schema Injection
  useEffect(() => {
    // 1. Determine Title & Description based on currentPath
    let title = 'Garage Door Repair Elkhart IN | Same-Day Service';
    let description = 'Premium, fast-loading garage door repair, spring replacement, opener installation, and 24/7 emergency services in Elkhart, IN and surrounding Northern Indiana communities.';
    let schemaJson: any = null;

    const envDomain = import.meta.env.VITE_SITE_URL || import.meta.env.VITE_DOMAIN;
    const origin = typeof window !== 'undefined' ? window.location.origin : '';
    const isLocalOrDev = origin.includes('localhost') || origin.includes('127.0.0.1') || origin.includes('run.app');
    const baseDomain = (envDomain || (!isLocalOrDev && origin ? origin : 'https://www.garagedoorrepairelkhart.com')).replace(/\/+$/, '');
    const canonicalUrl = `${baseDomain}/${currentPath === 'home' || currentPath === '' ? '' : currentPath}`;

    const serviceIds = [
      'garage-door-repair',
      'garage-door-spring-repair',
      'garage-door-opener-repair',
      'garage-door-opener-installation',
      'garage-door-installation',
      'emergency-garage-door-repair'
    ];

    let cleanServiceId = '';
    if (currentPath.startsWith('service/')) {
      cleanServiceId = currentPath.split('/')[1];
    } else if (serviceIds.includes(currentPath)) {
      cleanServiceId = currentPath;
    }

    if (cleanServiceId && servicesData[cleanServiceId]) {
      const service = servicesData[cleanServiceId];
      title = service.metaTitle;
      description = service.metaDescription;

      // Build Service Schema & FAQ Schema
      const mainSchema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        'name': service.title.split('|')[0].trim(),
        'description': service.shortDesc,
        'provider': {
          '@type': 'LocalBusiness',
          'name': 'Elkhart Garage Door Repair',
          'telephone': '+15745558240',
          'priceRange': '$$',
          'image': 'https://elkhartgaragedoor.com/src/assets/images/garage_door_hero_1784628372796.jpg',
          'address': {
            '@type': 'PostalAddress',
            'addressLocality': 'Elkhart',
            'addressRegion': 'IN',
            'postalCode': '46516',
            'addressCountry': 'US'
          }
        },
        'areaServed': [
          { '@type': 'AdministrativeArea', 'name': 'Elkhart, IN' },
          { '@type': 'AdministrativeArea', 'name': 'Goshen, IN' },
          { '@type': 'AdministrativeArea', 'name': 'Bristol, IN' },
          { '@type': 'AdministrativeArea', 'name': 'Middlebury, IN' },
          { '@type': 'AdministrativeArea', 'name': 'Dunlap, IN' },
          { '@type': 'AdministrativeArea', 'name': 'Osceola, IN' },
          { '@type': 'AdministrativeArea', 'name': 'Mishawaka, IN' },
          { '@type': 'AdministrativeArea', 'name': 'Granger, IN' },
          { '@type': 'AdministrativeArea', 'name': 'Nappanee, IN' },
          { '@type': 'AdministrativeArea', 'name': 'Wakarusa, IN' },
          { '@type': 'AdministrativeArea', 'name': 'Edwardsburg, MI' },
          { '@type': 'AdministrativeArea', 'name': 'Simonton Lake, IN' },
          { '@type': 'AdministrativeArea', 'name': 'Concord, IN' }
        ]
      };

      if (service.faqs && service.faqs.length > 0) {
        schemaJson = [
          mainSchema,
          {
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            'mainEntity': service.faqs.map(faq => ({
              '@type': 'Question',
              'name': faq.question,
              'acceptedAnswer': {
                '@type': 'Answer',
                'text': faq.answer
              }
            }))
          }
        ];
      } else {
        schemaJson = mainSchema;
      }
    } else if (currentPath.startsWith('city/')) {
      const cityId = currentPath.split('/')[1];
      if (citiesData[cityId]) {
        const city = citiesData[cityId];
        title = city.metaTitle;
        description = city.metaDescription;

        schemaJson = {
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          'name': `Elkhart Garage Door Repair - ${city.cityName}`,
          'description': city.intro,
          'telephone': '+15745558240',
          'priceRange': '$$',
          'url': canonicalUrl,
          'address': {
            '@type': 'PostalAddress',
            'addressLocality': city.cityName.split(',')[0].trim(),
            'addressRegion': city.cityName.includes('MI') ? 'MI' : 'IN',
            'addressCountry': 'US'
          }
        };
      }
    } else if (currentPath.startsWith('blog/')) {
      const slug = currentPath.replace(/^blog\//, '');
      const post = getPostBySlug(slug);
      if (post) {
        title = `${post.title} | Elkhart Garage Door Repair`;
        description = post.description;

        schemaJson = {
          '@context': 'https://schema.org',
          '@type': 'BlogPosting',
          'headline': post.title,
          'description': post.description,
          'image': [
            post.featuredImage.startsWith('http')
              ? post.featuredImage
              : `${baseDomain}${post.featuredImage.startsWith('/') ? '' : '/'}${post.featuredImage}`
          ],
          'datePublished': post.date,
          'dateModified': post.updatedDate || post.date,
          'author': {
            '@type': 'Organization',
            'name': post.author
          },
          'publisher': {
            '@type': 'Organization',
            'name': 'Elkhart Garage Door Repair',
            'logo': {
              '@type': 'ImageObject',
              'url': `${baseDomain}/assets/images/garage-door-repair.png`
            }
          },
          'mainEntityOfPage': {
            '@type': 'WebPage',
            '@id': canonicalUrl
          }
        };
      }
    } else {
      switch (currentPath) {
        case 'blog':
          title = 'Blog & Repair Guides | Elkhart Garage Door Repair';
          description = 'Expert garage door repair guides, spring replacement cost breakdowns, and opener troubleshooting tips for Elkhart, IN and Northern Indiana homeowners.';
          break;
        case 'about':
          title = 'About Us | Elkhart Garage Door Repair Elkhart IN';
          description = 'Learn about Elkhart Garage Door Repair in Elkhart, IN. Licensed, bonded, and insured local overhead door specialists.';
          break;
        case 'why-choose-us':
          title = 'Why Choose Us | Elkhart Garage Door Repair Elkhart IN';
          description = 'Discover why homeowners and businesses in Elkhart, IN trust us for their garage door repairs and installations. Same-day service, clear warranties.';
          break;
        case 'service-areas':
          title = 'Service Areas | Garage Door Repair in Elkhart & Northern IN';
          description = 'We proudly serve Elkhart, Goshen, Bristol, Middlebury, Dunlap, Osceola, Mishawaka, Granger, Nappanee, Wakarusa, Edwardsburg, Simonton Lake, and Concord.';
          break;
        case 'faqs':
          title = 'Frequently Asked Questions | Garage Door Repair Elkhart IN';
          description = 'Got questions about broken springs, opener issues, or new door installations? Check out our helpful FAQs or call today for immediate help.';
          break;
        case 'contact':
          title = 'Contact Us | Elkhart Garage Door Repair Elkhart IN';
          description = 'Get in touch with our local team for emergency repairs or free estimates in Elkhart, IN. We\'re available 24/7 at (574) 555-8240.';
          break;
        case 'privacy-policy':
          title = 'Privacy Policy | Elkhart Garage Door Repair';
          description = 'Read our privacy policy to understand how we protect your information when you contact us for garage door services.';
          break;
        case 'terms-and-conditions':
          title = 'Terms & Conditions | Elkhart Garage Door Repair';
          description = 'Review our service terms and conditions for residential and commercial garage door services.';
          break;
        default:
          title = 'Garage Door Repair Elkhart IN | Same-Day Service';
          description = 'Premium, fast-loading garage door repair, spring replacement, opener installation, and 24/7 emergency services in Elkhart, IN and surrounding Northern Indiana communities.';
          break;
      }

      // Default LocalBusiness Schema for static views / home
      schemaJson = {
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        'name': 'Elkhart Garage Door Repair',
        'image': 'https://elkhartgaragedoor.com/src/assets/images/garage_door_hero_1784628372796.jpg',
        '@id': 'https://elkhartgaragedoor.com/',
        'url': 'https://elkhartgaragedoor.com/',
        'telephone': '+15745558240',
        'priceRange': '$$',
        'address': {
          '@type': 'PostalAddress',
          'addressLocality': 'Elkhart',
          'addressRegion': 'IN',
          'postalCode': '46516',
          'addressCountry': 'US'
        },
        'geo': {
          '@type': 'GeoCoordinates',
          'latitude': 41.6819,
          'longitude': -85.9767
        },
        'openingHoursSpecification': {
          '@type': 'OpeningHoursSpecification',
          'dayOfWeek': [
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday',
            'Sunday'
          ],
          'opens': '00:00',
          'closes': '23:59'
        },
        'areaServed': [
          { '@type': 'AdministrativeArea', 'name': 'Elkhart, IN' },
          { '@type': 'AdministrativeArea', 'name': 'Goshen, IN' },
          { '@type': 'AdministrativeArea', 'name': 'Bristol, IN' },
          { '@type': 'AdministrativeArea', 'name': 'Middlebury, IN' },
          { '@type': 'AdministrativeArea', 'name': 'Dunlap, IN' },
          { '@type': 'AdministrativeArea', 'name': 'Osceola, IN' },
          { '@type': 'AdministrativeArea', 'name': 'Mishawaka, IN' },
          { '@type': 'AdministrativeArea', 'name': 'Granger, IN' },
          { '@type': 'AdministrativeArea', 'name': 'Nappanee, IN' },
          { '@type': 'AdministrativeArea', 'name': 'Wakarusa, IN' },
          { '@type': 'AdministrativeArea', 'name': 'Edwardsburg, MI' },
          { '@type': 'AdministrativeArea', 'name': 'Simonton Lake, IN' },
          { '@type': 'AdministrativeArea', 'name': 'Concord, IN' }
        ]
      };
    }

    // 2. Set Document Title
    document.title = title;

    // 3. Set Description Meta tag
    let metaDescriptionEl = document.querySelector('meta[name="description"]');
    if (!metaDescriptionEl) {
      metaDescriptionEl = document.createElement('meta');
      metaDescriptionEl.setAttribute('name', 'description');
      document.head.appendChild(metaDescriptionEl);
    }
    metaDescriptionEl.setAttribute('content', description);

    // 4. Set Canonical Link tag
    let canonicalLinkEl = document.querySelector('link[rel="canonical"]');
    if (!canonicalLinkEl) {
      canonicalLinkEl = document.createElement('link');
      canonicalLinkEl.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLinkEl);
    }
    canonicalLinkEl.setAttribute('href', canonicalUrl);

    // 5. Inject/Update Schema JSON-LD script
    let schemaScriptEl = document.getElementById('seo-schema-markup');
    if (schemaScriptEl) {
      schemaScriptEl.remove();
    }
    if (schemaJson) {
      schemaScriptEl = document.createElement('script');
      schemaScriptEl.setAttribute('id', 'seo-schema-markup');
      schemaScriptEl.setAttribute('type', 'application/ld+json');
      schemaScriptEl.textContent = JSON.stringify(schemaJson);
      document.head.appendChild(schemaScriptEl);
    }
  }, [currentPath]);

  const handleNavigate = (path: string) => {
    const targetPath = path === 'home' || path === '' ? '/' : `/${path}`;
    window.history.pushState(null, '', targetPath);
    setCurrentPath(path === 'home' ? 'home' : path);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  // Render correct view based on path
  const renderContent = () => {
    if (currentPath === 'home' || currentPath === '') {
      return <HomeView onNavigate={handleNavigate} />;
    }
    
    const serviceIds = [
      'garage-door-repair',
      'garage-door-spring-repair',
      'garage-door-opener-repair',
      'garage-door-opener-installation',
      'garage-door-installation',
      'emergency-garage-door-repair'
    ];

    if (currentPath.startsWith('service/')) {
      const serviceId = currentPath.split('/')[1];
      return <ServiceView serviceId={serviceId} onNavigate={handleNavigate} />;
    }

    if (serviceIds.includes(currentPath)) {
      return <ServiceView serviceId={currentPath} onNavigate={handleNavigate} />;
    }

    if (currentPath.startsWith('city/')) {
      const cityId = currentPath.split('/')[1];
      return <CityView cityId={cityId} onNavigate={handleNavigate} />;
    }

    if (currentPath === 'blog') {
      return <BlogIndexView onNavigate={handleNavigate} />;
    }

    if (currentPath.startsWith('blog/')) {
      const slug = currentPath.replace(/^blog\//, '');
      return <BlogPostView slug={slug} onNavigate={handleNavigate} />;
    }

    switch (currentPath) {
      case 'about':
        return <AboutView onNavigate={handleNavigate} />;
      case 'why-choose-us':
        return <WhyChooseUsView onNavigate={handleNavigate} />;
      case 'service-areas':
        return <ServiceAreasView onNavigate={handleNavigate} />;
      case 'faqs':
        return <FaqView onNavigate={handleNavigate} />;
      case 'contact':
        return <ContactView onNavigate={handleNavigate} />;
      case 'privacy-policy':
        return <LegalViews type="privacy" onNavigate={handleNavigate} />;
      case 'terms-and-conditions':
        return <LegalViews type="terms" onNavigate={handleNavigate} />;
      default:
        // Default Fallback
        return <HomeView onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-between overflow-x-hidden selection:bg-amber-500 selection:text-slate-950">
      {/* Dynamic Header */}
      <Header currentPath={currentPath} onNavigate={handleNavigate} />

      {/* Primary Page Content */}
      <main className="flex-grow w-full">
        {renderContent()}
      </main>

      {/* Unified Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}

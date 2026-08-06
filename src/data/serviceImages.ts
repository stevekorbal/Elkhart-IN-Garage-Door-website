// Central mapping of all services to professional, realistic, high-quality images.
// These are shared consistently between the home page cards and the individual service detail pages.

export const serviceImages: Record<string, string> = {
'garage-door-repair': '/images/garage-door-repair.webp',
  'garage-door-spring-repair': '/images/garage-door-spring-repair.webp', // Technical steel spring/mechanic
  'garage-door-opener-repair': '/images/garage-door-opener-repair.webp', // Electronic motor circuit repair
  'garage-door-opener-installation': '/images/garage-door-opener-installation.webp', // Technical maintenance worker installing/tuning
  'garage-door-installation': '/images/garage-door-installation.webp', // Beautiful residential modern garage doors
  'emergency-garage-door-repair': '/images/emergency-garage-door-repair.webp', // Nighttime glowing garage
};

// Default high-quality fallback image (technician on site)
export const DEFAULT_SERVICE_IMAGE = '/images/garage-door-repair.webp';

export function getServiceImage(serviceId: string): string {
  return serviceImages[serviceId] || DEFAULT_SERVICE_IMAGE;
}

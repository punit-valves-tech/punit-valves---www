import type { MetadataRoute } from 'next'

const ORIGIN = "http://www.punitvalves.com";
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/private/', '/studio/'],
    },
    sitemap: `${ORIGIN}/sitemap.xml`,
  }
}
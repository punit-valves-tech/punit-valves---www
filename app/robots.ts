import { ORIGIN } from '@/lib/content/constants'
import type { MetadataRoute } from 'next'
 
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
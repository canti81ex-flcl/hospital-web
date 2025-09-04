import { MetadataRoute } from 'next'
import { SNU_CLINIC_INFO } from '@/lib/seo'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/private/', '/admin/'],
    },
    sitemap: `${SNU_CLINIC_INFO.url}/sitemap.xml`,
  }
}

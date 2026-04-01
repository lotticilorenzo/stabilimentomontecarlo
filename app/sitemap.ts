import { MetadataRoute } from 'next'

const URL = 'https://www.bagnomontecarlo.it'

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    '/bagni',
    '/chi-siamo',
    '/contatti',
    '/cucina',
    '/pizza',
    '/ristorazione',
    '/aperitivi',
  ]

  return routes.map((route) => ({
    url: `${URL}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: route === '' ? 'monthly' : 'weekly',
    priority: route === '' ? 1 : 0.8,
  }))
}

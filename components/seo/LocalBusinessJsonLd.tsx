export default function LocalBusinessJsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'Restaurant', 'EntertainmentBusiness'],
    name: 'Bagno Montecarlo',
    image: 'https://www.bagnomontecarlo.it/opengraph-image.png',
    '@id': 'https://www.bagnomontecarlo.it',
    url: 'https://www.bagnomontecarlo.it',
    telephone: '+390544000000',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Viale della Pace, 421',
      addressLocality: 'Ravenna',
      postalCode: '48122',
      addressCountry: 'IT',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 44.43,
      longitude: 12.17,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday',
        ],
        opens: '08:30',
        closes: '20:00',
        validFrom: '2024-05-01',
        validThrough: '2024-09-30',
      },
    ],
    priceRange: '$$',
    servesCuisine: ['Italian', 'Seafood', 'Mediterranean'],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}

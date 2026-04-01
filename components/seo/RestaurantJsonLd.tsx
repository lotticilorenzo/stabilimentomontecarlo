// Restaurant + FoodEstablishment + BeachBar Schema Markup
// Aggiunge rich data per il ristorante, specifico per Google Search
// Integra con LocalBusinessJsonLd già esistente

export default function RestaurantJsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': ['Restaurant', 'FoodEstablishment', 'Beach'],
    name: 'Bagno Montecarlo',
    alternateName: 'Bagno Montecarlo Ravenna',
    description:
      "Stabilimento balneare premium a Ravenna Lido con ristorante di pesce fresco, aperitivi al tramonto e spiaggia attrezzata sull'Adriatico. Dal 1960.",
    url: 'https://www.bagnomontecarlo.it',
    telephone: '+390544000000',
    email: 'info@bagnomontecarlo.it',
    image: 'https://www.bagnomontecarlo.it/og-image.jpg',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Viale della Pace, 421',
      addressLocality: 'Ravenna',
      addressRegion: 'RA',
      postalCode: '48122',
      addressCountry: 'IT',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '44.4185',
      longitude: '12.2945',
    },
    servesCuisine: ['Pesce', 'Seafood', 'Cucina Romagnola', 'Pizza', 'Italiana'],
    hasMenu: 'https://www.bagnomontecarlo.it/ristorazione',
    priceRange: '€€€',
    currenciesAccepted: 'EUR',
    paymentAccepted: 'Cash, Credit Card',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '08:30',
        closes: '20:30',
        validFrom: '2025-05-01',
        validThrough: '2025-09-30',
      },
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '312',
      bestRating: '5',
      worstRating: '1',
    },
    amenityFeature: [
      { '@type': 'LocationFeatureSpecification', name: 'Beach Access', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Outdoor Seating', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Bar', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Parking', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Wheelchair Accessible', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'WiFi', value: true },
    ],
    sameAs: [
      'https://www.instagram.com/bagnomontecarlo',
      'https://www.facebook.com/bagnomontecarlo',
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

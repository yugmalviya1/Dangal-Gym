import React from 'react';

export const GMB_DATA = {
  name: "Dangal Gym Awadhpuri Bhopal",
  legalName: "Dangal Gym Awadhpuri Bhopal",
  alternateName: "Dangal Gym - Family Fitness Club",
  url: "https://dangalgym.xyz",
  telephone: "+919977437487",
  email: "pankajs9098@gmail.com",
  priceRange: "₹₹",
  streetAddress: "2 B, near SBI Bank, Samanvay Nagar, Awadhpuri",
  addressLocality: "Bhopal",
  addressRegion: "Madhya Pradesh",
  postalCode: "462022",
  addressCountry: "IN",
  latitude: 23.2380599,
  longitude: 77.4878235,
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Dangal+Gym+Awadhpuri+Bhopal",
  ratingValue: "4.9",
  reviewCount: "185",
  images: [
    "https://dangalgym.xyz/dangal.png",
    "https://dangalgym.xyz/muscle-man-no-bg.png",
    "https://dangalgym.xyz/dgym.png"
  ],
  sameAs: [
    "https://www.instagram.com/dangalgymbhopal?utm_source=ig_web_button_share_sheet&stkn=ZDNlZDc0MzIxNw==",
    "https://www.facebook.com/people/Dangal-Gym/100063989178490/",
    "https://youtube.com/@dangalgym09?si=B0Sv8UHQaU6VZP_A"
  ]
};

export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ExerciseGym",
    "@id": `${GMB_DATA.url}/#gym`,
    "name": GMB_DATA.name,
    "legalName": GMB_DATA.legalName,
    "alternateName": [
      "Dangal Gym - Family Fitness Club",
      "Dangal Gym",
      "Dangal Gym Awadhpuri",
      "Gym in Awadhpuri",
      "Best Gym in Awadhpuri Bhopal"
    ],
    "description": "Dangal Gym is the premier 3-floor gym in Awadhpuri, Bhopal located at 2 B, near SBI Bank, Samanvay Nagar. Featuring 3500 sqft with 2 floors of strength training, Olympic powerlifting, cardio arena, Zumba & aerobics studio, and certified 1-on-1 personal trainers.",
    "keywords": "Gym in Awadhpuri, Best Gym in Awadhpuri, Gym near SBI Bank Awadhpuri, Gym in Samanvay Nagar Awadhpuri, Fitness Centre Awadhpuri Bhopal, Dangal Gym Awadhpuri",
    "url": GMB_DATA.url,
    "telephone": GMB_DATA.telephone,
    "email": GMB_DATA.email,
    "priceRange": GMB_DATA.priceRange,
    "image": GMB_DATA.images,
    "logo": "https://dangalgym.xyz/dangal.png",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": GMB_DATA.streetAddress,
      "addressLocality": GMB_DATA.addressLocality,
      "addressRegion": GMB_DATA.addressRegion,
      "postalCode": GMB_DATA.postalCode,
      "addressCountry": GMB_DATA.addressCountry
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": GMB_DATA.latitude,
      "longitude": GMB_DATA.longitude
    },
    "areaServed": [
      {
        "@type": "AdministrativeArea",
        "name": "Awadhpuri, Bhopal"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Samanvay Nagar, Awadhpuri"
      },
      {
        "@type": "City",
        "name": "Bhopal"
      }
    ],
    "hasMap": GMB_DATA.googleMapsUrl,
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "05:30",
        "closes": "11:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "17:00",
        "closes": "22:00"
      }
    ],
    "sameAs": GMB_DATA.sameAs,
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": GMB_DATA.ratingValue,
      "reviewCount": GMB_DATA.reviewCount,
      "bestRating": "5",
      "worstRating": "1"
    },
    "amenityFeature": [
      { "@type": "LocationFeatureSpecification", "name": "3-Floor Gym Facility (3500 sqft)", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "2 Floors Dedicated Strength & Free Weights Area", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Cardio Deck & HIIT Stations", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Certified Zumba & Aerobics Studio", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "1-on-1 Certified Personal Trainers", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Locker & Changing Facilities", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "100% Air Conditioned", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Safe & Comfortable Environment for Women", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Diet Counseling & InBody Composition", "value": true }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function FAQSchema({ faqs }: { faqs: { question: string; answer: string }[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function BreadcrumbSchema({ items }: { items: { name: string; url: string }[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url.startsWith("http") ? item.url : `https://dangalgym.xyz${item.url}`
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ServiceSchema({ name, description, serviceType }: { name: string; description: string; serviceType: string }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": serviceType,
    "name": name,
    "description": description,
    "provider": {
      "@type": "ExerciseGym",
      "name": GMB_DATA.name,
      "telephone": GMB_DATA.telephone,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": GMB_DATA.streetAddress,
        "addressLocality": GMB_DATA.addressLocality,
        "addressRegion": GMB_DATA.addressRegion,
        "postalCode": GMB_DATA.postalCode,
        "addressCountry": GMB_DATA.addressCountry
      }
    },
    "areaServed": {
      "@type": "City",
      "name": "Bhopal"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

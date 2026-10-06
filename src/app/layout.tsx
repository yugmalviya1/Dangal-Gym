import type { Metadata } from 'next';
import './globals.css';
import SmoothScroll from '@/components/SmoothScroll';
import { LocalBusinessSchema } from '@/components/StructuredData';

export const metadata: Metadata = {
  metadataBase: new URL('https://dangalgym.xyz'),
  title: {
    default: 'Dangal Gym - Best Gym in Awadhpuri | Fitness Centre in Bhopal',
    template: '%s | Dangal Gym Awadhpuri Bhopal'
  },
  description: 'Dangal Gym - Top-rated 3-floor gym & fitness centre in Awadhpuri, Bhopal. Strength training, personal coaching, Zumba, yoga, aerobics, and steam bath. Call +91 9977437487.',
  keywords: [
    'Gym in Awadhpuri',
    'Best Gym in Awadhpuri Bhopal',
    'Fitness Centre Awadhpuri',
    'Gym near SBI Bank Awadhpuri',
    'Personal Training Bhopal',
    'Zumba Classes Awadhpuri',
    'Yoga Classes Awadhpuri Bhopal',
    'Weight Training Gym Bhopal',
    'Ladies Gym Awadhpuri',
    'Dangal Gym',
    'Dangal Gym Awadhpuri',
    'Fitness Club Bhopal'
  ],
  authors: [{ name: 'Dangal Gym' }],
  creator: 'Dangal Gym',
  publisher: 'Dangal Gym',
  formatDetection: {
    telephone: true,
    address: true,
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://dangalgym.xyz',
    siteName: 'Dangal Gym - Family Fitness Club',
    title: 'Dangal Gym - Best Gym in Awadhpuri | Fitness Centre in Bhopal',
    description: 'Awadhpuri Bhopal\'s elite 3-floor fitness landmark. 3500 sqft facility featuring 2 floors of strength training, personal coaching, Zumba, and steam bath. 3-day free trial available.',
    images: [
      {
        url: 'https://dangalgym.xyz/dangal.png',
        width: 1200,
        height: 630,
        alt: 'Dangal Gym Awadhpuri Bhopal',
      },
      {
        url: 'https://dangalgym.xyz/muscle-man-no-bg.png',
        width: 800,
        height: 800,
        alt: 'Dangal Gym Fitness',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dangal Gym - Best Gym in Awadhpuri, Bhopal',
    description: 'Awadhpuri\'s elite 3-floor gym. Strength training, certified personal coaches, Zumba & aerobics.',
    images: ['https://dangalgym.xyz/dangal.png'],
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
  other: {
    'google-site-verification': 'mANwjSFjJojuZKHRZG2hbfUf0jqRXQkv4sW8-izWgJ8',
    'geo.region': 'IN-MP',
    'geo.placename': 'Awadhpuri, Bhopal',
    'geo.position': '23.23806;77.48782',
    'ICBM': '23.23806, 77.48782',
    'telephone': '+919977437487',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Montserrat:wght@400;600;700;800;900&family=Oswald:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
        <link rel="preload" href="/fonts/Neue Montreal/NeueMontreal-Regular.otf" as="font" type="font/otf" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/Neue Montreal/NeueMontreal-Medium.otf" as="font" type="font/otf" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/Neue Montreal/NeueMontreal-Bold.otf" as="font" type="font/otf" crossOrigin="anonymous" />
        <LocalBusinessSchema />
      </head>
      <body className="bg-brand-dark text-white font-sans overflow-x-hidden antialiased">
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}

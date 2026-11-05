import type { Metadata } from 'next';
import './globals.css';
import SmoothScroll from '@/components/SmoothScroll';
import { LocalBusinessSchema } from '@/components/StructuredData';

export const metadata: Metadata = {
  metadataBase: new URL('https://dangalgym.xyz'),
  title: {
    default: 'Gym in Awadhpuri - Dangal Gym | Best Fitness Centre in Bhopal',
    template: '%s | Dangal Gym - Gym in Awadhpuri Bhopal'
  },
  description: 'Dangal Gym is the premier gym in Awadhpuri, Bhopal located at 2 B, near SBI Bank, Samanvay Nagar. 3 floors, 3500 sqft, strength training, personal coaching, Zumba, and yoga. Morning: 5:30 am - 11 am. Call +91 9977437487.',
  keywords: [
    'gym in awadhpuri',
    'Gym in Awadhpuri',
    'best gym in awadhpuri',
    'Best Gym in Awadhpuri Bhopal',
    'gym near me in awadhpuri',
    'gym in samanvay nagar awadhpuri',
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
    title: 'Gym in Awadhpuri - Dangal Gym | Best Fitness Centre in Bhopal',
    description: 'Awadhpuri Bhopal\'s premier 3-floor fitness powerhouse located at 2 B, near SBI Bank, Samanvay Nagar. 3500 sqft facility for strength training, personal coaching, Zumba, and aerobics. 3-day free trial available.',
    images: [
      {
        url: 'https://dangalgym.xyz/dangal.png',
        width: 1200,
        height: 630,
        alt: 'Dangal Gym - Gym in Awadhpuri Bhopal',
      },
      {
        url: 'https://dangalgym.xyz/muscle-man-no-bg.png',
        width: 800,
        height: 800,
        alt: 'Dangal Gym Fitness Awadhpuri',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gym in Awadhpuri - Dangal Gym Bhopal',
    description: 'Premier 3-floor gym in Awadhpuri, Bhopal near SBI Bank, Samanvay Nagar. Strength training, certified personal coaches, Zumba & aerobics.',
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
    'geo.placename': 'Awadhpuri, Samanvay Nagar, Bhopal',
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
    <html lang="en" suppressHydrationWarning>
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
      <body className="bg-brand-dark text-white font-sans overflow-x-hidden antialiased" suppressHydrationWarning>
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}

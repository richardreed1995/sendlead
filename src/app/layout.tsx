import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sendlead | Lead Generation Agency",
  description: "Sendlead is a data-driven B2B lead generation agency delivering qualified leads for technology companies. Discover our proven 7-step methodology for systematic growth and ROI.",
  keywords: "lead generation, B2B leads, qualified leads, lead generation agency, business leads, sales leads, lead generation UK, lead generation services, CRM leads, exclusive leads",
  authors: [{ name: "Sendlead" }],
  creator: "Sendlead",
  publisher: "Sendlead",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://sendlead.co.uk'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://sendlead.co.uk',
    siteName: 'Sendlead',
    title: 'Sendlead | Lead Generation Agency',
    description: 'Sendlead is a data-driven B2B lead generation agency delivering qualified leads for technology companies. Discover our proven 7-step methodology for systematic growth and ROI.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Sendlead - Lead Generation Agency',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sendlead | Lead Generation Agency',
    description: 'Sendlead is a data-driven B2B lead generation agency delivering qualified leads for technology companies.',
    images: ['/og-image.jpg'],
    creator: '@sendlead',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.svg?v=2', type: 'image/svg+xml' },
      { url: '/favicon.ico?v=2', type: 'image/x-icon' },
      { url: '/favicon.png?v=2', type: 'image/png', sizes: '32x32' },
    ],
    shortcut: '/favicon.ico?v=2',
    apple: [
      { url: '/apple-touch-icon.png?v=2', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/manifest.json',
  other: {
    'msapplication-TileColor': '#2998FD',
    'theme-color': '#2998FD',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg?v=2" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico?v=2" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png?v=2" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png?v=2" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="msapplication-TileColor" content="#2998FD" />
        <meta name="theme-color" content="#2998FD" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

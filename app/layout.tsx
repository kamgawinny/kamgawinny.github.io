import './globals.css';
import type { Metadata } from 'next';
import { Playfair_Display, DM_Sans } from 'next/font/google';
import { Navigation } from '@/components/layout/Navigation';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Ma Vision QEHS pour L\'Oréal Recherche & Innovation | Winny KAMGA',
  description: 'Une feuille de route détaillée présentant 9 missions concrètes et des plans d\'action sur 4 horizons temporels pour contribuer à l\'excellence EHS de L\'Oréal R&I.',
  openGraph: {
    title: 'Ma Vision QEHS pour L\'Oréal R&I',
    description: 'Winny KAMGA - Candidature Ingénieur QEHS',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Ma Vision QEHS pour L\'Oréal Recherche & Innovation',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ma Vision QEHS pour L\'Oréal R&I',
    description: 'Winny KAMGA - Candidature Ingénieur QEHS',
    images: ['/og-image.jpg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${playfair.variable} ${dmSans.variable}`}>
      <body className="antialiased">
        <Navigation />
        {children}
      </body>
    </html>
  );
}

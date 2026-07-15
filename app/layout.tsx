import type { Metadata } from 'next';
import { Inter, Outfit } from 'next/font/google';
import Script from 'next/script';
import Cursor from '@/components/Cursor';
import ScrollHelper from '@/components/ScrollHelper';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit' });

export const metadata: Metadata = {
  metadataBase: new URL('https://vijaykakade.com'),
  title: 'Vijay Kakade | AI, Cloud & DevOps Engineer',
  description: 'Experienced IT Professional with 13+ years in infrastructure, cloud, DevOps, and Generative AI. Explore my multi-cloud projects, timeline, and certifications.',
  keywords: [
    'Vijay Kakade',
    'DevOps Engineer',
    'Cloud Architect',
    'AI Engineer',
    'Generative AI',
    'Terraform',
    'AWS',
    'Azure',
    'GCP',
    'Kubernetes'
  ],
  authors: [{ name: 'Vijay Kakade' }],
  creator: 'Vijay Kakade',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.vijaykakade.com',
    title: 'Vijay Kakade | AI, Cloud & DevOps Engineer',
    description: 'Experienced IT Professional with 13+ years in infrastructure, cloud, DevOps, and Generative AI.',
    siteName: 'Vijay Kakade Portfolio',
    images: [{ url: 'https://vijaykakade.com/logo.png', width: 1000, height: 1000, alt: 'Vijay Kakade' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vijay Kakade | AI, Cloud & DevOps Engineer',
    description: 'Experienced IT Professional with 13+ years in infrastructure, cloud, DevOps, and Generative AI.',
    images: ['https://vijaykakade.com/logo.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${outfit.variable} font-sans antialiased bg-[#121212]`}>
        {/* Google tag (gtag.js) — fires site-wide */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-18263681135"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-18263681135');
          `}
        </Script>
        <ScrollHelper />
        <Cursor />
        {children}
      </body>
    </html>
  );
}

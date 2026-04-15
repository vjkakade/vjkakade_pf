import type { Metadata } from 'next';
import { Inter, Outfit } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit' });

export const metadata: Metadata = {
  title: 'Vijay Kakade | AI, Cloud & DevOps Engineer',
  description: 'Experienced IT Professional with 12+ years in infrastructure, cloud, DevOps, and Generative AI. Explore my multi-cloud projects, timeline, and certifications.',
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
    description: 'Experienced IT Professional with 12+ years in infrastructure, cloud, DevOps, and Generative AI.',
    siteName: 'Vijay Kakade Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vijay Kakade | AI, Cloud & DevOps Engineer',
    description: 'Experienced IT Professional with 12+ years in infrastructure, cloud, DevOps, and Generative AI.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${outfit.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}

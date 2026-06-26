import React from 'react';
import Script from 'next/script';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Writings & Insights | Vijay Kakade - AI, Cloud & DevOps',
  description: 'Read the latest deep dives, guides, and tutorials on Cloud Native Automation, Generative AI engineering, Terraform IaC, and DevOps pipelines from Vijay Kakade.',
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* Google tag (gtag.js) */}
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
      {children}
    </>
  );
}

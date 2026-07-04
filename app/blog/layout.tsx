import React from 'react';
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
  return <>{children}</>;
}

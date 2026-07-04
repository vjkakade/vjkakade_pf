import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { blogs } from '@/utils/blogs';
import BlogDetailClient from '@/components/BlogDetailClient';

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const blog = blogs.find((b) => b.slug === params.slug);
  if (!blog) return {};

  return {
    title: `${blog.title} | Vijay Kakade`,
    description: blog.excerpt,
    openGraph: {
      title: blog.title,
      description: blog.excerpt,
      images: [{ url: `https://vijaykakade.com${blog.coverImage}`, width: 1200, height: 630, alt: blog.title }],
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: blog.title,
      description: blog.excerpt,
      images: [`https://vijaykakade.com${blog.coverImage}`],
    }
  };
}

interface PageProps {
  params: {
    slug: string;
  };
}

// Generate static params for static export
export function generateStaticParams() {
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

export default function BlogDetailPage({ params }: PageProps) {
  const { slug } = params;
  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) {
    notFound();
  }

  // Get related blogs: prefer same category, then fallback to recent posts (up to 2)
  const relatedBlogs = (() => {
    const sameCat = blogs.filter((b) => b.slug !== slug && b.category === blog!.category).slice(0, 2);
    if (sameCat.length >= 2) return sameCat;
    const others = blogs.filter((b) => b.slug !== slug && b.category !== blog!.category).slice(0, 2 - sameCat.length);
    return [...sameCat, ...others];
  })();

  return <BlogDetailClient blog={blog} relatedBlogs={relatedBlogs} />;
}

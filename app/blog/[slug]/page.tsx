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
      images: [{ url: blog.coverImage }],
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: blog.title,
      description: blog.excerpt,
      images: [blog.coverImage],
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

  // Get related blogs (up to 2 related articles, excluding the current one)
  const relatedBlogs = blogs.filter((b) => b.slug !== slug).slice(0, 2);

  return <BlogDetailClient blog={blog} relatedBlogs={relatedBlogs} />;
}

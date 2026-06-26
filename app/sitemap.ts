import { MetadataRoute } from 'next';
import { blogs } from '@/utils/blogs';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const blogUrls = blogs.map((blog) => ({
    url: `https://vijaykakade.com/blog/${blog.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [
    {
      url: 'https://vijaykakade.com',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1.0,
    },
    {
      url: 'https://vijaykakade.com/blog',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    ...blogUrls,
  ];
}

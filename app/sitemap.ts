import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{
			url: 'https://',
			lastModified: new Date(),
			changeFrequency: 'yearly',
			priority: 1,
		},
		{
			url: 'https:///ask',
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 0.8,
		},
		{
			url: 'https:///dev',
			lastModified: new Date(),
			changeFrequency: 'weekly',
			priority: 0.5,
		},
		{
			url: 'https:///faq',
			lastModified: new Date(),
			changeFrequency: 'weekly',
			priority: 0.5,
		},
		{
			url: 'https:///info',
			lastModified: new Date(),
			changeFrequency: 'weekly',
			priority: 0.5,
		},
		{
			url: 'https:///map',
			lastModified: new Date(),
			changeFrequency: 'weekly',
			priority: 0.5,
		},
		{
			url: 'https:///report',
			lastModified: new Date(),
			changeFrequency: 'weekly',
			priority: 0.5,
		},
	]
}

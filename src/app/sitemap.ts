// app/sitemap.ts
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{
			url: 'https://rentavtokavkaz.ru', 
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 1,
		},
	
	]
}

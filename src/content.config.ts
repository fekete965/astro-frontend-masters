import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

export const collections = {
	// loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
	blog: defineCollection({
		schema: z.object({
			title: z.string(),
			date: z.date(),
			description: z.string().max(200),
		}),
	}),
};

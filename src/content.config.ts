import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const image = z.object({ src: z.string(), alt: z.string().default(''), credit: z.string().default('') });

const seo = {
  title: z.string(),
  metaTitle: z.string().optional(),
  metaDescription: z.string().default(''),
  publishDate: z.string().optional(),
  updated: z.string().optional(),
  cover: image.optional(),
  excerpt: z.string().default(''),
};

/* /berlin/* — genre hubs, district hubs, special pages, guides */
const berlin = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/berlin' }),
  schema: z.object({
    ...seo,
    kind: z.enum(['genre', 'bezirk', 'special', 'guide']).default('guide'),
    // editorial verification metadata (filled by verify workflow)
    verified: z.boolean().default(false),
    verifiedNote: z.string().default(''),
  }),
});

/* /hotels/* — hotel listing pages */
const hotels = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/hotels' }),
  schema: z.object({
    ...seo,
    bezirk: z.string().default(''),
  }),
});

/* English (US) nightlife hubs — genre + district only. Mirrors /berlin/<slug>/
   under /en/berlin/<slug>/. DE content is never edited; EN lives here. */
const berlinEn = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/berlin-en' }),
  schema: z.object({
    ...seo,
    kind: z.enum(['genre', 'bezirk']).default('genre'),
  }),
});

/* English (US) hotel booking pages — mirrors /hotels/<slug>/ under /en/hotels/<slug>/. */
const hotelsEn = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/hotels-en' }),
  schema: z.object({
    ...seo,
    bezirk: z.string().default(''),
  }),
});

/* Off-topic / guest posts kept at their exact original path
   (e.g. /catering/..., /clubs/..., /reisen/..., /unternehmen/...) */
const extra = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/extra' }),
  schema: z.object({
    ...seo,
    path: z.string(), // full original path without leading/trailing slash, e.g. "catering/genussvolle-konzepte"
    isGuestPost: z.boolean().default(false),
  }),
});

export const collections = { berlin, hotels, extra, berlinEn, hotelsEn };

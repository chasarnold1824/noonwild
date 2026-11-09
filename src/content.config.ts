import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// One Markdown file per story in src/content/stories/. See STORY-GUIDE.md.
const stories = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/stories' }),
  schema: z.object({
    title: z.string(),
    dek: z.string(),                       // one-sentence summary for cards and SEO
    category: z.enum(['Destination guide', 'Explorer stories', 'Expert advice', 'Hotels']),
    region: z.string(),                    // e.g. "Yellowstone", "Rwanda"
    date: z.coerce.date(),
    image: z.string(),                     // path under /public, e.g. /img/gorilla.jpg
    imageAlt: z.string(),
    imagePosition: z.string().default('50% 50%'),
    imageCredit: z.string(),               // e.g. "Image courtesy of Sage Lodge.", "Photo: Chas Arnold."

    featured: z.boolean().default(false),
    draft: z.boolean().default(false),     // drafts show as "Coming soon" cards and get no page
    author: z.string().default('Chas Arnold'),
    authorRole: z.string().default('Noon Wild Advisor'),
    keyTakeaways: z.array(z.string()).default([]),
    faq: z.array(z.object({ q: z.string(), a: z.string() })).default([]),
    related: z.array(z.string()).default([]),   // slugs of other stories for "Further reading"
    imageSourceUrl: z.string().url().optional(), // page the hero image came from
    atAGlance: z.array(z.object({ label: z.string(), value: z.string() })).default([]),
    sources: z.array(z.object({ title: z.string(), url: z.string().url() })).default([]),
  }),
});

export const collections = { stories };

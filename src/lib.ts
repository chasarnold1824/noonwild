import { getCollection } from 'astro:content';
// Published first (newest first), then drafts as "coming soon".
export async function allStories() {
  const all = await getCollection('stories');
  const byDate = (a: any, b: any) => b.data.date.valueOf() - a.data.date.valueOf();
  return [...all.filter(s => !s.data.draft).sort(byDate), ...all.filter(s => s.data.draft).sort(byDate)];
}
export function readingTime(body = '') {
  return Math.max(1, Math.round(body.split(/\s+/).length / 230));
}
export const fmtDate = (d: Date) => d.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric', timeZone: 'UTC' });

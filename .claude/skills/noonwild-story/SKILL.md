---
name: noonwild-story
description: Research, write, illustrate and submit one Noon Wild journal story in Noon Travel's house format (explorer story plus how to travel it today, with cited hotel and destination images). Use for "write a story", "publish today's story", or the daily story run.
---

# Noon Wild story

Produces one finished story for noonwild.com: a Markdown file in `src/content/stories/`, its images, and a pull request for Chas to approve. The site is Astro, hosted on Netlify; merging to `main` publishes it.

Read before writing: `references/format.md` (structure and voice, modeled on noontravel.com/stories) and `references/images.md` (where images come from and how to credit them). `STORY-GUIDE.md` at the repo root lists the front-matter fields.

## Workflow

1. **Set up.** Work in the noonwild repo. `git pull`, then `npm install` if `node_modules` is missing.

2. **Pick the topic.** In this order:
   - A story the user named.
   - The oldest story in `src/content/stories/` with `draft: true` (a "Coming soon" card). Replace its stub.
   - Otherwise choose from demand signals, best first: Google Search Console queries for noonwild.com (if that connector is available: look for queries with impressions but no matching story), Apify trend results (if the Apify connector is available: Google Trends or Instagram/TikTok hashtag scrapers on luxury safari, expedition cruise, national park and explorer terms), then a web search for what luxury travel media are covering this month. Also skim noontravel.com/stories for what Noon is publishing, and do not duplicate Noon or an existing Noon Wild story.
   - Every topic must pair **a real place travelers can book today** with **a real person who went there first and did something surprising** (explorer, naturalist, writer, scientist). Prefer lesser-known, entertaining figures over famous ones. Avoid figures whose legacy is mainly violence or exploitation.

3. **Refresh the voice.** Fetch two recent stories from https://noontravel.com/stories and skim them so the draft matches Noon's current tone.

4. **Research.** Keep a fact table as you go (claim, source 1, source 2).
   - Historical facts: two independent sources each (encyclopedias, historical societies, museums, university or government pages). One source only: soften ("according to...") or cut.
   - Practical facts (seasons, roads, permits, prices): official sources first (national park services, tourism boards, permit offices).
   - Hotels and lodges: the property's own site plus Forbes Travel Guide or the MICHELIN Guide. Use real, operating properties only. Include specs Noon likes: room or suite count, rating or award, opening or renovation year.
   - Never invent quotes, numbers, dates or partnerships.

5. **Write** the story to `src/content/stories/<slug>.md` following `references/format.md`. Slug: lowercase, hyphenated, matches the title's search phrase.

6. **Images.** Source 3 to 6 images per `references/images.md`: a hero, one per hotel, one or two of the place or the historical figure. Save them to `public/img/` or hotlink per that file, and add the credit in each caption.

7. **Check.**
   - `npm run build` must pass.
   - Re-read the draft against the fact table; every number and date must trace to a source in `sources`.
   - No em dashes anywhere in the story. Use commas, colons or full stops.
   - Set `draft: false`, set `date` to today, set `featured: true` only if asked (and set the previous featured story to false).

8. **Submit for approval.** Create branch `story/<slug>`, commit, push, and open a pull request titled `Story: <title>`. In the PR body include: a two-line summary, the fact table, the image list (file, source page, credit), and anything uncertain. Do not merge. Chas approves by merging, which publishes the story.
   - If GitHub access fails, save the files and report exactly what to upload.
   - Only push straight to `main` if Chas has explicitly switched the run to auto-publish.

9. **Report** in two or three lines: the title, the PR link, and any facts or images that need his eye.

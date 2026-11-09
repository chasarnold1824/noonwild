# Noon Wild story guide

This is the rulebook for publishing a story to noonwild.com. People and AI agents both follow it.

## How publishing works

Each story is one Markdown file in `src/content/stories/`. Add or edit a file and push it to the `main` branch, and Netlify rebuilds and publishes the site in about a minute. The file name becomes the URL: `yellowstone-like-hemingway.md` becomes `noonwild.com/stories/yellowstone-like-hemingway/`.

## Front matter (required fields)

```yaml
---
title: How to plan a trip to Yellowstone like Hemingway
dek: One or two sentences for cards, search results and social previews.
category: Destination guide        # or: Explorer stories | Expert advice
region: Yellowstone
date: 2026-11-09
image: /img/yellowstone-bison.jpg  # file goes in public/img/
imageAlt: Plain description of what is in the picture.
imagePosition: 50% 60%             # optional crop focus
imageCredit: "Image courtesy of NPS / Jacob W. Frank."
featured: false                    # true puts it in the big homepage slot (one at a time)
draft: false                       # true = shows as "Coming soon", no page yet
keyTakeaways:                      # 3 to 5 bullets
  - ...
faq:                               # "What You Actually Want to Know"
  - q: ...
    a: ...
imageSourceUrl: https://...        # page the hero image came from
sources:                           # every factual claim must trace to one of these
  - title: "Publisher: Page title"
    url: https://...
---
```

## Editorial rules

1. **Every story is about a real place you can travel to today**, told through a real person who went there first. Titles read like travel guides: "How to plan a trip to X like Y", "How to visit X", "The [surprising true story], and how to see it now."
2. **Two sources for every historical fact**, linked in `sources`. If only one source supports a claim, soften it or cut it. Never invent quotes, dates or numbers.
3. **Hotels and lodges:** name only properties that are real and currently operating, and only facts their own site or a major guide (MICHELIN, Forbes Travel Guide) confirms. Do not imply a partnership unless one is signed.
4. **Format and voice:** follow `.claude/skills/noonwild-story/references/format.md` (Noon Travel house style). **No em dashes.** Use commas, colons or full stops.
5. **Length:** 800 to 1,500 words. Sections: the story, why this place, when to go, where to stay, a sample itinerary, a closing reflection.
6. **Review before publishing.** Agents write new stories with `draft: true` and open a pull request. A person (Chas) approves and merges.

## Image rules

See `.claude/skills/noonwild-story/references/images.md`. In short: hotel websites, Forbes Travel Guide, Unsplash, public archives and Chas's own photos, each credited under the image in Noon's style ("Image courtesy of [Property]."), logged in `image-log.csv`. Never AI images of anything a client could book.

## The publishing skill

The agent workflow lives in `.claude/skills/noonwild-story/SKILL.md`. Any Claude session that opens this repo can run it ("write today's story").

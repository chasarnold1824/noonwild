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
imageCredit: Photograph via Unsplash
featured: false                    # true puts it in the big homepage slot (one at a time)
draft: false                       # true = shows as "Coming soon", no page yet
atAGlance:                         # optional sidebar facts
  - label: Fly into
    value: Bozeman, Montana
sources:                           # every factual claim must trace to one of these
  - title: "Publisher: Page title"
    url: https://...
---
```

## Editorial rules

1. **Every story is about a real place you can travel to today**, told through a real person who went there first. Titles read like travel guides: "How to plan a trip to X like Y", "How to visit X", "The [surprising true story], and how to see it now."
2. **Two sources for every historical fact**, linked in `sources`. If only one source supports a claim, soften it or cut it. Never invent quotes, dates or numbers.
3. **Hotels and lodges:** name only properties that are real and currently operating, and only facts their own site or a major guide (MICHELIN, Forbes Travel Guide) confirms. Do not imply a partnership unless one is signed.
4. **No em dashes.** Use commas, colons or full stops.
5. **Length:** 800 to 1,500 words. Sections: the story, why this place, when to go, where to stay, a sample itinerary, a closing reflection.
6. **Review before publishing.** Agents write new stories with `draft: true` and open a pull request. A person (Chas) approves and merges.

## Image rules

Allowed, in order of preference:
1. Photos by Chas Arnold or the Noon team. Credit: `Photograph by Chas Arnold`.
2. Hotel and lodge media-kit photos with written permission on file. Credit as the property requests.
3. Partner tour operators' photo libraries, with permission.
4. Public-domain archives (Library of Congress, Smithsonian Open Access, National Archives, public-domain files on Wikimedia Commons). Credit the archive.
5. Unsplash or Pexels free-license photos (not Unsplash+). Credit: `Photograph via Unsplash`.
6. AI illustrations, credited `Illustration`. **Never** for hotel rooms, lodges, ships or anything a client could book.

Never pull images from Google Images, FTG, Instagram or a hotel website without written permission. Credit lines do not replace permission.

Images: landscape JPGs, about 2000px wide, under 500 KB, saved to `public/img/` with a descriptive name.

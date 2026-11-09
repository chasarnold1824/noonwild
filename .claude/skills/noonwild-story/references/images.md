# Images: sources and credits

Chas's decision: use real images from hotel websites, Forbes Travel Guide, Unsplash and public archives, each credited under the image in Noon's style. Keep a record of where every image came from so any owner's request can be handled fast.

## Where Noon gets its images (copy this mix)

Noon Travel's stories use, almost entirely, **hotel and brand press imagery** (Kona Village, Halekulani, 1 Hotel Hanalei Bay, Four Seasons, Le Sirenuse, Park Hyatt, Aman), re-hosted at full resolution and credited under each image. Heroes are a sharp, full-bleed destination photo. Follow the same mix:

| Image | Source, in order |
|---|---|
| Hero (full-bleed, must be at least 2000 px wide) | The featured lodge's own press or gallery image of the landscape; national park and government photo libraries (NPS, USGS, NOAA: public domain); tourism board media (e.g. Visit Rwanda); Unsplash full resolution |
| Each hotel, lodge, camp or ship | The property's own website gallery or press/media page, then its Forbes Travel Guide or MICHELIN Guide listing |
| Wildlife and landscape inside the story | NPS/USGS galleries, Unsplash, Wikimedia Commons |
| The historical person or event | Library of Congress, Smithsonian Open Access, National Archives, Wikimedia Commons (public domain) |
| Chas's own photos | `public/img/` (lion-dusk, lions-greeting, elephant, mammoth-snow, tent-interior, elk-snow, bighorn, tree-frog) |

Sharpness rule: never use an image under 1600 px wide inline or under 2000 px as a hero. For Unsplash, always use the full-resolution CDN URL `https://images.unsplash.com/photo-<id>?auto=format&fit=crop&w=2400&q=80`, never a downloaded preview. For WordPress hotel sites, strip the `-1024x683` style size suffix to get the original file.

## Never

- AI-generated images of any hotel, room, lodge, ship or anything a client could book.
- Unsplash+ (premium) images, watermarked stock (Getty, Shutterstock, Alamy previews).
- Photos of identifiable private individuals as the subject.
- Images from Instagram or other social accounts.

## Getting the file

1. Find the direct image URL. For a hotel or FTG page, WebFetch the page and ask for the `og:image` or the largest gallery image URL. For Unsplash, use the photo page's download URL.
2. Try to download it: `curl -L -o public/img/<slug>-<n>.jpg "<url>"`, then resize to max 2000 px wide and under 500 KB (Python Pillow: `img.thumbnail((2000, 2000)); img.save(path, quality=82)`).
3. If the download is blocked from this environment, hotlink instead: use the direct `https://` image URL as `image:` or in the `<img src>`. Note "hotlinked" in the PR so it can be swapped for a local copy later.

## Credits (Noon's exact format)

Every image gets a caption: a short description of the scene, then the credit. Noon's wording is "Image courtesy of [Source]." (or "Photo: [Photographer] / [Property]." when the photographer is named).

```html
<figure><img src="https://sagelodge.com/wp-content/uploads/2022/11/....jpg" alt="An angler fly fishing on the private pond at Sage Lodge, with the lodge behind him in the Paradise Valley." loading="lazy"><figcaption>Fly fishing on the pond at Sage Lodge, Paradise Valley. Image courtesy of <a href="https://sagelodge.com/gallery/" rel="noopener">Sage Lodge</a>.</figcaption></figure>
```

| Source | Caption credit |
|---|---|
| Hotel website or press page | `Image courtesy of [Property].` linked to the page |
| Via Forbes Travel Guide / MICHELIN | `Image courtesy of [Property] via Forbes Travel Guide.` |
| Named photographer | `Photo: [Photographer] / [Property].` |
| NPS / USGS | `Image courtesy of NPS / [Photographer].` |
| Unsplash | `Image courtesy of Unsplash.` |
| Public archive | `Image courtesy of the Library of Congress.` |
| Chas | `Image courtesy of Chas Arnold.` |
| AI illustration (non-bookable scenes only) | `Illustration.` |

For the hero image use `imageCredit` (same wording) and `imageSourceUrl` (the page it came from).

Alt text: describe what is in the picture, plainly, and work in the place name. Noon's habit: "The pool at Amangiri set against the Utah desert, a first Aman stay for many travelers."

## Image log

Append every image to `image-log.csv` at the repo root: `date,story,file_or_url,source_page,credit,type`. If an owner asks for removal, delete the image and its log row the same day.

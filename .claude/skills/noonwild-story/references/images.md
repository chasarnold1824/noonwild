# Images: sources and credits

Chas's decision: use real images from hotel websites, Forbes Travel Guide, Unsplash and public archives, each credited under the image in Noon's style. Keep a record of where every image came from so any owner's request can be handled fast.

## Where to look, by image type

| Image | First choice | Then |
|---|---|---|
| Hotel, lodge, camp, ship | The property's own website or press/media page | Its Forbes Travel Guide or MICHELIN Guide listing |
| Landscape, wildlife | Unsplash (unsplash.com/s/photos/...) | Wikimedia Commons, national park media galleries (e.g. nps.gov photo galleries are public domain) |
| Historical person or event | Library of Congress, Smithsonian Open Access, National Archives, Wikimedia Commons (public domain) | Museum collections that allow reuse |
| Chas's own photos | Already in `public/img/` (lion-dusk, lions-greeting, elephant, mammoth-snow, tent-interior, elk-snow, bighorn, tree-frog) | |

Pick images that show exactly what the sentence next to them describes. Prefer landscape, at least 1,600 px wide, natural light, no watermarks, no logos.

## Never

- AI-generated images of any hotel, room, lodge, ship or anything a client could book.
- Unsplash+ (premium) images, watermarked stock (Getty, Shutterstock, Alamy previews).
- Photos of identifiable private individuals as the subject.
- Images from Instagram or other social accounts.

## Getting the file

1. Find the direct image URL. For a hotel or FTG page, WebFetch the page and ask for the `og:image` or the largest gallery image URL. For Unsplash, use the photo page's download URL.
2. Try to download it: `curl -L -o public/img/<slug>-<n>.jpg "<url>"`, then resize to max 2000 px wide and under 500 KB (Python Pillow: `img.thumbnail((2000, 2000)); img.save(path, quality=82)`).
3. If the download is blocked from this environment, hotlink instead: use the direct `https://` image URL as `image:` or in the `<img src>`. Note "hotlinked" in the PR so it can be swapped for a local copy later.

## Credits (Noon's formats)

Captions go in a figure under the image:

```html
<figure><img src="/img/sage-lodge-1.jpg" alt="The lodge and the Yellowstone River at dusk in the Paradise Valley." loading="lazy"><figcaption>Sage Lodge on the Yellowstone River. Image courtesy of <a href="https://www.sagelodge.com/" rel="noopener">Sage Lodge</a>.</figcaption></figure>
```

| Source | Caption credit |
|---|---|
| Hotel website | `Image courtesy of [Property].` linked to the page |
| Via Forbes Travel Guide | `Image courtesy of [Property] via Forbes Travel Guide.` linked to the FTG page |
| Named photographer on hotel site | `Photo: [Photographer] / [Property].` |
| Unsplash | `Photo: [Photographer] / Unsplash.` linked to the photo page |
| Public archive | `Photo: Library of Congress.` (or the archive's requested line) |
| Chas | `Photo: Chas Arnold.` |
| AI illustration (non-bookable scenes only) | `Illustration.` |

For the hero image use `imageCredit` (same wording) and `imageSourceUrl` (the page it came from).

Alt text: describe what is in the picture, plainly, and work in the place name. Noon's habit: "The pool at Amangiri set against the Utah desert, a first Aman stay for many travelers."

## Image log

Append every image to `image-log.csv` at the repo root: `date,story,file_or_url,source_page,credit,type`. If an owner asks for removal, delete the image and its log row the same day.

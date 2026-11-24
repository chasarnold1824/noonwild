import { unsplash } from '../lib';

// One entry per destination page (/destinations/<slug>/). `regions` are the story
// `region` values that belong on the page.
export const destinations = [
  { slug: 'rwanda', name: 'Rwanda', regions: ['Rwanda'], img: unsplash('photo-1722291731448-3afe029611a6', 1600), pos: '50% 40%',
    blurb: "Mountain gorillas, volcano trails, and some of Africa's finest lodges on the edge of the forest." },
  { slug: 'pantanal', name: 'The Pantanal', regions: ['The Pantanal', 'Pantanal'], img: unsplash('photo-1595600896602-6b9052fe0c5b', 1600), pos: '52% 45%',
    blurb: 'The largest tropical wetland on earth, and the most reliable place in the world to see a wild jaguar.' },
  { slug: 'yellowstone', name: 'Yellowstone', regions: ['Yellowstone'], img: unsplash('photo-1778704828743-31586fcea70d', 1600), pos: '50% 60%',
    blurb: "Wolves in the Lamar Valley, Hemingway's ranch country, and the world's first national park." },
  { slug: 'patagonia', name: 'Patagonia', regions: ['Patagonia'], img: unsplash('photo-1715356758153-6d58ae44e8fe', 1600), pos: '50% 50%',
    blurb: 'Granite towers, blue glaciers, and the windswept far end of the Americas.' },
  { slug: 'galapagos', name: 'Galápagos', regions: ['Galápagos', 'Galapagos'], img: unsplash('photo-1706957614198-8d2e5f0ed6ea', 1600), pos: '50% 50%',
    blurb: 'Volcanic islands where the wildlife never learned to be afraid of people.' },
  { slug: 'namibia', name: 'Namibia', regions: ['Namibia'], img: unsplash('photo-1506710507565-203b9f24669b', 1600), pos: '45% 50%',
    blurb: 'Red dunes, desert-adapted wildlife, and some of the emptiest, most beautiful country in Africa.' },
  { slug: 'antarctica', name: 'Antarctica', regions: ['Antarctica'], img: unsplash('photo-1551415923-a2297c7fda79', 1600), pos: '40% 55%',
    blurb: 'Penguin colonies, blue ice, and the last continent, reached by expedition ship.' },
  { slug: 'canadian-rockies', name: 'The Canadian Rockies', regions: ['Canadian Rockies', 'The Canadian Rockies', 'Banff', 'Jasper'], img: '/img/bighorn.jpg', pos: '50% 40%',
    blurb: 'Glacier lakes, the Icefields Parkway, and the grand railway hotels of Banff and Jasper.' },
  { slug: 'botswana', name: 'Botswana', regions: ['Botswana'], img: '/img/lion-dusk.jpg', pos: '50% 50%',
    blurb: 'The Okavango Delta, the Kalahari salt pans, and some of the most exclusive safari camps in Africa.' },
  { slug: 'east-africa', name: 'East Africa', regions: ['East Africa', 'Kenya', 'Tanzania'], img: '/img/lions-greeting.jpg', pos: '62% 50%',
    blurb: 'Classic safari country, from the great migration to the finest tented camps.' },
  { slug: 'the-arctic', name: 'The Arctic', regions: ['Svalbard', 'The Arctic'], img: '/img/polar-bear.jpg', pos: '68% 50%',
    blurb: 'Svalbard by expedition ship: pack ice, polar bears, and the route of a balloon that vanished in 1897.' },
  { slug: 'central-america', name: 'Central America', regions: ['Central America', 'Guatemala', 'Honduras'], img: '/img/copan-stela.jpg', pos: '36% 50%',
    blurb: 'Maya cities in the jungle, cloud forests, and volcano lakes.' },
  { slug: 'uganda', name: 'Uganda', regions: ['Uganda'], img: '/img/elephant.jpg', pos: '58% 40%',
    blurb: 'The Nile at Murchison Falls, the forests of Bwindi, and the week Hemingway read his own obituary.' },
];
export type Destination = { slug: string; name: string; regions: string[]; img: string; pos: string; blurb: string };

// A story's region can name several places ("Kenya, Botswana and Tanzania"); split it into parts.
export const regionParts = (region: string) =>
  [region, ...region.split(/\s*(?:,|\band\b|&)\s*/)].map(r => r.trim()).filter(Boolean);
export const storyInDestination = (region: string, d: Destination) =>
  regionParts(region).some(r => d.regions.includes(r));
export const slugify = (s: string) =>
  s.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/^the\s+/, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

// Every destination with a page: the list above, plus one generated automatically for any
// published story whose region is not covered yet (so a new story never lands on a missing page).
export function withAutoDestinations(stories: { data: { region: string; image: string; imagePosition?: string } }[]): Destination[] {
  const out: Destination[] = destinations.map(d => ({ ...d }));
  for (const s of stories) {
    if (out.some(d => storyInDestination(s.data.region, d))) continue;
    const name = s.data.region;
    out.push({ slug: slugify(name), name, regions: [name], img: s.data.image, pos: s.data.imagePosition ?? '50% 50%',
      blurb: `Noon Wild's stories from ${name}, and how to travel there now.` });
  }
  return out;
}

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
  { slug: 'east-africa', name: 'East Africa', regions: ['East Africa', 'Kenya', 'Tanzania'], img: '/img/lions-greeting.jpg', pos: '62% 50%',
    blurb: 'Classic safari country, from the great migration to the finest tented camps.' },
  { slug: 'the-arctic', name: 'The Arctic', regions: ['Svalbard', 'The Arctic'], img: '/img/polar-bear.jpg', pos: '68% 50%',
    blurb: 'Svalbard by expedition ship: pack ice, polar bears, and the route of a balloon that vanished in 1897.' },
  { slug: 'central-america', name: 'Central America', regions: ['Central America', 'Guatemala', 'Honduras'], img: '/img/copan-stela.jpg', pos: '36% 50%',
    blurb: 'Maya cities in the jungle, cloud forests, and volcano lakes.' },
  { slug: 'uganda', name: 'Uganda', regions: ['Uganda'], img: '/img/elephant.jpg', pos: '58% 40%',
    blurb: 'The Nile at Murchison Falls, the forests of Bwindi, and the week Hemingway read his own obituary.' },
];
export type Destination = (typeof destinations)[number];
export const destinationFor = (region: string) => destinations.find(d => d.regions.includes(region));

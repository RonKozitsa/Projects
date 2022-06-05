import { StoreItemInterface } from '../../shared/components/store-item/store-item.interface';

const directoryPrefix = 'nature';

export const naturePaintings: StoreItemInterface[] = [
  {
    description:
      'The best vacation locations include exotic palm trees, waves and snorkeling, where my paintings will give a sense of the calm feeling of relaxing on the beach, reading a book while listening to the crashing of the waves in the background.',
    id: 1,
    imagesPath: [`${directoryPrefix}/beach-set/tree.jpeg`, `${directoryPrefix}/beach-set/wave.jpeg`, `${directoryPrefix}/beach-set/fish.jpeg`, `${directoryPrefix}/beach-set/preview.jpeg`],
    name: 'Vacation',
    year: 2018
  },
  {
    description: 'Willow trees are my favorite because they give a sense of comfort and calmness, while the branches slowly move in the wind with a soft sound.',
    id: 1,
    imagesPath: [`${directoryPrefix}/pond.jpeg`],
    name: 'Hidden paradise',
    year: 2015
  },
  {
    description: 'The unknown mysterious underwater world is scary and fascinating at the same time. However it is a place where all the colors of the world are combined in one dark underwater paradise.',
    id: 1,
    imagesPath: [`${directoryPrefix}/underwater.jpeg`],
    name: 'Diving world',
    year: 2020
  },
  {
    description: 'A tall mighty soldier, who stands at the boarder of the sea, providing hope and security and guidance for the sailors who pass him day and night.',
    id: 1,
    imagesPath: [`${directoryPrefix}/light-tower-set/light-tower.jpeg`, `${directoryPrefix}/light-tower-set/light-tower-preview.jpeg`],
    name: 'Lighthouse',
    year: 2018
  },
  {
    description: 'Switzerland, my home whose valleys are breathtaking. A perfect place to think and be thankful for all the beauty in this world.',
    id: 1,
    imagesPath: [`${directoryPrefix}/landscape.jpeg`],
    name: 'Valley of beauty',
    year: 2021
  },

  {
    description: 'The long and painful way up a steep mountain, blisters on the feet, pushing the limits, and showing endurance is all worth the view and a small picnic.',
    id: 1,
    imagesPath: [`${directoryPrefix}/mountain.jpeg`],
    name: 'Mountain',
    year: 2015
  },
  {
    description: 'Hot sand pushing trough the open shoes, sand as far as one can see, accompanied by a loyal camel.',
    id: 1,
    imagesPath: [`${directoryPrefix}/desert-set/left.jpeg`, `${directoryPrefix}/desert-set/middle.jpeg`, `${directoryPrefix}/desert-set/right.jpeg`],
    name: 'A walk in the desert',
    year: 2018
  },
  {
    description: '',
    id: 1,
    imagesPath: [`${directoryPrefix}/lake.jpeg`],
    name: '',
    year: 2021
  }
];

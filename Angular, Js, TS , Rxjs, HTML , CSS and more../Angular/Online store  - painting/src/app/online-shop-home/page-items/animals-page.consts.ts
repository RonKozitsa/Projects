import { StoreItemInterface } from '../../shared/components/store-item/store-item.interface';

const directoryPrefix = 'animals';

export const animalPaintings: StoreItemInterface[] = [
  {
    description: 'It’s special to paint a white bird and to discover how many different colors can be found in white.',
    name: 'White Peacock On Tree',
    imagesPath: [`${directoryPrefix}/peacock-on-tree.jpeg`],
    year: 2020
  },
  {
    description: 'The first thing I wanted to see when entering the zoo was the pink special looking bird standing on one leg',
    name: 'Flamingos',
    imagesPath: [`${directoryPrefix}/flamingos.jpeg`],
    year: 2020
  },
  {
    description: 'Just like a peacock, the papagei is fun to paint and filled with different colors.' + ' I was able to dive deep into details of each individual feather',
    name: 'Papagei',
    imagesPath: [`${directoryPrefix}/parrot.jpeg`],
    year: 2019
  },
  {
    description: 'Seems to be a very proud bird, not afraid to show off it’s beauty.',
    name: 'White Peacock',
    imagesPath: [`${directoryPrefix}/peacock-purple.jpeg`],
    year: 2021
  },
  {
    description: '',
    name: 'Highland Cow',
    imagesPath: [`${directoryPrefix}/cow.jpeg`, `${directoryPrefix}/cow-preview.jpeg`],
    year: 2018
  },
  {
    description: 'Is one of my favorite bird to paint since I can use and combine all possible colors in the royal feathers',
    name: 'Peacock',
    imagesPath: [`${directoryPrefix}/peacock.jpeg`],
    year: 2018
  }
];

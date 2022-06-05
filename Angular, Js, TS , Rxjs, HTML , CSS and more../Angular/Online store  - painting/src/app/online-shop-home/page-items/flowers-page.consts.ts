import { StoreItemInterface } from '../../shared/components/store-item/store-item.interface';

const directoryPrefix = 'flowers';

export const flowersPaintings: StoreItemInterface[] = [
  {
    description: 'These small little plants are not only fun to paint, they also have much to offer.' + '\nThey can help purify the air, improve your focus and enhance memory.',
    imagesPath: [`${directoryPrefix}/cactus-set/left.jpeg`, `${directoryPrefix}/cactus-set/middle.jpeg`, `${directoryPrefix}/cactus-set/right.jpeg`, `${directoryPrefix}/cactus-set/preview.jpeg`],
    name: 'Succulent',
    year: 2020
  },
  {
    description: 'Classic and romantic flowers with the most wonderful smell.\nNo wonder that they also can release stress and depression.',
    imagesPath: [`${directoryPrefix}/red-rose-set/red-rose.jpeg`],
    name: 'Rose',
    year: 2019
  },
  {
    description: 'These are some of my favorite flowers to paint and a known little flower to help shorten common cold symptoms.',
    imagesPath: [`${directoryPrefix}/echinacea.jpeg`],
    id: 1,
    name: 'Echinacea',
    year: 2021
  },
  {
    description: "When a leek flower came across me, I couldn't help but paint and reflect it’s beauty. Leek contain a variety of nutrients, may reduce inflammation and promote heart health. ",
    imagesPath: [`${directoryPrefix}/leek-flower-set/leek-flower.jpeg`],
    name: 'Leek Flower',
    year: 2021
  },
  {
    description: 'Come in all colors, but the strong saturated pink is my favorite of them.\nThey are some of the longest lasting cut flowers and discharge oxygen and absorb carbon dioxide and other airborne toxins at night ',
    imagesPath: [`${directoryPrefix}/gerbera.jpeg`],
    name: 'Gerbera',
    year: 2018
  },
  {
    description: 'Seem so delicate and elegant with the little tone of pink in their white leaves. I could spend hours standing under a magnolia tree.\n',
    framed: true,
    id: 1,
    imagesPath: [`${directoryPrefix}/magnolia.jpeg`],
    name: 'Magnolia',
    year: 2018
  },
  {
    description: 'helps to boosts the immune system\n',
    id: 2,
    framed: true,
    imagesPath: [`${directoryPrefix}/echinacea-2.jpeg`],
    name: 'Echinacea',
    year: 2018
  },
  {
    description: 'Have anti cancer properties, improve sleep and help relief symptoms of stress and anxiety.',
    imagesPath: [`${directoryPrefix}/magnolia-bad-quality/left.jpeg`, `${directoryPrefix}/magnolia-bad-quality/right.jpeg`],
    id: 2,
    name: 'Magnolia',
    year: 2018
  },
  {
    description: 'Palm trees are not only exotic and give that feeling of vacation, but they can increases eyesight, and help maintain a healthier skin, hair and nails. ',
    imagesPath: [`${directoryPrefix}/palm-tree.jpeg`],
    name: 'Antique french palm tree',
    year: 2019
  },
  {
    description: 'Purifies the air, promotes restful sleep, removes mold spores from the air.',
    imagesPath: [`${directoryPrefix}/lily.jpeg`],
    name: 'Lily',
    year: 2018
  },
  {
    description: 'This flower can fight common infections.',
    imagesPath: [`${directoryPrefix}/echinacea-open-head.jpeg`],
    id: 3,
    name: 'Echinacea',
    year: 2019
  },
  {
    description: 'Have anti cancer properties, improve sleep and help relief symptoms of stress and anxiety.',
    imagesPath: [`${directoryPrefix}/magnolia-blue-background.jpeg`],
    id: 3,
    name: 'Magnolia',
    year: 2019
  },
  {
    description: '',
    imagesPath: [`${directoryPrefix}/pink-flowers-with-scratches.jpeg`],
    name: '',
    year: 2019
  },
  {
    description: 'Is used for insomnia, bladder and liver diseases.',
    framed: true,
    imagesPath: [`${directoryPrefix}/poppy-set/yellow-flowers.jpeg`, `${directoryPrefix}/poppy-set/preview.jpeg`],
    name: 'Poppy',
    year: 2018
  },
  {
    description: 'Purifies the air, promotes restful sleep, removes mold spores from the air.',
    imagesPath: [
      `${directoryPrefix}/white-madonna-lilies-set/left.jpeg`,
      `${directoryPrefix}/white-madonna-lilies-set/middle.jpeg`,
      `${directoryPrefix}/white-madonna-lilies-set/right.jpeg`,
      `${directoryPrefix}/white-madonna-lilies-set/preview.jpeg`
    ],
    name: 'White Madonna Lilies',
    year: 2019
  }
];

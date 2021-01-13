import type { NextApiRequest, NextApiResponse } from 'next';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json([
    {
      id: '1',
      category_id: '11',
      sku: '12345678',
      slug: 'nike-green-xi-1',
      image_uri: '/assets/images/nike-green-large.jpg',
      category: "Men's Shoe",
      price: '95',
      quantity: '100',
      sizes: [13, 14, 15, 16, 17, 18],
      currency: 'USD',
      name: 'Nike Green XI',
      short_description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo, facilisis parturient nulla neque, sit sed tellus est. \n Ullamcorper ultrices augue cras sed porttitor volutpat, amet pretium augue. Quam amet dictum varius eu venenatis.',
      long_description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa sed adipiscing neque viverra neque. Integer velit sit ultricies adipiscing dapibus risus purus consequat nullam. Donec integer urna eget donec sapien, neque ac blandit urna.  \n Urna, enim non, ipsum in et morbi mattis viverra egestas. Nulla a habitant posuere purus pharetra amet in. Sagittis, in lorem vivamus a condimentum tincidunt eget condimentum. Nullam purus hendrerit feugiat ut mi est id adipiscing vel. \n Ultrices maecenas mollis scelerisque penatibus eu nibh ornare eget tincidunt. In tellus venenatis leo nisl. Hendrerit sed est nisl pellentesque amet. Lacinia eget egestas donec cursus imperdiet cras habitant. In sapien tristique libero velit, ornare proin dui. Tellus dictum viverra mattis lacus, neque egestas ut ipsum. Et nulla vestibulum.',
    },
    {
      id: '2',
      category_id: '11',
      sku: '87654321',
      slug: 'nike-red-ix-2',
      image_uri: '/assets/images/nike-red-large.jpg',
      category: "Men's Shoe",
      price: '132.55',
      quantity: '82',
      sizes: [15, 16, 17],
      currency: 'USD',
      name: 'Nike Red IX',
      short_description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo, facilisis parturient nulla neque, sit sed tellus est. \n Ullamcorper ultrices augue cras sed porttitor volutpat, amet pretium augue. Quam amet dictum varius eu venenatis.',
      long_description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa sed adipiscing neque viverra neque. Integer velit sit ultricies adipiscing dapibus risus purus consequat nullam. Donec integer urna eget donec sapien, neque ac blandit urna.  \n Urna, enim non, ipsum in et morbi mattis viverra egestas. Nulla a habitant posuere purus pharetra amet in. Sagittis, in lorem vivamus a condimentum tincidunt eget condimentum. Nullam purus hendrerit feugiat ut mi est id adipiscing vel. \n Ultrices maecenas mollis scelerisque penatibus eu nibh ornare eget tincidunt. In tellus venenatis leo nisl. Hendrerit sed est nisl pellentesque amet. Lacinia eget egestas donec cursus imperdiet cras habitant. In sapien tristique libero velit, ornare proin dui. Tellus dictum viverra mattis lacus, neque egestas ut ipsum. Et nulla vestibulum.',
    },
    {
      id: '3',
      category_id: '11',
      sku: '87651234',
      slug: 'nike-blue-iii-3',
      image_uri: '/assets/images/nike-blue-large.jpg',
      category: "Men's Shoe",
      price: '125.99',
      quantity: '43',
      sizes: [10, 11, 12, 13, 14, 15, 16, 17],
      currency: 'USD',
      name: 'Nike Blue III',
      short_description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo, facilisis parturient nulla neque, sit sed tellus est. \n Ullamcorper ultrices augue cras sed porttitor volutpat, amet pretium augue. Quam amet dictum varius eu venenatis.',
      long_description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa sed adipiscing neque viverra neque. Integer velit sit ultricies adipiscing dapibus risus purus consequat nullam. Donec integer urna eget donec sapien, neque ac blandit urna.  \n Urna, enim non, ipsum in et morbi mattis viverra egestas. Nulla a habitant posuere purus pharetra amet in. Sagittis, in lorem vivamus a condimentum tincidunt eget condimentum. Nullam purus hendrerit feugiat ut mi est id adipiscing vel. \n Ultrices maecenas mollis scelerisque penatibus eu nibh ornare eget tincidunt. In tellus venenatis leo nisl. Hendrerit sed est nisl pellentesque amet. Lacinia eget egestas donec cursus imperdiet cras habitant. In sapien tristique libero velit, ornare proin dui. Tellus dictum viverra mattis lacus, neque egestas ut ipsum. Et nulla vestibulum.',
    },
  ]);
};

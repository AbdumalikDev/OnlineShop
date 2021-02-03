const products = [
  {
    _id: 1,
    name: 'Airpods Wireless Bluetooth Headphones',
    image: '/images/airpods.jpg',
    description:
      'Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working',
    brand: 'Apple',
    badge: 'Yangi',
    category: 'Eloctronics',
    price: '4,260,000',
    reducedPrice: '2,300,000',
    countInStock: 3,
    rating: 4,
    numReviews: 3,
    features: [
      {
        _id: 1,
        feature: 'Xotirasi',
        value: '64GB'
      },
      {
        _id: 2,
        feature: 'Xotirasi',
        value: '64GB'
      },
      {
        _id: 3,
        feature: 'Xotirasi',
        value: '64GB'
      },
      {
        _id: 4,
        feature: 'Xotirasi',
        value: '64GB'
      }
    ],
    comments: [
      {
        _id: 1,
        fullName: 'Ahmadjon Isaqov',
        comment:
          'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum, officia.',
        rating: 4,
        data: '20/02/2021',
        likes: 5,
        dislikes: 3
      },
      {
        _id: 2,
        fullName: 'Ahmadjon Isaqov',
        comment:
          'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum, officia.',
        rating: 4,
        data: '20/02/2021',
        likes: 5,
        dislikes: 3
      },
      {
        _id: 3,
        fullName: 'Ahmadjon Isaqov',
        comment:
          'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum, officia.',
        rating: 4,
        data: '20/02/2021',
        likes: 5,
        dislikes: 3
      }
    ]
  },
  {
    _id: 2,
    name: 'LG A50 256GB Memory',
    image: '/images/phone.png',
    description:
      'Introducing the LG A50. A transformative triple-camera system that adds tons of capability without complexity. An unprecedented leap in battery life',
    brand: 'LG',
    badge: 'Yangi',
    category: 'Eloctronics',
    price: '4,260,000',
    reducedPrice: '2,300,000',
    countInStock: 0,
    rating: 4,
    numReviews: 4
  },
  {
    _id: 3,
    name: 'Cannon EOS 80D DSLR Camera',
    image: '/images/camera.png',
    description:
      'Characterized by versatile imaging specs, the Cannon EOS 80D further clarifies itself using a pair of robust focusing systems and an intuitive design',
    brand: 'Cannon',
    badge: 'Yangi',
    category: 'Eloctronics',
    price: '4,260,000',
    reducedPrice: '2,300,000',
    countInStock: 5,
    rating: 3,
    numReviews: 3
  },
  {
    _id: 4,
    name: 'Sony Playstation 4 Pro White Version',
    image: '/images/playstation.png',
    description:
      'The ultimate home entertainment center startes with Playstation. Whether you are into gaming, HD movies, television, music',
    brand: 'Sony',
    badge: 'Hot',
    category: 'Eloctronics',
    price: '4,260,000',
    reducedPrice: '2,300,000',
    countInStock: 10,
    rating: 5,
    numReviews: 3
  },
  {
    _id: 5,
    name: 'Logitech G-Series Gaming Mouse',
    image: '/images/mouse.jpg',
    description:
      'Get a better handle on your games with this Logitech LIGHTSYNC gaming mouse. The six programmable buttons allow customization for a smooth playing experience',
    brand: 'Logitech',
    badge: 'Xit',
    category: 'Eloctronics',
    price: '4,260,000',
    reducedPrice: '2,300,000',
    countInStock: 7,
    rating: 3.5,
    numReviews: 2
  },
  {
    _id: 6,
    name: 'Amazon Echo Dot 3rd Generation',
    image: '/images/alexa.jpg',
    description:
      'Meet Echo Dot - Our most popular smart speaker with a fabric design. It is our most compact smart speaker that fits perfectly into small space',
    brand: 'Amazon',
    badge: 'Yangi',
    category: 'Eloctronics',
    price: '4,260,000',
    reducedPrice: '2,300,000',
    countInStock: 5,
    rating: 4,
    numReviews: 4
  }
];

module.exports = products;

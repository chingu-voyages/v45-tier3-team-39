type OrderItem = {
  name: string;
  category: string;
  quantity: number;
  price: number;
  subtotal: number;
};

export type Order = {
  _id: string;
  table: number;
  items: OrderItem[];
  totalPrice: number;
  orderStatus: string;
  createdAt: string;
};

export const orders: Order[] = [
  {
    _id: 'df6',
    table: 3,
    items: [
      {
        name: 'Pepperoni',
        category: 'pizzas',
        quantity: 2,
        price: 14,
        subtotal: 28,
      },
      {
        name: 'Margherita',
        category: 'pizzas',
        quantity: 3,
        price: 12,
        subtotal: 36,
      },
    ],
    totalPrice: 64,
    orderStatus: 'ordered',
    createdAt: new Date().toString(),
  },
  {
    _id: 'dwetf6',
    table: 8,
    items: [
      {
        name: 'Londonetti',
        category: 'pizzas',
        quantity: 3,
        price: 8,
        subtotal: 24,
      },
      {
        name: 'PiriPiri',
        category: 'pizzas',
        quantity: 2,
        price: 15,
        subtotal: 30,
      },
    ],
    totalPrice: 54,
    orderStatus: 'ordered',
    createdAt: new Date().toString(),
  },
  {
    _id: 'dwrZZZf6',
    table: 15,
    items: [
      {
        name: 'Bulldozzer',
        category: 'heavy drinks',
        quantity: 3,
        price: 15,
        subtotal: 45,
      },
      {
        name: 'SledgeHammer',
        category: 'heavy drinks',
        quantity: 2,
        price: 15,
        subtotal: 30,
      },
      {
        name: 'Oatty',
        category: 'alternative miks',
        quantity: 2,
        price: 3,
        subtotal: 6,
      },
      {
        name: 'Spaghetti Bolognese',
        category: 'Pasta',
        quantity: 4,
        price: 12,
        subtotal: 48,
      },
      {
        name: 'Margherita Pizza',
        category: 'Pizza',
        quantity: 2,
        price: 10,
        subtotal: 20,
      },
      {
        name: 'Caesar Salad',
        category: 'Salads',
        quantity: 3,
        price: 8,
        subtotal: 24,
      },
      {
        name: 'Chicken Alfredo',
        category: 'Pasta',
        quantity: 1,
        price: 15,
        subtotal: 15,
      },
      {
        name: 'Lemonade',
        category: 'Beverages',
        quantity: 2,
        price: 4,
        subtotal: 8,
      },
      {
        name: 'Chocolate Cake',
        category: 'Desserts',
        quantity: 2,
        price: 6,
        subtotal: 12,
      },
      {
        name: 'Iced Tea',
        category: 'Beverages',
        quantity: 5,
        price: 3,
        subtotal: 15,
      },
      {
        name: 'Greek Salad',
        category: 'Salads',
        quantity: 3,
        price: 9,
        subtotal: 27,
      },
      {
        name: 'Beef Burger',
        category: 'Burgers',
        quantity: 2,
        price: 7,
        subtotal: 14,
      },
      {
        name: 'Cappuccino',
        category: 'Beverages',
        quantity: 1,
        price: 5,
        subtotal: 5,
      },
    ],
    totalPrice: 81,
    orderStatus: 'ordered',
    createdAt: new Date().toString(),
  },
  {
    _id: 'dwrZZerf6',
    table: 15,
    items: [
      {
        name: 'Bulldozzer',
        category: 'heavy drinks',
        quantity: 3,
        price: 15,
        subtotal: 45,
      },
      {
        name: 'SledgeHammer',
        category: 'heavy drinks',
        quantity: 2,
        price: 15,
        subtotal: 30,
      },
      {
        name: 'Oatty',
        category: 'alternative miks',
        quantity: 2,
        price: 3,
        subtotal: 6,
      },
    ],
    totalPrice: 81,
    orderStatus: 'ordered',
    createdAt: new Date().toString(),
  },
  {
    _id: 'dwrhjk6',
    table: 15,
    items: [
      {
        name: 'Bulldozzer',
        category: 'heavy drinks',
        quantity: 3,
        price: 15,
        subtotal: 45,
      },
      {
        name: 'SledgeHammer',
        category: 'heavy drinks',
        quantity: 2,
        price: 15,
        subtotal: 30,
      },
      {
        name: 'Oatty',
        category: 'alternative miks',
        quantity: 2,
        price: 3,
        subtotal: 6,
      },
    ],
    totalPrice: 81,
    orderStatus: 'ordered',
    createdAt: new Date().toString(),
  },
  {
    _id: 'dw45Zf6',
    table: 15,
    items: [
      {
        name: 'Bulldozzer',
        category: 'heavy drinks',
        quantity: 3,
        price: 15,
        subtotal: 45,
      },
      {
        name: 'SledgeHammer',
        category: 'heavy drinks',
        quantity: 2,
        price: 15,
        subtotal: 30,
      },
      {
        name: 'Oatty',
        category: 'alternative miks',
        quantity: 2,
        price: 3,
        subtotal: 6,
      },
    ],
    totalPrice: 81,
    orderStatus: 'ordered',
    createdAt: new Date().toString(),
  },
  {
    _id: 'dwrZZu6',
    table: 15,
    items: [
      {
        name: 'Bulldozzer',
        category: 'heavy drinks',
        quantity: 3,
        price: 15,
        subtotal: 45,
      },
      {
        name: 'SledgeHammer',
        category: 'heavy drinks',
        quantity: 2,
        price: 15,
        subtotal: 30,
      },
      {
        name: 'Oatty',
        category: 'alternative miks',
        quantity: 2,
        price: 3,
        subtotal: 6,
      },
    ],
    totalPrice: 81,
    orderStatus: 'ordered',
    createdAt: new Date().toString(),
  },
];

export type MenuItem = {
  item_id: string;
  name: string;
  category: string;
  description: string;
  price: number;
  img_url: string;
};

export const items: MenuItem[] = [
  {
    item_id: '3',
    name: 'Margherita',
    category: 'pizzas',
    description:
      'Nothing can ruin a pizza faster than black olives. These overly salty and unpleasant black circles are like mutant eyes staring back at you from your pie. ',
    price: 12,
    img_url:
      'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80',
  },
  {
    item_id: '2',
    name: 'Pepperoni',
    category: 'pizzas',
    description:
      "Anchovies may be an absolutely classic pizza topping, but they are kind of weird, aren't they? These salty fish fillets probably owe more to pizza's heritage than any other topping, considering they are a key ingredient in many dishes.",
    price: 13,
    img_url:
      'https://images.pexels.com/photos/8471739/pexels-photo-8471739.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    item_id: '1',
    name: 'Formaggi',
    category: 'pizzas',
    description:
      "Sun-dried tomatoes are a little higher on the list than regular tomatoes because, to be fair, they do make a pizza pretty fancy. That's why a lot of pizza places will actually charge extra for them. On top of allowing you to look cultured and worldly, sun-dried tomatoes also provide a depth of flavor that you just don't get with regular tomatoes. ",
    price: 12,
    img_url:
      'https://images.pexels.com/photos/1146760/pexels-photo-1146760.jpeg',
  },
  {
    item_id: '6',
    name: 'Nduja',
    category: 'pizzas',
    description:
      'Ham is like the underdog of pizza meats. It may not be the most popular, and it may not have the most interesting flavor profile, but it does the job in terms of enhancing the protein factor of a pizza while also adding a better, meatier texture.',
    price: 15,
    img_url:
      'https://images.pexels.com/photos/10790638/pexels-photo-10790638.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
];

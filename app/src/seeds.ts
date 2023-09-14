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
        category: 'alternative milks',
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
        category: 'alternative milks',
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
        category: 'alternative milks',
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
        category: 'alternative milks',
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
        category: 'alternative milks',
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
  _id: string;
  name: string;
  category: { name: string; id: string };
  description: string;
  price: number;
  image_url: string;
};

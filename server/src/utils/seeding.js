const mongoose = require('mongoose');
require('dotenv').config({
  path: `${__dirname}/../config/.env`,
});

const CatModel = mongoose.model('categories', {
  name: {
    type: String,
    required: [true, 'Please provide category name'],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const OrdersModel = mongoose.model('orders', {
  table: {
    type: Number,
    required: true,
  },
  items: [
    {
      name: {
        type: String,
        required: true,
      },
      category: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Category',
      },
      quantity: {
        type: Number,
        required: true,
        default: 1,
      },
      price: {
        type: Number,
        required: true,
      },
      subtotal: {
        type: Number,
        required: true,
      },
    },
  ],
  totalPrice: {
    type: Number,
    required: true,
  },
  orderStatus: {
    type: String,
    required: true,
    default: 'Not started',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// const MenuItemModel = mongoose.model('menuitems', {
//     name: {
//         type: String,
//         required: true,
//     },
//     category: {
//         type: mongoose.Schema.Types.ObjectId,
//         required: true,
//         ref: 'Category',
//     },
//     description: {
//         type: String,
//         required: [true, 'Please provide item description'],
//     },
//     price: {
//         type: Number,
//         required: [true, 'Please provide price'],
//     },
//     image_url: {
//         type: String,
//         required: [true, 'Please upload image'],
//     },
//     createdAt: {
//         type: Date,
//         default: Date.now,
//     },
// });

const { orderSeed } = require('./seed');

if (!process.env.DB_STRING) {
  throw new Error('ATLAS_URI not set');
}

mongoose.set('strictQuery', false); //required to avoid warning
const mongoPath = process.env.DB_STRING;

//export a connection to MongoDB via the ATLAS_URI stored in mongoPath

mongoose
  .connect(mongoPath, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
    // await mongoose.connection.dropDatabase();
    await mongoose.connection.syncIndexes(); //this ensures unique:true works
    const cats = await CatModel.find();
    const catObjRef = cats.reduce((acc, curr) => {
      return { ...acc, [curr.name]: curr._id };
    }, {});
    // const itemsWithAddedCatRef = menuItemSeed.map(item => ({ ...item, category: catObjRef[item.category] }));
    const ordersWithAddedCatRef = orderSeed.map((order) => {
      const orderWithCatRef = order.items.map((item) => ({
        ...item,
        category: catObjRef[item.category],
      }));
      return { ...order, items: orderWithCatRef };
    });
    await OrdersModel.insertMany(ordersWithAddedCatRef);
    mongoose.disconnect();
  });

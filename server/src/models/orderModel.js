const mongoose = require('mongoose');

const orderSchema = mongoose.Schema(
    {

    name: {type: String, required: [true, "Must provide category name"], },
    table: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Table",
        required: true,
    },

    menuItems: [
        {
          name: { type: String, required: true },
          quantity: { type: Number, required: true,default: 1 },
          image: { type: String, required: true },
          subtotal: { type: Number, required: true },
          menuItems: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'MenuItem',
          },
        },
      ],
    createdAt:{
        type: Date,
        default: Date.now,
    },
    }
  );
  
  const Order = mongoose.model("Order",orderSchema);

  
  
   module.exports = Order
   
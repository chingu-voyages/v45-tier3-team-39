const mongoose = require('mongoose');

const menuItemSchema = mongoose.Schema(
    {

    name: {type: String, required: true},
   category:  {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Category",
  },
    description: { type: String, required: [true, "Must provide your description"], },
    price: { type: String, required: [true, "Must provide price!"], },
    image_url: { type: String, required: [true, "Must upload image!"], },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    }
  );
  
  const MenuItem = mongoose.model("MenuItem",menuItemSchema);

  
  
   module.exports = MenuItem
   
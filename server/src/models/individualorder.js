const mongoose = require('mongoose');

const individualorderSchema = mongoose.Schema(
    {

    order: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Order",
            required: true,
        },
    table: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Table",
        required: true,
    },
     menuItems: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'MenuItem',
          },
          quantity: { type: Number, required: true, default: 1 },
          subtotal: {type: Number, required: true},
    
    createdAt:{
        type: Date,
        default: Date.now()
    }
    }
  );
  
  const Individualorder = mongoose.model("Individualorder",individualorderSchema);

  
  
   module.exports = Individualorder
   
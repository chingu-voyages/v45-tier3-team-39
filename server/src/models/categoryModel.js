const mongoose = require('mongoose');

const categorySchema = mongoose.Schema(
    {

    name: {type: String, required: [true, "Must provide category name"], },
    menu:  {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "MenuItem",
        required: true
      }, 
    createdAt: {
        type: Date,
        default: Date.now,
    },
    }
  );
  
  const Category = mongoose.model("Category",categorySchema);

  
  
   module.exports = Category
   
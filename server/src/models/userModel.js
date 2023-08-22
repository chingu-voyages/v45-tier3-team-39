const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
    {

    username: {type: String, required: [true, "Must provide username"], },
    email: {type: String, required: [true, "Must provide email"], },
    password: {type: String, required: [true, "Must provide password"], },
    isAdmin: {
        type: Boolean,
        required: true,
        default: false,
      },
   
    createdAt:{
        type: Date,
        default: Date.now,
    },
    }
  );
  
  const User = mongoose.model("User",userSchema);

  
  
   module.exports = User
   
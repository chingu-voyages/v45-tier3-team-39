const mongoose = require('mongoose');

const tableSchema = mongoose.Schema(
    {

    table_number: {type: String, required: [true, "Must provide your table number"]},

    createdAt: {
        type: Date,
        default: Date.now,
    },
    
    }
  );
  
  const Table = mongoose.model("Table",  tableSchema);

  
   module.exports = Table


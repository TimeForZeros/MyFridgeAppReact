const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema(
  {
    foodName: { type: String },
    foodType: { type: String },
    expirationDate: { type: String },
    location: { type: String },
    inputDate: { type: String },
    googleId: String,
    userId: String,
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model('Item', itemSchema);

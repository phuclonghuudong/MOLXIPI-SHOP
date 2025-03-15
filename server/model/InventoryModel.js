const mongoose = require("mongoose");

const scheme = new mongoose.Schema(
  {
    productId: [{ type: mongoose.Schema.ObjectId, ref: "product" }],
    quantity: {
      type: Number,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    updatedAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

const InventoryModel = mongoose.model("inventory", scheme);

module.exports = InventoryModel;

const mongoose = require("mongoose");

const scheme = new mongoose.Schema(
  {
    categoryId: [{ type: mongoose.Schema.ObjectId, ref: "category" }],
    brandId: [{ type: mongoose.Schema.ObjectId, ref: "brand" }],
    name: {
      type: String,
      required: true,
    },
    slug: String,
    description: String,
    image: { type: Array, default: [] },
    status: {
      type: String,
      enum: ["Active", "Inactive", "out_of_stock"],
      default: "Active",
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

const ProductModel = mongoose.model("product", scheme);

module.exports = ProductModel;

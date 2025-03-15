const mongoose = require("mongoose");

const scheme = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Provide name"],
    },
    logo: {
      type: String,
    },
    slug: {
      required: true,
      type: String,
      unique: true,
    },
    description: {
      type: Number,
    },
    parentId: String,
    status: {
      type: String,
      enum: ["Active", "Inactive", "Suspended"],
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

const CategoryModel = mongoose.model("category", scheme);

module.exports = CategoryModel;

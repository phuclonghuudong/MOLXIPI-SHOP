const mongoose = require("mongoose");

const scheme = new mongoose.Schema(
  {
    productId: [{ type: mongoose.Schema.ObjectId, ref: "product" }],
    userId: [{ type: mongoose.Schema.ObjectId, ref: "user" }],
    comment: {
      type: String,
      required: true,
    },
    star: {
      required: true,
      type: Number,
    },
    parentId: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["Active", "Inactive"],
      default: "Active",
    },
    like: {
      type: String,
      default: [],
    },
    dislike: {
      type: String,
      default: [],
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

const ReviewModel = mongoose.model("review", scheme);

module.exports = ReviewModel;

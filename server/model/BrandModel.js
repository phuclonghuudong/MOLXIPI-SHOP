const mongoose = require("mongoose");

const scheme = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Provide name"],
      required: true,
    },
    logo: {
      required: true,
      type: String,
    },
    description: {
      type: Number,
    },
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

const BrandModel = mongoose.model("brand", scheme);

module.exports = BrandModel;

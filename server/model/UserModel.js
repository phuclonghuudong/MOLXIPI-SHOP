const mongoose = require("mongoose");

const scheme = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Provide name"],
    },
    email: {
      required: true,
      type: String,
      unique: true,
    },
    phone: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      default: "",
    },
    birthday: {
      type: String,
      default: "",
    },
    address: {
      type: String,
      default: "",
    },
    password: {
      required: true,
      type: String,
    },
    status: {
      type: String,
      enum: ["Active", "Inactive", "Suspended"],
      default: "Active",
    },
    verify_email: {
      type: Boolean,
      default: false,
    },
    forgot_password_otp: {
      type: String,
      default: null,
    },
    forgot_password_expiry: {
      type: Date,
      default: "",
    },
    role: {
      type: String,
      enum: ["ADMIN", "USER"],
      default: "USER",
    },
    avatar: {
      type: String,
      default: "",
    },
    refresh_token: {
      type: String,
      default: "",
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    photoURL: String,
    updatedAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

const UserModel = mongoose.model("user", scheme);

module.exports = UserModel;

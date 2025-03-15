const mongoose = require("mongoose");

const DB_NAME = process.env.DB_NAME;
const DB_URI = process.env.MONGOOSE_URI;

const connectDB = async () => {
  try {
    await mongoose.connect(DB_URI);
    console.log(`✅ Đã kết nối MongoDB: ${DB_NAME}`);
  } catch (error) {
    console.error("❌ Kết nối MongoDB thất bại:", error);
    process.exit(1);
  }
};

module.exports = connectDB;

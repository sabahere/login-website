const mongoose = require("mongoose");

const connectDB = async () => {
  const MONGO_URI = `mongodb+srv://${encodeURIComponent(
    process.env.MONGO_USER
  )}:${encodeURIComponent(process.env.MONGO_PASS)}@${process.env.MONGO_HOST}/${
    process.env.MONGO_DB
  }?retryWrites=true&w=majority`;
  const conn = await mongoose.connect(MONGO_URI);
  console.log(`MongoDB Connected: ${conn.connection.host}`);
};

mongoose.set("strictQuery", true);

module.exports = connectDB;

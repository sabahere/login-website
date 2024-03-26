const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: { type: String },
  email: { type: String },
  password: { type: String },
  first_name: { type: String },
  last_name: { type: String },
  dob: { type: String },
  gender: { type: String },
  profile_picture: { type: String },
  created_at: { type: Date, default: Date.now },
  last_login_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model("User", UserSchema);

const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  userid: { type: String, unique: true, required: true },
  username: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  type: { type: String, default: "user" }, // e.g., "admin" or "user"
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("User", userSchema);

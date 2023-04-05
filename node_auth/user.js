const Mongoose = require('mongoose');

const userSchema = new Mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },

  password: {
    type: String,
    required: true,
    minLength: 6,
  },

  role: {
    type: String,
    default: "Basic",
    required: true
  }
})

const User = Mongoose.model("user", userSchema);
module.exports = User;
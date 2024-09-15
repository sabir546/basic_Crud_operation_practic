const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/Crudoperation");

// .then("db connected successfully")
// .catch(console.error(err))

const userSchema = new mongoose.Schema({
  username: "String",
  name: "String",
  email: "String",
});
module.exports = mongoose.model("User", userSchema);

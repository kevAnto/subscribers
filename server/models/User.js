const { Schema, model } = require("mongoose");
const UserSchema = new Schema({
  dateCreated: { type: Date, required: true, default: Date.now },
  name: { type: String, required: true },
  /* lastname:{type:String, required:true},
    username:{type:String, required:true}, */
  email: { type: String, required: true },
  hasBusiness: { type: Boolean },
  languages: { type: [String], default: ["en"] },
  password: { type: String, required: true },
});
const User = model("User", UserSchema);
module.exports = User;

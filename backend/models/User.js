const mongoose = require("mongoose");

const uniqueValidator = require("mongoose-unique-validator");

const userSchema = mongoose.Schema({
   pseudo: {
      type: String,
      required: true,
      unique: true,
      minLength: 3,
      maxLength: 55,
      trim: true,
   },
   email: { type: String, required: true, unique: true },
   password: { type: String, required: true },
   solde: { type: Number, default: 250 },
});

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model("User", userSchema);

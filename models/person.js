const mongoose = require("mongoose");
var uniqueValidator = require("mongoose-unique-validator");

mongoose.set("useFindAndModify", false);
mongoose.set("useCreateIndex", true);

const PersonSchema = new mongoose.Schema({
  name: { type: String, required: true, minlength: 3, unique: true },
  number: { type: String, minlength: 8, required: true }
});

// Apply the uniqueValidator plugin to userSchema.
PersonSchema.plugin(uniqueValidator);

const Person = mongoose.model("Person", PersonSchema);

module.exports = Person;

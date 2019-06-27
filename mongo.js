const mongoose = require("mongoose");
require('dotenv').config()
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true });

if (process.argv.length < 3) {
  console.log("give password as argument");
  process.exit(1);
}

if (process.argv.length === 3) {
  Person.find().then(res => {
    console.log("phonebook: ");
    res.map(person => console.log(`${person.name} ${person.number}`));
    mongoose.connection.close();
  });
} else {
  const name = process.argv[3];
  const number = process.argv[4];
  const person = new Person({
    name,
    number
  });

  person.save().then(res => {
    console.log(`added ${name} number ${number} to phonebook`);
    mongoose.connection.close();
  });
}

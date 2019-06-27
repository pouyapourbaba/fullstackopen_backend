const express = require("express");
const app = express();

const persons = [
  {
    name: "Arto Hellas",
    number: "040-123456",
    id: 1
  },
  {
    name: "Ada Lovelace",
    number: "39-44-5323523",
    id: 2
  },
  {
    name: "Dan Abramov",
    number: "12-43-234345",
    id: 3
  },
  {
    name: "Mary Poppendieck",
    number: "39-23-6423122",
    id: 4
  }
];

// GET info
app.get("/info", (req, res) => {
  res.send(`Phonebook has info for ${persons.length} people \n${new Date()}`);
});

// GET all the persons
app.get("/api/persons", (req, res) => {
  res.json(persons);
});

const PORT = 3001;
app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));

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

// GET a person by ID
app.get("/api/persons/:id", (req, res) => {
  const person = persons.find(person => person.id === Number(req.params.id));

  if (person) {
    res.json(person);
  } else {
    res.status(400).end();
  }
});

// DELETE a person by ID
app.delete("/api/persons/:id", (req, res) => {
  persons.filter(person => person.id !== Number(req.params.id));
  res.status(204).end();
});

const PORT = 3001;
app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));

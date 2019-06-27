const express = require("express");
const app = express();

app.use(express.json());

let persons = [
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

// POST a new person
app.post("/api/persons", (req, res) => {
  const id = Math.random() * 1000000;

  // req must have name and number
  if (!req.body.name || !req.body.number)
    return res.status(404).json({ error: "name and number are required" });

  // name must not already exist
  const doseExists = persons.find(person => person.name === req.body.name);
  if (doseExists) return res.status(400).json({ error: "name must be unique" });

  // create a new person 
  const person = {
    name: req.body.name,
    number: req.body.number,
    id
  };
  persons = persons.concat(person);
  res.json(person);
});

const PORT = 3001;
app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));

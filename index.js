require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
const errorHandler = require("./middleware/errorHandler");

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true });

const Person = require("./models/person");
app.use(cors());
app.use(express.static("build"));
app.use(express.json());
morgan.token("body", function(req, res) {
  return JSON.stringify(req.body);
});
app.use(morgan(":method :url :status :response-time ms :body"));

// GET info
app.get("/api/info", (req, res) => {
  Person.find().then(persons =>
    res.send(`Phonebook has info for ${persons.length} people \n${new Date()}`)
  );
});

// GET all the persons
app.get("/api/persons", (req, res) => {
  Person.find({})
    .then(persons => res.json(persons))
    .catch(error => {
      console.log(error.message);
      res.status(404).end();
    });
});

// GET a person by ID
app.get("/api/persons/:id", async (req, res, next) => {
  Person.findById(req.params.id)
    .then(person => {
      if (person) res.json(person);
      else res.status(404).end();
    })
    .catch(error => next(error));
});

// DELETE a person by ID
app.delete("/api/persons/:id", (req, res, next) => {
  Person.findByIdAndRemove(req.params.id)
    .then(person => {
      if (person) res.status(204).end();
      else res.status(404).end();
    })
    .catch(error => next(error));
});

// POST a new person
app.post("/api/persons", (req, res, next) => {
  // req must have name and number
  if (!req.body.name || !req.body.number)
    return res.status(404).json({ error: "name and number are required" });

  // name must not already exist
  Person.find({ name: req.body.name })
    .then(result => {
      if (result.length > 0)
        return res.status(400).json({ error: "name must be unique" });
      else {
        if (req.body.name.length < 3)
          return res
            .status(400)
            .json({ error: "name must be atleast 3 characters long" });
        if (req.body.number.length < 8)
          return res
            .status(400)
            .json({ error: "number must be atleast 8 characters long" });
        // create a new person
        const person = new Person({
          name: req.body.name,
          number: req.body.number
        });
        person.save().then(result => res.json(result));
      }
    })
    .catch(error => next(error));
});

// PUT change a users number if the name exists
app.put("/api/persons/:id", (req, res, next) => {
  const person = {
    name: req.body.name,
    number: req.body.number
  };

  Person.findByIdAndUpdate(req.params.id, person, { new: true })
    .then(newPerson => {
      if (newPerson) res.json(newPerson);
      else res.status(404).end();
    })
    .catch(error => next(error));
});

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: "unknown endpoint" });
};

// handler of requests with unknown endpoint
app.use(unknownEndpoint);

app.use(errorHandler);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

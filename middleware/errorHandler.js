const errorHandler = (error, req, res, next) => {
  console.log(error.message);

  if ((error.name = "CastError" && error.kind == "ObjectId")) {
    return res.status(400).send({ error: "malformatted id" });
  } else if (error.name === "ValidationError" && error.kind === "unique") {
    console.log("hiiiiiiiiiiiiiii");
    return response.status(400).json({ error: error._message });
  } else if (error.name === "ValidationError") {
    return response.status(400).json({ error: error.message });
  }
  next(error);
};

module.exports = errorHandler;

const morgan = require("morgan");
const validateZip = require("./middleware/validateZip");
const express = require("express");
const getZoos = require("./utils/getZoos");
const app = express();

module.exports = app;

//App level middleware
app.use(morgan("dev"));

//Routes
app.get("/zoos/all", (req, res, next) => {
  const { admin } = req.query;
  const isTrue = (admin === "true")
  const content = isTrue
    ? `All zoos: ${getZoos().join("; ")}`
    : "You do not have access to that route.";
  res.send(content);
});

app.get("/zoos/:zip", validateZip, (req, res, next) => {
  const { zip } = req.params;
  if (getZoos(zip).length) {
    res.send(`${zip} zoos: ${getZoos(zip).join("; ")}`);
  } else {
    res.send(`${zip} has no zoos.`);
  }
});

app.get("/check/:zip", validateZip, (req, res, next) => {
  const { zip } = req.params;
  if (getZoos(zip)) {
    res.send(`${zip} exists in our records.`);
  } else {
    res.send(`${zip} does not exist in our records.`);
  }
});

//Error handling
app.use((req, res, next) => {
  res.send(`That route could not be found!`);
});
app.use((err, req, res, next) => {
  console.error(err);
  res.send(err);
});

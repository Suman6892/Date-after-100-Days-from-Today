const express = require("express");
const addDays = require("date-fns/addDays");

const app = express();

app.get("/", (request, response) => {
  const Datetime = new Date();
  const result = addDays(
    new Date(Datetime.getFullYear(), Datetime.getMonth(), Datetime.getDate()),
    100
  );
  response.send(
    `${result.getDate()}/${result.getMonth() + 1}/${result.getFullYear()}`
  );
});

module.exports = app;

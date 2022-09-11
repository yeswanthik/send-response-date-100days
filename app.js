const addDays = require("date-fns/addDays");
const express = require("express");
const app = express();
app.get("/", (request, response) => {
  const today = new Date();
  const newDate = addDays(new Date(today), 100);
  const dateFormat = `${newDate.getDate()}/${
    newDate.getMonth() + 1
  }/${newDate.getFullYear()}`;
  response.send(dateFormat);
});
module.exports = app;

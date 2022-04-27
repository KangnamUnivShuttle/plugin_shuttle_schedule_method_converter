const express = require("express");
const bodyParser = require("body-parser");
const moment = require("moment");

require("dotenv").config();
const app = express();

// application/json
app.use(express.json());

// application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

const axios = require("axios");
const { errorResponse, successResponse } = require("./lib");

const {} = require("./global");

const {} = require("./db");

app.post("/chat", (req, res) => {
  const now = new moment();
  res.send({
    dev: false,
    method: "neartime",
    time: now.format("HH:mm:ss"),
    route: req.body.userRequest.utterance,
  });
});

module.exports = app;

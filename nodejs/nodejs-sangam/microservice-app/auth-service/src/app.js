const express = require("express");
const app = express();
const configureCors = require("./config/corsConfig");
const helmet = require("helmet"); // this this multiple headers for security as a middleware

app.use(helmet()); // to secure the Express.js server
//app.use(express.urlencoded({ extended: true })); // to parse URL-encoded bodies
app.use(cors()); // to configure cors
app.use(express.json()); // to parse JSON bodies

module.exports = app;
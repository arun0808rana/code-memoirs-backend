const express = require("express");
const mongoose = require("mongoose");
const app = express();
require("dotenv").config();
const routes = require("./Routes/Routes.js");
const cors = require("cors");
const port = process.env.PORT;
const bodyParser = require("body-parser");
const mongoURI = process.env.mongoURI;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("", routes);

mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log(err));

app.listen(port, () => console.log("listing on port ", port));

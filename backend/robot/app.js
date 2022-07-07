require("dotenv").config();
const express = require("express");
const session = require("express-session");
const bodyParser = require("body-parser");
const path = require("path");
const morgan = require("morgan");
const mongoose = require("mongoose");
const MongoDBStore = require("connect-mongodb-session")(session);

const userRoutes = require("./routes/user-route");

const app = express();
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Methods", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
const connect = require("./mongoose/connect");
const store = new MongoDBStore({
  uri: connect,
  collection: "sessions",
});

app.set("view engine", "ejs");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(morgan("dev"));
app.use(userRoutes);

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((result) => {
    console.clear();
    console.log("Connected to database...");
    app.listen(5000, () => {
      console.log("Listening at port 5000");
    });
  })
  .catch((err) => {
    console.log(err);
  });

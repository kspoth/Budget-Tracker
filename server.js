const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const compression = require("compression");

const PORT = 8080;

const app = express();

app.use(logger("dev"));

app.use(compression());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

// mongodb+srv://kspoth08:<Scooter#1>@cluster0.lmx5w.mongodb.net/workout?retryWrites=true&w=majority
//mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
mongoose.connect(
  process.env.MONGODB_URI ||
    "mongodb+srv://kspoth08:Scooter%231@cluster0.lmx5w.mongodb.net/Budget?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  }
);

// routes
app.use(require("./routes/api.js"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});

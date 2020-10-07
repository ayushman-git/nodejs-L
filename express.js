const express = require("express");
const mongoose = require("mongoose");
const model = require("./model/data")
const app = express();

//register view engine
app.set("view engine", "ejs");
app.set("views", "page");

const dbURL =
  "mongodb+srv://ayushman-test:duoro1998@test.bqhut.mongodb.net/Test?retryWrites=true&w=majority";

const connectToDb = async () => {
  const res = await mongoose.connect(dbURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("connected to db");
  app.listen(3000);
  console.log("port open");
  console.log(model);
};
connectToDb();
app.use((req, res, next) => {
  next();
});

app.use(express.static("public"));

app.get("/", (req, res) => {
  // res.send("Hello");
  res.render("index", { title: "Home" });
});

app.get("/some", (req, res) => {
  // res.send("AB");
  res.render("some", { title: "Some" });
});

app.get("/something", (req, res) => {
  // res.send("AB");
  res.redirect("/some");
});

app.use((req, res) => {
  res.status(404).render("404", { title: "404" });
});

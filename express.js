const express = require("express");
const mongoose = require("mongoose");
const Models = require("./models/data");
const app = express();

//register view engine
app.set("view engine", "ejs");
app.set("views", "page");

//connecting to mongo db collection
const dbURL =
  "mongodb+srv://ayushman:duoro1998@nodetuts.bqhut.mongodb.net/node-tuts?retryWrites=true&w=majority";

(async () => {
  const res = await mongoose.connect(dbURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("connected to db");
  app.listen(3000);
  console.log("port open");
})();
app.use((req, res, next) => {
  next();
});

// app.get("/add", (req, res) => {
//   const data = new Models({
//     title: "Hello again",
//     content: "Something here again",
//     randomNo: 231,
//   });
//   data.save()
//     .then((result) => {
//       res.send(result)
//     })
//     .catch((err) => {
//       console.log(err)
//     })
// });

// app.get("/all", (req, res) => {
//   Models.find()
//     .then((result) => {
//       res.send(result)
//     })
//     .catch((err) => {
//       console.log(err);
//     })
// })

// app.get("/one", (req, res) => {
//   Models.findById("5f82f0982fc4850bb021402d")
//     .then((result) => {
//       res.send(result)
//     })
//     .catch((err) => {
//       console.log(err);
//     })
// })

//making dir 'public' public
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  let allData = null;
  // res.send("Hello");
  //finding data for db and sending it as a res.
  Models.find()
    .then((result) => {
      allData = result;
      res.render("index", { title: "Home", allData: allData });
    })
    .catch((err) => {
      console.log(err);
    });
});
app.post("/some", (req, res) => {
  const bData = new Models(req.body);
  bData
    .save()
    .then((result) => {
      console.log(res.redirect("/"));
    })
    .catch((err) => {
      console.log(err);
    });
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

const express = require("express");
const app = express();

app.get("/", (req, res) => {
  // res.send("Hello");
  res.sendFile("./page/index.html", { root: __dirname })
});

app.get("/some", (req, res) => {
  // res.send("AB");
  res.sendFile("./page/some.html", { root: __dirname })
});

app.get("/something", (req, res) => {
  // res.send("AB");
  res.redirect("/some")
});

app.use((req, res) => {
  res.status(404).sendFile("./page/404.html", { root: __dirname })

})
app.listen(3000);

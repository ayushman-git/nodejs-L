const http = require("http");
const fs = require("fs");
const _ = require("lodash");

const server = http.createServer((req, res) => {

  //lodash

  const randomNo = _.random(0,7)
  console.log(randomNo);

  const onlyOnce = _.once(() => {
    console.log("One");
  })

  onlyOnce();

  let path = "./page/";
  switch (req.url) {
    case "/":
      path += "index.html";
      res.statusCode = 200;
      break;
    case "/some":
      path += "some.html";
      res.statusCode = 200;
      break;
    case "/somethings":
      res.statusCode = 301;
      res.setHeader("Location", "/some");
      res.end();
      break;
    default:
      path += "404.html";
      res.statusCode = 404;
      break;
  }
  // console.log(req.url, req.method);
  res.setHeader("Content-Type", "text/html");
  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    } else {
      // res.write(data);
      res.end(data);
    }
  });
});

server.listen(3000, () => {
  console.log("Server running");
});

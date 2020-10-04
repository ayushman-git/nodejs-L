const fs = require("fs");

const stream = fs.createReadStream("./garbage/hello.txt", { encoding: "utf-8" });
const writeS = fs.createWriteStream("./garbage/hellonewtwo.txt", { encoding: "utf-8" });

// stream.on("data", (buff) => {
//   writeS.write('\n----------------------------------------Buffer---------------------------------\n')
//   writeS.write(buff)
// });

stream.pipe(writeS);
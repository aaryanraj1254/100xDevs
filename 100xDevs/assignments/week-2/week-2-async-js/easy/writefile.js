const fs = require("fs");

fs.writeFile("a.txt", "Hello, World!", (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("File written successfully!");
});
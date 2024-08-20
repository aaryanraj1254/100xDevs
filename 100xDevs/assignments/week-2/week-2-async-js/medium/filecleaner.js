const fs = require("fs");

fs.readFile("b.txt", 'utf-8', (err, data) => {
  if (err) {
    console.log(err);
    return;
  } else {
    const trimmedData = data.replace(/\s+/g, ' ').trim();

    
    fs.writeFile("b.txt", trimmedData, (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("File updated successfully!");
      }
    });
  }
});
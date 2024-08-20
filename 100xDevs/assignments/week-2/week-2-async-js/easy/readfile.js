const fs = require("fs");

fs.readFile('a.txt', 'utf-8', (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(data);
});

for (let i = 0; i < 100000000; i++) {
  // do something here
}
console.log('operation completed');
console.log('this will be printed after');
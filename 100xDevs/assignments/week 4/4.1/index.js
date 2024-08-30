const fs = require('fs');
const path = require('path');

const filePath = process.argv[ 2];
// process.argv would be ['node', 'script.js', 'myfile.txt']
// process.argv[2] would be 'myfile.txt', which is the file path.
// So, the code is simply getting the file path from the command line and storing it in the filePath variable.

if (!filePath) {
  console.error('Please provide a file path');
  process.exit(1);
}

const fileContent = fs.readFileSync(filePath, 'utf8');
const words = fileContent.split(/\s+/);

console.log(`The file contains ${words.length} words`);



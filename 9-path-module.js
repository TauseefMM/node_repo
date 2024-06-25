const path = require('path');
const os = require('os');

// Returns the platform-specific path separator
const platformSeparator = path.sep;
console.log(platformSeparator);

const filePath = path.join('/', 'content', 'subfolder', 'test.txt');
console.log(filePath);
console.log(os.EOL);

const baseName = path.basename(filePath);
console.log("File Name : ",baseName);
console.log(os.EOL);

const absolutePath = path.resolve(__dirname, 'content', 'subfolder', 'test.txt');
console.log("absolutePath : ",absolutePath);
console.log(os.EOL);


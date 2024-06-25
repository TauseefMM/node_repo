const {readFileSync,writeFileSync} = require('fs');
// console.log(fs);
writeFileSync('./content/first.txt', 'Hello, this is first text file');
writeFileSync('./content/subfolder/second.txt', 'Hello, this is second text file');
// Synchronous file reading
console.log('Start of synchronous code');
const data = readFileSync('./content/first.txt', 'utf-8'); // Reading file synchronously
console.log('File data:', data);
console.log('End of synchronous code');

const firstFileContent = readFileSync('./content/first.txt', 'utf-8');
const secondFileContent = readFileSync('./content/subfolder/second.txt', 'utf-8');

console.log(firstFileContent);
console.log(secondFileContent);

const result = `Here is the result:
${firstFileContent}, 
${secondFileContent}`;

console.log("Result: " + result);

writeFileSync('./content/result.txt', result);

const newContent = '   Hello, world!';

writeFileSync('./content/result.txt', newContent, { flag: 'a' });

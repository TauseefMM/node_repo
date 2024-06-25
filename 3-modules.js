//common js ,every file in node is module (by default)
//modules - encapsulate code (only share minimum);

const names = require('./name');
const utils = require('./utils');
const alternativeData = require('./7-alternative-flavor');
require('./6-mind-grenade');
console.log(names);
console.log(utils);
// console.log(sayhi);
console.log(alternativeData);

utils.sayhi('susan');
utils.sayhi(names.john);
utils.sayhi(names.peter);
const abc = require('./people');
const {people,ages} = require('./people');

console.log(abc.ages);
console.log(people,ages);

const os = require('os');
console.log(os.platform());

const calculator = require('./calculator');
cal = new  calculator();
console.log(cal.do(process.argv[2], process.argv[3], process.argv[4]));
console.log(process.argv);

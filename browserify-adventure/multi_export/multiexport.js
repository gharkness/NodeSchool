var ndjson = require('./ndjson.js');


var first = prompt();

var second = prompt();


console.log(ndjson.parse(first));

console.log(ndjson.stringify(second));

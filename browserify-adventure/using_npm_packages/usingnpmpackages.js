var remove_dup = require('uniq');

var input = prompt();

var split_arr = input.split(',');

var uniq_arr = remove_dup(split_arr);

console.log(uniq_arr);

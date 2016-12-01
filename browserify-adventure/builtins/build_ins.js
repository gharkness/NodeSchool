var url = require('url');
var querystring = require('querystring');

//  the input from prompt should be a web address
var usr_input = prompt();

//  url.parse returns an object with all the components of the url.
var query = url.parse(usr_input).query;

var result = querystring.parse(query);

console.log(url.resolve(usr_input, result.file));

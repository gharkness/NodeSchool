var _ = require('lodash');

module.exports = function (input) {
    var mytemplate = "Hello <%= name %> (logins: <%= login.length %>)";

    return _.template(mytemplate)(input);
};

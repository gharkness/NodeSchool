var _ = require('lodash');

var worker = function(list) {
    return _.filter(list, { active: true });
}

module.exports = worker;

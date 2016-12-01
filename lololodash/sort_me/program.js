var _ = require('lodash');

var sorting = function(collection) {
    return _.sortBy(collection, "quantity").reverse();
}

module.exports = sorting;

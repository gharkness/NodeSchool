var _ = require('lodash');

module.exports = function (collection) {
    return _.chain(collection)
        .map(function (item) {
            return item + 'Chained';
        })
        .map(function (item) {
            return item.toUpperCase();
        })
        .sortBy()
        .value();
};

'use strict';

var _ = require('lodash');

module.exports = function (collection) {
    var counted = [];

    collection = _.groupBy(collection, "username");

    _.forEach(collection, function (item, name) {
        counted.push({
            username: name,
            comment_count: _.size(item)
        });
    });

    return _.sortBy(counted, "comment_count").reverse();
};

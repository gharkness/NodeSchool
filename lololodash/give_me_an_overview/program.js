'use strict';

var _ = require('lodash');

module.exports = function(collection) {

    var overview_arr = [], total = 0;

    collection = _.groupBy(collection, 'article');

    _.forEach(collection, function (item, key) {

        key = parseInt(key);
        total = 0;

        if (item.length === 1) total = item[0].quantity;
        else {
            total = _.reduce(item, function (sum, item) {
                return sum + item.quantity;
            }, 0);
        }

        overview_arr.push({
            article: key,
            total_orders: total
        });

    });

    overview_arr = _.sortBy(overview_arr, "total_orders").reverse();

    return overview_arr;
};

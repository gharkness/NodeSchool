var _ = require('lodash');

module.exports = function(collection) {
    var result = {
        hot: [],
        warm: []
    };

    function check_temp(temp) {
        return temp > 19;
    }

    _.forEach(collection, function (town, name) {

        if (_.every(town, check_temp)) {
            result.hot.push(name);
        } else if (_.some(town, check_temp)) {
            result.warm.push(name);
        }

    });

    return result;
};

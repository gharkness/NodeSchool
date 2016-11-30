var uniq = require('uniq');

module.exports = function unique_list(str) {
    var str_split = str.split(',');

    return uniq(str_split);
};

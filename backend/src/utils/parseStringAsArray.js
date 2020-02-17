const parseStringAsArray = require('../utils/parseStringAsArray');

module.exports = function parseStringAsArray(arrayAsString) {

    return arrayAsString.split(',').map(tech => tech.trim());
}
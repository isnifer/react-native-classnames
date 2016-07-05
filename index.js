var classnames = require('classnames');

function getBEMStylesheet() {
    var args = [].slice.call(arguments);

    if (!args.length) {
        throw Error('You should describe your stylesheet');
    } else if (args.length === 1) {
        throw Error('You should describe classnames for your element');
    }

    var style = args.shift();
    var elementClassnames = classnames(args);
    elementClassnames = elementClassnames.split(' ');

    return elementClassnames.reduce(function (memo, item) {
        return Object.assign(memo, style[item]);
    }, {});
}

module.exports = getBEMStylesheet;
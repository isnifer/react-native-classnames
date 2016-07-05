var test = require('tape');
var lib = require('../index');

var style = {
    ListItem: {
        color: 'red',
        fontSize: 12,
    },
    ListItemFirst: {
        textAlign: 'center',
    },
};

test('Simple Test', function (t) {
    var result = lib(style, 'ListItem');
    var resultKeys = Object.keys(result);

    var expectedResult = ['color', 'fontSize'];
    expectedResult.forEach(function (item, index) {
        t.equal(item, resultKeys[index], `${item} should be in result keys`);
    });

    t.end();
});

test('Simple Test With Modifier', function (t) {
    var result = lib(style, 'ListItem', 'ListItemFirst');
    var resultKeys = Object.keys(result);

    var expectedResult = ['color', 'fontSize', 'textAlign'];
    expectedResult.forEach(function (item, index) {
        t.equal(item, resultKeys[index], `${item} should be in result keys`);
    });

    t.end();
});

test('Simple Test With False Modifier', function (t) {
    var result = lib(style, 'ListItem', {'ListItemFirst': false});
    var resultKeys = Object.keys(result);

    var expectedResult = ['color', 'fontSize', 'textAlign'];
    expectedResult.forEach(function (item, index) {
        if (item === 'textAlign') {
            t.notEqual(item, resultKeys[index], `${item} shouldn't be in result keys`);
        } else {
            t.equal(item, resultKeys[index], `${item} should be in result keys`);
        }
    });

    t.end();
});
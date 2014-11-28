var fs = require('fs'),
    path = require('path');

module.exports.init = function () {
    global.__defineGetter__('_fs', function () {
        return fs;
    });
    global.__defineGetter__('_basedir', function () {
        return path.dirname(process.mainModule.filename);
    });
};

var fs = require('fs'),
    path=require('path');

module.exports.init = function () {
    global.__defineGetter__('_appBaseUrl', function () {
        return process.cwd();
    });
    global.__defineGetter__('_path', function () {
        return path;
    });
    global.__defineGetter__('_fs', function () {
        return fs;
    });
    global.__defineGetter__('_basedir', function () {
        return _path.dirname(process.mainModule.filename);
    });
};

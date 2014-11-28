var fs = require('fs'),
    path=require('path');

module.exports.init = function () {
    console.log(process);
    global.__defineGetter__('_appBaseUrl', function () {
        return process.env.PWD;
    });
    global.__defineGetter__('_fs', function () {
        return fs;
    });
    global.__defineGetter__('_basedir', function () {
        return path.dirname(process.mainModule.filename);
    });
};

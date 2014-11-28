var fs = require('fs'),
    path=require('path'),
    appBaseUrl='';

module.exports.init = function () {
    global.__defineGetter__('_appBaseUrl', function () {
        return appBaseUrl||(appBaseUrl=process.cwd());
    });
    global.__defineGetter__('_fs', function () {
        return fs;
    });
    global.__defineGetter__('_basedir', function () {
        return path.dirname(process.mainModule.filename);
    });
};

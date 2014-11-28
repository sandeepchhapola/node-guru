var fs = require('fs'),
    path=require('path'),
    appBaseUrl='';

module.exports.init = function () {
    global.__defineGetter__('_appBaseUrl', function () {
        if(!appBaseUrl){
            appBaseUrl=process.cwd();
        }
        return appBaseUrl;
    });
    global.__defineGetter__('_fs', function () {
        return fs;
    });
    global.__defineGetter__('_basedir', function () {
        return path.dirname(process.mainModule.filename);
    });
};

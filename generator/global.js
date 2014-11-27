var fs = require('fs');
module.exports.init = function () {
    global.__defineGetter__('_appBaseUrl', function () {
        return process.env.PWD;
    });
    global.__defineGetter__('_fs', function () {
        return fs;
    });
};

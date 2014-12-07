require('colors');
module.exports.npmInstallation = function () {
    var exec = require('child_process').exec,
        npm = exec('npm install');

    npm.stdout.on('data', function (data) {
        console.log(data.toString().blue);
    });

    npm.stderr.on('data', function (data) {
        console.log(('npm stderr: ' + data.toString()).red);
    });

    npm.on('close', function (code) {
        if (code !== 0) {
            console.log('npm process exited with code ' + code.toString().yellow);
        }
    });
};

module.exports.bowerInstallation = function () {
    var exec = require('child_process').exec,
        bower = exec('bower install --allow-root');

    bower.stdout.on('data', function (data) {
        console.log(data.toString().blue);
    });

    bower.stderr.on('data', function (data) {
        console.log(('bower stderr: ' + data.toString()).red);
    });

    bower.on('close', function (code) {
        if (code !== 0) {
            console.log(('bower process exited with code ' + code.toString()).yellow);
        }
    });
};

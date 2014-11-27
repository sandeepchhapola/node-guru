module.exports.npmInstallation=function(){
    var spawn = require('child_process').spawn,
        npm    = spawn('npm', ['install']);

    npm.stdout.on('data', function (data) {
        console.log(data.toString());
    });

    npm.stderr.on('data', function (data) {
        console.log('npm stderr: ' + data.toString());
    });

    npm.on('close', function (code) {
        if (code !== 0) {
            console.log('npm process exited with code ' + code.toString());
        }
    });
};

module.exports.bowerInstallation=function(){
    var spawn = require('child_process').spawn,
        bower    = spawn('bower', ['install']);

    bower.stdout.on('data', function (data) {
        console.log(data.toString());
    });

    bower.stderr.on('data', function (data) {
        console.log('bower stderr: ' + data.toString());
    });

    bower.on('close', function (code) {
        if (code !== 0) {
            console.log('bower process exited with code ' + code.toString());
        }
    });
};

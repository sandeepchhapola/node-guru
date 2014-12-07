module.exports.buildApp = function () {
    var filePath = _basedir + "/templete_files/content.txt";
    var newFile = '';
    var _basedirName='';
    var content = _fs.readFileSync(filePath).toString().split('\n');
    var len = content.length;
    var done = 0;
    require('colors');
    if(_basedirName){
        _basedirName=_path.basename(_appBaseUrl);
    }
    content.forEach(function (line) {
        if(line.indexOf('nodeguru') > -1){
           line=line.replace('nodeguru',_basedirName);
        }
        if (line.indexOf('[FILE_URL]') > -1) {
            newFile = line.replace('[FILE_URL]', _appBaseUrl);
            _fs.writeFileSync(newFile, '', "utf-8");
            done++;
        } else {
            _fs.appendFileSync(newFile, line + '\n', "utf-8");
            done++;
        }
        process.stdout.clearLine();
        process.stdout.cursorTo(0);
        process.stdout.write((Math.ceil(done * 100 / len) + ' ' + "%").green);
        if (len == done) {
            process.stdout.write("\n");
        }
    });
};
var fs = require('fs');

module.exports.init = function () {
    var ds = "templete_files/directory_structure.txt",
        data = fs.readFileSync(ds, "utf-8").split('\n'),
        length = data.length;
    for (var i = 0; i < length; i++) {
        var curr_indx = data[i].indexOf(">"),
            currDirName = data[i].substring(curr_indx + 1, length);

        if (i > 0) {
            var last_indx = data[i - 1].indexOf(">"),
                lastDirName = data[i - 1].substring(last_indx + 1, length);

            if (curr_indx > last_indx) {
                process.chdir(lastDirName);
            } else if (curr_indx < last_indx && curr_indx == -1 && last_indx == 4) {
                process.chdir('..');
                process.chdir('..');
            } else if (curr_indx !== last_indx) {
                process.chdir('..');
            }
        }
        fs.mkdirSync(currDirName,parseInt('0777', 8));
    }
};

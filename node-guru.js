var global=require('./generator/global');
var directories=require('./generator/directories');
var templetes=require('./generator/templetes');
var bootstrape=require('./generator/bootstrape');

global.init();
directories.init();
templetes.buildApp();
bootstrape.npmInstallation();
bootstrape.bowerInstallation();
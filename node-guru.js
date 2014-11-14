var global=require('./generator/global');
var directories=require('./generator/directories');
var templetes=require('./generator/templetes');

global.init();
directories.init();
templetes.buildApp();
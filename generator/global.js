module.exports.init=function(){
    global.__defineGetter__('_appBaseUrl',function(){
            return process.env.PWD;
    });
};

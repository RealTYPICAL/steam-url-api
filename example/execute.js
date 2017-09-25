const monitor = require('active-window');
var steam = require('../out/src/index');
const processWindows = require("node-process-windows");


steam.createSteam((err, steam) => {
    if(err){
        console.log('joiwejfoiwejf');
    } else {
        console.log('wjefoijwoefjwe');
    }
    steam.addNonSteamGame(err => {
        monitor.getActiveWindow(window => {
            console.log('window.app: ' + window.app);
            console.log('window.title: ' + window.title);
            process.exit(0);
        });
    });
    
});
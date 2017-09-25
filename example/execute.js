
var steam = require('../out/src/index');

steam.createSteam((err, steam) => {
    if(err){
        console.log('joiwejfoiwejf');
    } else {
        console.log('wjefoijwoefjwe');
    }
    steam.addNonSteamGame();
    process.exit(0);
});
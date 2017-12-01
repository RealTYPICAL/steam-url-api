const steam = require('../out/src/index');

steam.createSteam((err, steam) => {
    steam.run('2630', steamErr => {
        console.log('something');
    });
});
const monitor = require('active-window');
var steam = require('../out/src/index');
const processWindows = require("node-process-windows");
const ffi = require('ffi');
const ref = require('ref');

const stringPtr = ffi.types.CString;

const lib = new ffi.Library('user32', {
    GetForegroundWindow: [
        'long', [],
    ],
    GetWindowTextA: [
        'long', ['long', stringPtr, 'int'],
    ],
    GetWindowTextLengthA: [
        'long', ['long']
    ]
});
const hwnd = lib.GetForegroundWindow();
const sizeOf = lib.GetWindowTextLengthA(hwnd);
const buf = new Buffer(sizeOf + 1);
const something = lib.GetWindowTextA(hwnd, buf, buf.length);
const result = ref.readCString(buf);

console.log('blah is: ' + hwnd);
console.log('something is: ' + something);
console.log('the name of the window is: ' + result);

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
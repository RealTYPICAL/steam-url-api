// TODO: Write typings for this.
// TODO: Will probably need a similar node module to be written to close windows for clean up.
// https://msdn.microsoft.com/en-us/library/windows/desktop/ms632682(v=vs.85).aspx
// TODO: I could probably make this module faster by writing it in c++ and calling it from node...
import { assert, expect } from 'chai';
import { Library, types } from 'ffi';
import { readCString } from 'ref';
import { createSteam, ISteam } from '../src/index';

const stringPtr = types.CString;

const lib = new Library('user32', {
    CloseWindow: [
        'long', ['long'],
    ],
    GetForegroundWindow: [
        'long', [],
    ],
    GetWindowTextA: [
        'long', ['long', stringPtr, 'int'],
    ],
    GetWindowTextLengthA: [
        'long', ['long'],
    ],
});

function getForegroundWindowName(): string {
    const hwnd = lib.GetForegroundWindow();
    const buf = new Buffer(lib.GetWindowTextLengthA(hwnd) + 1);
    lib.GetWindowTextA(hwnd, buf, buf.length);
    return readCString(buf);
}

describe('Base Steam API Tests', () => {

    it('can add non steam game.', done => {
        createSteam((err?: Error, steam?: ISteam) => {
            if (steam) {
                steam.addNonSteamGame(steamErr => {
                    assert(!steamErr, 'There was an error adding non steam game.');
                    setTimeout(() => {
                        assert.equal(getForegroundWindowName(), 'Add a Game', 'Add non steam game should be open.');
                        done();
                    }, 200);
                });
            }
        });
    });

    afterEach(() => {
        lib.CloseWindow(lib.GetForegroundWindow());
    });
});

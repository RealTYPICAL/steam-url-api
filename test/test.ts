// TODO: Write typings for this.
// TODO: Will probably need a similar node module to be written to close windows for clean up.
// https://msdn.microsoft.com/en-us/library/windows/desktop/ms632682(v=vs.85).aspx
const monitor = require('active-window'); // tslint:disable-line
import { assert, expect } from 'chai';
import { createSteam, ISteam } from '../src/index';

describe('Base Steam API Tests', () => {

    before(() => {
        monitor.getActiveWindow(window => {
            // TODO: Warm up active window API before using it for testing.
        });
    });

    it('has steam installed.', () => {
        createSteam((err: Error, steam: ISteam) => {
            assert(steam, 'Steam is initialised.');
        });
    });

    it('can add non steam game.', done => {
        createSteam((err: Error, steam: ISteam) => {
            steam.addNonSteamGame(steamErr => {
                assert(!steamErr, 'There was an error adding non steam game.');
                monitor.getActiveWindow(window => {
                    assert(window.app === 'Steam', 'Application should be Steam.');
                    assert(window.title === 'Add a Game', 'Should be trying to add a game.');
                    done();
                });
            });
        });
    });
});

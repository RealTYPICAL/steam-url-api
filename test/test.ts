
import { assert, expect } from 'chai';
import { createSteam, ISteam } from '../src/index';

describe('Base Steam API Tests', () => {

    it('has steam installed.', () => {
        createSteam((err: Error, steam: ISteam) => {
            assert(steam, 'Steam is initialised.');
        });
    });

    it('can add non steam game.', done => {
        createSteam((err: Error, steam: ISteam) => {
            steam.addNonSteamGame(steamErr => {
                assert(!steamErr, 'There was an error adding non steam game.');
                done();
            });
        });
    });
});

import { assert, expect } from 'chai';
import { createSteam, ISteam } from '../src/index';

describe('Base Steam API Tests', () => {

    it('has steam installed.', () => {
        createSteam((err?: Error, steam?: ISteam) => {
            assert(steam, 'Steam is initialised.');
        });
    });

});

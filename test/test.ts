
import { assert, expect } from 'chai';
import { createSteam, ISteam } from '../src/index';

describe('Base Steam API Tests', () => {

    it('has steam installed.', () => {
        // Something.
        createSteam((err: Error, steam: Steam) => {
            if (err) {
                // Something.
            }
        });
    });
});

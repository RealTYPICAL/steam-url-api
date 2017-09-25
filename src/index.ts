import * as opn from 'opn';
import { STEAM_URL } from './constants';
import { Friends } from './friends';
import { Music } from './music';
import { Steam } from './steam';

// TODO: The pre commit hook should only check the hygiene of the files that are being committed.
// TODO: The pre commit hook should detect compilation errors. Compiling all is too slow. Only compile relevent files.

export function createSteam(callback: (err?: Error, steam?: ISteam) => void): void {
    opn(STEAM_URL + 'blahblah', err => {
        if (err) {
            callback(new Error('Steam does not appear to be installed on this machine. ' + err.message));
        } else {
            callback(undefined, new Steam());
        }
    });
}

export interface ISteam {

    readonly friends: Friends;
    readonly music: Music;
}

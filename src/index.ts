import * as opn from 'opn';
import { STEAM_URL } from './constants';
import { Steam } from './steam';

export class SteamFactory {

    public createSteam(callback: (err?: Error, steam?: Steam) => void): void {
        opn(STEAM_URL + 'blahblah', err => {
            if (err) {
                callback(new Error('Steam does not appear to be installed on this machine. ' + err.message));
            } else {
                callback(undefined, new Steam());
            }
        });
    }
}

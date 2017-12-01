import * as opn from 'opn';
import { STEAM_URL } from './constants';
import { Friends } from './friends';
import { Music } from './music';
import { Nav } from './nav';
import { Open } from './open';
import { Settings } from './settings';
import { Steam } from './steam';
import { Support } from './support';
import { URL } from './url';

// TODO: The pre commit hook should only check the hygiene of the files that are being committed.
// TODO: The pre commit hook should detect compilation errors. Compiling all is too slow. Only compile relevent files.
// TODO: Add error callbacks to all functions.
// TODO: Add the child process to the return value...? maybe. Couldn't hurt.

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
    readonly nav: Nav;
    readonly open: Open;
    readonly settings: Settings;
    readonly url: URL;
    readonly support: Support;

    openSteam(...args: string[]): void;
    addNonSteamGame(callback: (err: Error) => void): void;
    advertise(id: string): void;
    acceptGiftOrGuestPast(pass: string): void;
    appNews(id: string): void;
    backup(id: string): void;
    browseMedia(): void;
    checkSysReqs(id: string): void;
    connect(target?: string, port?: number, password?: string): void;
    defrag(id: string): void;
    exitSteam(): void;
    flushConfig(): void;
    guestPasses(): void;
    hardwarePromo(): void;
    install(id: string): void;
    installAddon(addon: string): void;
    openURL(url: string): void;
    openExternalURL(url: string): void;
    paypalCancel(): void;
    preload(id: string): void;
    publisher(name: string): void;
    purchase(id: string): void;
    purchaseSubscription(id: string): void;
    removeAddon(addon: string): void;
    run(id: string, callback: (err: Error) => void): void;
    runSafe(id: string): void;
    runGameID(id: string): void;
    store(id?: string): void;
    subscriptionInstall(...id: string[]): void;
    takeSurvey(id: string): void;
    uninstall(id: string): void;
    updateNews(id: string): void;
    validate(id: string): void;
}

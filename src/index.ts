
import * as opn from 'opn';
import { Friends } from './friends';
import { BASE_STEAM_URL, STEAM_URL} from './constants';
import { Music } from './music';

class Steam {

    public readonly friends = new Friends();

    public readonly music = new Music();

    public openSteam(...args: string[]): void {
        //TODO: Pretty sure I have to parse the args to a valid string.
        opn(BASE_STEAM_URL + args);
    }

    public addNonSteamGame(): void {
        opn(STEAM_URL + 'AddNonSteamGame');
    }

    public advertise(id: string): void {
        opn(STEAM_URL + 'advertise/' + id);
    }

    public acceptGiftOrGuestPast(pass: string): void {
        opn(STEAM_URL + 'ackMessage/ackGuestPass/' + pass);
    }

    public appNews(id: string): void {
        opn(STEAM_URL + 'appnews/' + id);
    }

    public backup(id: string): void {
        opn(STEAM_URL + 'backup/' + id);
    }

    public browseMedia(): void {
        opn(STEAM_URL + 'browsemedia');
    }

    public checkSysReqs(id: string) {
        opn(STEAM_URL + 'checksysreqs' + id);
    }

    /**
     * @param target Can be IP or DNS.
     * @param port 
     * @param password 
     */
    public connect(target?: string, port?: number, password?: string): void {
        opn(STEAM_URL + 'connect/' + this.createTarget(target, port) + '/' + password && password || '');
    }

    private createTarget(target?: string, port?: number): string {
        let request = target && target || '';
        request = port && request + ':' + port || '';
        return request;
    }

    public defrag(id: string): void {
        opn(STEAM_URL + 'defrag/' + id);
    }

    public exitSteam(): void {
        opn(STEAM_URL + 'ExitSteam');
    }

    public flushConfig(): void {
        opn(STEAM_URL + 'flushconfig');
    }

    public guestPasses(): void {
        opn(STEAM_URL + 'guestpasses');
    }

    public hardwarePromot(): void {
        //TODO: I'm not sure whether there should be an argument being used here.
        opn(STEAM_URL + 'hardwarepromo');
    }

    public install(id: string): void {
        opn(STEAM_URL + 'install/' + id);
    }

    public installAddon(addon: string): void {
        opn(STEAM_URL + 'installaddon/' + addon);
    }

}

const steam = new Steam();
module.exports = steam;
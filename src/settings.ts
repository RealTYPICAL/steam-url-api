import * as opn from 'opn';
import { STEAM_URL } from './constants';

export class Settings {

    private static readonly SETTINGS = STEAM_URL + 'settings/';

    public account(): void {
        opn(Settings.SETTINGS + 'account');
    }

    public friends(): void {
        opn(Settings.SETTINGS + 'friends');
    }

    public interface(): void {
        opn(Settings.SETTINGS + 'interface');
    }

    public ingame(): void {
        opn(Settings.SETTINGS + 'ingame');
    }

    public downloads(): void {
        opn(Settings.SETTINGS + 'downloads');
    }

    public voice(): void {
        opn(Settings.SETTINGS + 'voice');
    }
}

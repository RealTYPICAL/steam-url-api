
import * as opn from 'opn';

import { FRIENDS_URL } from './constants';

export class Settings {

    private static readonly SETTINGS = 'settings';
    private static readonly SETTINGS_URL = FRIENDS_URL + Settings.SETTINGS + '/';

    public hideOffline(): void {
        opn(Settings.SETTINGS_URL + 'hideoffline');
    }

    public showAvatars(): void {
        opn(Settings.SETTINGS_URL + 'showavatars');
    }

    public sortByName(): void {
        opn(Settings.SETTINGS_URL + 'sortbyname');
    }
}
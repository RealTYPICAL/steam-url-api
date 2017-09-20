
import * as opn from 'opn';

import { FRIENDS_URL } from './constants';

export class Settings {

    private static readonly SETTINGS = FRIENDS_URL + 'settings/';

    public hideOffline(): void {
        opn(Settings.SETTINGS + 'hideoffline');
    }

    public showAvatars(): void {
        opn(Settings.SETTINGS + 'showavatars');
    }

    public sortByName(): void {
        opn(Settings.SETTINGS + 'sortbyname');
    }
}
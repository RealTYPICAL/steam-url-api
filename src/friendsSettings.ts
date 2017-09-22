
import * as opn from 'opn';

import { FRIENDS_URL } from './constants';

export class FriendsSettings {

    private static readonly SETTINGS = FRIENDS_URL + 'settings/';

    public hideOffline(): void {
        opn(FriendsSettings.SETTINGS + 'hideoffline');
    }

    public showAvatars(): void {
        opn(FriendsSettings.SETTINGS + 'showavatars');
    }

    public sortByName(): void {
        opn(FriendsSettings.SETTINGS + 'sortbyname');
    }
}

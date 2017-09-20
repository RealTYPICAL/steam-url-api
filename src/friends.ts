
import * as opn from 'opn';
import { STEAM_URL } from './constants';

export class Friends {

    private static readonly FRIENDS = 'friends';
    private static readonly FRIENDS_URL = STEAM_URL + Friends.FRIENDS + '/';

    public add(id: string): void {
        opn(Friends.FRIENDS_URL + 'add/' + id);
    }

    public friends(id: string): void {
        opn(Friends.FRIENDS_URL + 'friends/' + id);
    }
}
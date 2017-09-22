
import * as opn from 'opn';
import { FRIENDS_URL } from './constants';
import { FriendsSettings } from './settings';
import { Status } from './status';

export class Friends {

    public readonly settings = new FriendsSettings();

    public readonly status = new Status();

    public add(id: string): void {
        opn(FRIENDS_URL + 'add/' + id);
    }

    public friends(id: string): void {
        opn(FRIENDS_URL + 'friends/' + id);
    }

    public joinChat(id: string): void {
        opn(FRIENDS_URL + 'joinchat/' + id);
    }

    public message(id: string): void {
        opn(FRIENDS_URL + 'message/' + id);
    }

    public players(): void {
        opn(FRIENDS_URL + 'players');
    }

}
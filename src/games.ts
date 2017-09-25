import * as opn from 'opn';
import { STEAM_URL } from './constants';

export class Games {

    private static readonly DETAILS = 'details';
    private readonly GAMES_URL: string;

    constructor(private readonly URL: string) {
        this.GAMES_URL = URL + 'games/';
    }

    /**
     * Opens list of games.
     * The same as open/games or nav/games
     */
    public open(): void {
        opn(URL + 'games');
    }

    public details(id?: string): void {
        if (id) {
            opn(this.GAMES_URL + Games.DETAILS + '/' + id);
        } else {
            opn(this.GAMES_URL + Games.DETAILS);
        }
    }

    public grid(): void {
        opn(this.GAMES_URL + 'grid');
    }

    public list(): void {
        opn(this.GAMES_URL + 'list');
    }
}

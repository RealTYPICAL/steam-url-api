import * as opn from 'opn';
import { STEAM_URL } from './constants';

export class Games {

    private static readonly GAMES_URL = URL + 'games/'
    private static readonly DETAILS = 'details';

    constructor(private readonly URL: String) { }

    /**
     * Opens list of games.
     * The same as open/games or nav/games
     */
    public open(): void {
        opn(URL + 'games');
    }

    public details(id?: string): void {
        if(id) {
            opn(Games.GAMES_URL + Games.DETAILS + '/' + id);
        } else {
            opn(Games.GAMES_URL + Games.DETAILS);
        }
    }

    public grid(): void {
        opn(Games.GAMES_URL + 'grid');
    }

    public list(): void {
        opn(Games.GAMES_URL + 'list');
    }
}
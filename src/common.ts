import * as opn from 'opn';
import { Games } from './games';

export class Common {

    public readonly games: Games;

    constructor(private readonly URL: string) {
        this.games = new Games(URL);
    }

    public downloads(): void {
        opn(URL + 'downloads');
    }

    public music(): void {
        opn(URL + 'music');
    }

    public tools(): void {
        opn(URL + 'tools');
    }
}

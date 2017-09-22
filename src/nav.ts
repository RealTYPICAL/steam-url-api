
import * as opn from 'opn';
import { Common } from './common';
import { STEAM_URL } from './constants';
import { Games } from './games';

export class Nav {

    private static readonly NAV = STEAM_URL + 'nav/';
    public readonly games: Games;
    private readonly common: Common;

    constructor() {
        this.common = new Common(Nav.NAV);
        this.games = this.common.games;
    }

    public downloads(): void {
        this.common.downloads();
    }

    public media(): void {
        // TODO: Seems erroneous in the doc.
        // 1. The doc is correct...?
        // 2. Both functions are called media.
        // 3. Both functions are called mymedia.
        opn(Nav.NAV + 'media');
    }

    public music(): void {
        this.common.music();
    }

    public tools(): void {
        this.common.tools();
    }

}

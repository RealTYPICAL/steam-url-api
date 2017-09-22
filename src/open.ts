import { Common } from './common';
import { Games } from './games';
import { STEAM_URL } from './constants';
import * as opn from 'opn';

export class Open {

    private static readonly OPEN = STEAM_URL + 'open/';
    private readonly common: Common;
    public readonly games: Games;

    constructor(){
        this.common = new Common(Open.OPEN);
        this.games = this.common.games;
    }

    public activateProduct(): void{
        opn(Open.OPEN + 'activateproduct');
    }

    public bigPicture(): void{
        opn(Open.OPEN + 'bigpicture');
    }

    public console(): void {
        opn(Open.OPEN + 'download');
    }

    public downloads(): void {
        this.common.downloads();
    }

    public friends(): void {
        opn(Open.OPEN + 'friends');
    }

    public largeGamesList(): void {
        opn(Open.OPEN + 'largegameslist');
    }

    public miniGamesList(): void {
        opn(Open.OPEN + 'minigameslist');
    }

    public main(): void {
        opn(Open.OPEN + 'main');
    }

    public music(): void {
        this.common.music();
    }

    public musicPlayer(): void {
        opn(Open.OPEN + 'musicplayer');
    }

    public myMedia(): void {
        opn(Open.OPEN + 'mymedia');
    }

    public news(): void {
        opn(Open.OPEN + 'news');
    }

    public registerProduct(): void {
        opn(Open.OPEN + 'registerproduct');
    }

    public tools(): void {
        this.common.tools();
    }

    public screenshots(): void {
        opn(Open.OPEN + 'screenshots');
    }

    public servers(): void {
        opn(Open.OPEN + 'servers');
    }

    public settings(): void {
        opn(Open.OPEN + 'settings');
    }

}
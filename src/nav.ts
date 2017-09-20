
import * as opn from 'opn';
import { STEAM_URL } from './constants';
import { Common } from './common'

export class Nav {

    private static readonly NAV = STEAM_URL + 'nav/';
    private readonly common: Common;

    constructor(){
        this.common = new Common(Nav.NAV);
    }

    public media(){
        //TODO: Seems erroneous in the doc.
        //1. The doc is correct...?
        //2. Both functions are called media.
        //3. Both functions are called mymedia.
    }

}
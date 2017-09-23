import * as opn from 'opn';
import { SUPPORT } from './constants';
import { Tests } from './tests';

/**
 * All of these functions are in beta in the steam protocol and therefore don't work correctly.
 * See here for more information.
 * https://developer.valvesoftware.com/wiki/Steam_Support_strings
 */
export class Support {

    public readonly tests = new Tests();

    public all(): void {
        opn(SUPPORT + '*');
    }

    public background(): void {
        opn(SUPPORT + 'Background*');
    }

    // TODO: Refactor all of these. They use the same behaviour.
    public crash(type?: number): void {
        const crash = 'Crash';
        type ? opn(SUPPORT + crash + type)
            : opn(SUPPORT + crash + '*');
    }

    public connection(type?: number): void {
        const connection = 'Connection';
        type ? opn(SUPPORT + connection + type)
            : opn(SUPPORT + connection + '*');
    }

    public performance(type?: number): void {
        const performance = 'Performance';
        type ? opn(SUPPORT + performance + type)
            : opn(SUPPORT + performance + '*');
    }

}

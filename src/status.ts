
import * as opn from 'opn';
import { FRIENDS_URL } from "./constants";

export class Status {

    private static readonly STATUS = FRIENDS_URL + 'status/';

    public away() {
        opn(Status.STATUS + 'away');
    }

    public busy() {
        opn(Status.STATUS + 'busy');
    }

    public trade() {
        opn(Status.STATUS + 'trade');
    }

    public play() {
        opn(Status.STATUS + 'play');
    }

    public offline() {
        opn(Status.STATUS + 'offline');
    }

    public online() {
        opn(Status.STATUS + 'online');
    }
}

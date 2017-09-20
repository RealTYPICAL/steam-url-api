import { Games } from './games';

export class Common {

    public readonly games = new Games();

    constructor(private readonly url: string) { }

    public downloads(): void {

    }

    public music(): void {

    }

    public tools(): void {

    }
}
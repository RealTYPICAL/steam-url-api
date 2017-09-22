
import * as opn from 'opn';
import { STEAM_URL } from "./constants";

export class Music {

    private static readonly MUSIC = STEAM_URL + 'musicplayer/';

    public play(): void {
        opn(Music.MUSIC + 'play');
    }

    public pause(): void {
        opn(Music.MUSIC + 'pause');
    }

    public togglePlayPause(): void {
        opn(Music.MUSIC + 'toggleplaypause');
    }

    public playPrevious(): void {
        opn(Music.MUSIC + 'playprevious');
    }

    public playNext(): void {
        opn(Music.MUSIC + 'playnext');
    }

    public toggleMute(): void {
        opn(Music.MUSIC + 'togglemute');
    }

    public increaseVolume(): void {
        opn(Music.MUSIC + 'increasevolume');
    }

    public decreaseVolume(): void {
        opn(Music.MUSIC + 'decreaseVolume');
    }

    public togglePlayingRepeatStatus(): void {
        opn(Music.MUSIC + 'toggleplayingrepeatstatus');
    }

    public togglePlayingShuffled(): void {
        opn(Music.MUSIC + 'toggleplayingshuffled');
    }
}

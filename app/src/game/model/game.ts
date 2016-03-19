import {Platform} from './platform';

export interface Game {
    id: number,
    name:string,
    year: number,
    platforms: Array<Platform>
}
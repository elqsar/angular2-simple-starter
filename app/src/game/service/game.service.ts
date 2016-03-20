import {Http, Headers} from 'angular2/http';
import {Injectable} from 'angular2/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';
import {Game} from '../model/game';
import {GameStore} from '../model/gameStore';

const BASE_URL = 'http://localhost:3001/games';
const HEADER = { headers: new Headers({ 'Content-Type': 'application/json' }) };

@Injectable()
export class GamesService {
    games: Observable<Array<Game>>;

    constructor(private http: Http, private store: Store<GameStore>) {
        this.games = store.select('games');
    }

    fetchGames() {
        this.http.get(BASE_URL)
            .map(response => response.json())
            .map(json => ({ type: 'ADD_GAMES', payload: json}))
            .subscribe(action => this.store.dispatch(action));
    }
}
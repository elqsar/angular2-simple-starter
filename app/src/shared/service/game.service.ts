import {Http, Headers, Response} from 'angular2/http';
import {Injectable} from 'angular2/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';
import {Game} from '../model/game';
import {AppStore} from '../model/appStore';

const BASE_URL = 'http://localhost:3001/games';
const HEADER = { headers: new Headers({ 'Content-Type': 'application/json' }) };

@Injectable()
export class GamesService {
    games: Observable<Array<Game>>;

    constructor(private http: Http, private store: Store<AppStore>) {
        this.games = store.select('games');
    }

    fetchGames() {
        this.http.get(BASE_URL)
            .map((response: Response) => response.json())
            .map(json => ({ type: 'ADD_GAMES', payload: json}))
            .subscribe(
                action => this.store.dispatch(action),
                error => console.log('Error: ' + error)
            );
    }

    createGame(game: Game) {
        this.http.post(`${BASE_URL}`, JSON.stringify(game), HEADER)
            .map(res => res.json())
            .map(payload => ({ type: 'CREATE_GAME', payload: payload }))
            .subscribe(
                action => this.store.dispatch(action),
                error => console.log('Error: ' + error)
            );
    }

    updateGame(game: Game) {
        this.http.put(`${BASE_URL}/${game.id}`, JSON.stringify(game), HEADER)
            .subscribe(
                action => this.store.dispatch({ type: 'UPDATE_GAME', payload: game }),
                error => console.log('Error: ' + error)
            );
    }

    deleteGame(game: Game) {
        this.http.delete(`${BASE_URL}/${game.id}`)
            .subscribe(
                action => this.store.dispatch({ type: 'DELETE_GAME', payload: game }),
                error => console.log('Error: ' + error)
            );
    }
}
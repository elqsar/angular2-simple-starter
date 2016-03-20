import {Component, OnInit} from 'angular2/core';
import {Store} from '@ngrx/store';
import {GamesService} from '../shared/service/game.service';
import {GamesList} from './game.list.component';
import {Observable} from "rxjs/Observable";
import {Game} from '../shared/model/game';
import {AppStore} from '../shared/model/appStore';

@Component({
    selector: 'games',
    template: require('./game.component.html'),
    styles: [`
        .game-content {
            padding: 15px;
        }
    `],
    directives: [GamesList]
})
export class Games implements OnInit {
    games: Observable<Array<Game>>;

    constructor(private gamesService: GamesService, private store: Store<AppStore>) {}

    ngOnInit() {
        this.games = this.gamesService.games;
        this.gamesService.fetchGames();
    }

    deleteGame(game: Game) {
        console.log('Delete game: ' + game);
    }
}
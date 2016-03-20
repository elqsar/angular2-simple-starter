import {Component} from 'angular2/core';
import {Store} from '@ngrx/store';
import {GamesService} from './service/game.service';
import {GamesList} from './game.list.component';
import {Observable} from "rxjs/Observable";
import {Game} from './model/game';
import {GameStore} from './model/gameStore';

@Component({
    selector: 'games',
    template: `
    <div class="mdl-grid items">
    <div class="mdl-cell mdl-cell--8-col">
      <games-list 
        [games]="games | async"
        (deleted)="deleteGame($event)">
      </games-list>
    </div>
    </div>
    `,
    styles: [`
        .game-content {
            padding: 15px;
        }
    `],
    providers: [GamesService],
    directives: [GamesList]
})
export class Games {
    games: Observable<Array<Game>>;

    constructor(private gamesService: GamesService, private store: Store<GameStore>) {
        this.games = gamesService.games;
        gamesService.fetchGames();
    }

    deleteGame(game: Game) {
        console.log('Delete game: ' + game);
    }
}
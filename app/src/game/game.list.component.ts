import {Component, Input, Output, EventEmitter} from 'angular2/core';
import {Game} from './model/game';

@Component({
  selector: 'games-list',
  styles: [`
    .game-card.mdl-card {
        width: 512px;
    }
  `],
  template: `
    <div class="game-card mdl-card mdl-shadow--2dp" 
        *ngFor="#game of games">
      <div class="mdl-card__title">
        <h2 class="mdl-card__title-text">{{game.name}}</h2>
      </div>
      <div class="mdl-card__actions mdl-card--border"></div>
      <div class="mdl-card__supporting-text">
        Some description
      </div>
      <div class="mdl-card__menu">
      <button (click)="deleted.emit(game); $event.stopPropagation();"
        class="mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect">
        <i class="material-icons">close</i>
      </button>
      </div>
    </div>
  `
 })
 
 export class GamesList {
    @Input() games: Array<Game>;
    @Output() deleted = new EventEmitter();
 }


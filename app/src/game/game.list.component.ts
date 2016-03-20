import {Component, Input, Output, EventEmitter} from 'angular2/core';
import {Game} from '../shared/model/game';

@Component({
  selector: 'games-list',
  styles: [`
    .game-card.mdl-card {
        width: 512px;
    }
  `],
  template: require('./game.list.component.html')
 })
 
 export class GamesList {
    @Input() games: Array<Game>;
    @Output() deleted = new EventEmitter<Game>();
 }


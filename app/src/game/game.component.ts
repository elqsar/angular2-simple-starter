import {Component} from 'angular2/core';

@Component({
    selector: 'game-component',
    template: `<div class="game-content">Games coming here</div>`,
    styles: [`
        .game-content {
            padding: 15px;
        }
    `]
})
export class GameComponent {
    constructor() {
        
    }
}
import {Component} from 'angular2/core';

@Component({
    selector: 'home',
    template: `
        <div class="home-content">Content coming here</div>
    `,
    styles: [`
        .home-content {
            padding: 15px;
        }
    `]
})
export class Home {

}
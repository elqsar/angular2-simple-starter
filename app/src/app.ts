import {Component} from "angular2/core";
import {RouteConfig, ROUTER_DIRECTIVES} from "angular2/router";
import {Devtools} from "@ngrx/devtools";
import {Home} from './home/home.component';
import {Games} from './game/game.component';

@Component({
    selector: 'demo-app',
    template: require('./app.html'),
    directives: [ROUTER_DIRECTIVES, Devtools]
})
@RouteConfig([
    {path: '/home', name: 'Home', component: Home, useAsDefault: true},
    {path: '/games', name: 'Games', component: Games}
])
export class App {
    links = {
        home: ['Home'],
        games: ['Games']
    };
}
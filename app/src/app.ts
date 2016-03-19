import {Component} from "angular2/core";
import {RouteConfig, ROUTER_DIRECTIVES} from "angular2/router";
import {Devtools} from "@ngrx/devtools";
import {Home} from './home/home.component';

@Component({
    selector: 'demo-app',
    template: require('./app.html'),
    directives: [ROUTER_DIRECTIVES, Devtools]
})
@RouteConfig([
    {path: '/home', name: 'Home', component: Home, useAsDefault: true}
])
export class App {
    links = {
        home: ['Home']
    };
}
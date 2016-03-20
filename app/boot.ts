import 'core-js';
import 'zone.js/dist/zone-microtask';

import {bootstrap} from 'angular2/platform/browser';
import {provide} from 'angular2/core';
import {HTTP_PROVIDERS} from 'angular2/http';
import {instrumentStore} from '@ngrx/devtools'

import {
  ROUTER_PROVIDERS,
  Location,
  LocationStrategy,
  HashLocationStrategy} from 'angular2/router';

import {provideStore} from '@ngrx/store';
import {App} from './src/app';
import {games} from './src/game/store/game.store';

bootstrap(App, [
  HTTP_PROVIDERS,
  ROUTER_PROVIDERS,
  provide(LocationStrategy, {useClass: HashLocationStrategy}),
  provideStore({games}),
  instrumentStore()
]);

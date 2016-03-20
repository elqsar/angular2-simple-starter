import {Reducer, Action} from '@ngrx/store';
import {Game} from "../model/game";

export const games:Reducer<Array<Game>> = (state: Array<Game> = [], {type, payload}: Action) => {
    switch(type) {
        case 'ADD_GAMES':
            return payload;
        case 'CREATE_GAME':
            return [...state, payload];
        case 'UPDATE_GAME':
            return state.map(game => {
                return game.id === payload.id ? Object.assign({}, game, payload) : game;
            });
        case 'DELETE_GAME':
            return state.filter(game => {
                return game.id !== payload.id;
            });
        default:
            return state;
    }
}
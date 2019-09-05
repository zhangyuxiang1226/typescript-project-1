import * as types from '../action-types';
import { Home } from '../types';
import { Action } from '../actions/home'
let initState: Home = {
    category: 'all', // 
}
export default function (state: Home = initState, action: Action) {
    switch (action.type) {
        case types.SET_CATEGORY:
            return {...state, category: action.payload.category };
        default:
            return state;
    }
}
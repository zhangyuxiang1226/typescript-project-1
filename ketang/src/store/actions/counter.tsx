import * as types from '../action-types';
import {push} from 'connected-react-router';
interface incrementAction {
    type: string;
}
interface decrementAction {
    type: string;
}
export type Action = incrementAction | decrementAction;
export default {
    // action creator
    increment(){
        // return { type: types.INCREMENT };
        // redux-thunk写法
        return function (dispatch, getstate) {
            setTimeout(function () {
                dispatch({
                    type: types.INCREMENT
                });
            }, 1000)
        }
    },
    decrement(): decrementAction {
        return {
            type: types.DECREMENT
        };
    },
    goto() {
        return push('/2')
    }
}
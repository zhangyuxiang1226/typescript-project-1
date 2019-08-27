import * as types from '../action-types';
interface incrementAction {
    type: string;
}
interface decrementAction {
    type: string;
}
export type Action = incrementAction | decrementAction;
export default {
    // action creator
    increment(): incrementAction {
        return {
            type: types.INCREMENT
        };
    },
    decrement(): decrementAction {
        return {
            type: types.DECREMENT
        };
    }
}
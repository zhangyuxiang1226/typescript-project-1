import * as types from '../action-types';
interface setCategoryAction {
    type: string;
    payload: any;
}
export type Action = setCategoryAction;
export default {
    setCategory(category): setCategoryAction {
        console.log('action:',category)
        return {
            type: types.SET_CATEGORY,
            payload: category,
        }
    },
}
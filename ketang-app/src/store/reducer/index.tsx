import {combineReducers} from 'redux';
import counter1 from './counter1';
import counter2 from './counter2';
import home from './home';
import { connectRouter } from 'connected-react-router';
import history from '../history';
// 1. 合并reducers；将当前的路径信息写入仓库
let reducers = combineReducers({
    counter1,
    counter2,
    home,
    router: connectRouter(history),
})


export default reducers;
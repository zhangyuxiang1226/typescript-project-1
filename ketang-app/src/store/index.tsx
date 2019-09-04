import { createStore, applyMiddleware } from 'redux';
import reducer from './reducer';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import {routerMiddleware} from 'connected-react-router';
//2. 使用路由中间件，可以拦截跳转路径的特殊的action，然后调用history，实现路径跳转，并且把最新的路径信息，写入仓库
import history from './history';
let store = createStore(reducer, applyMiddleware(routerMiddleware(history), thunk, logger));
export default store;
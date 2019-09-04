import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Counter1 from './components/Counter1';
import Counter2 from './components/Counter2';
import { Provider } from 'react-redux';
import store from './store';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Route, Link } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router'
import history from './store/history';
ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <Route exact path="/" component={Counter1} />
            <Route exact path="/2" component={Counter2} />
        </ConnectedRouter>
    </Provider>
    , document.getElementById('root'));
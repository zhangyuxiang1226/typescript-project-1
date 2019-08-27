import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Counter1 from './components/Counter1';
import Counter2 from './components/Counter2';
import { Provider } from 'react-redux';
import store from './store';
ReactDOM.render(
    <Provider store={store}>
        <React.Fragment>
            <Counter1 />
            <Counter2 />
        </React.Fragment>
    </Provider>
    , document.getElementById('root'));
import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Cartapp from './App';
import {Provider} from 'react-redux';
import {store} from './store';
//adding a store to App
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import createStore from './store/createStore';
import { loadCryptoInfo } from './actions/cryptoActions';

import HomePage from './components/HomePage';

const initialCurrency = {
    currencySelected: "SGD"
}

const store = createStore();
store.dispatch(loadCryptoInfo(initialCurrency.currencySelected));

function initialise() {
    const app = document.createElement('div');
    document.body.appendChild(app);
    ReactDOM.render(
    <Provider store={store}>
        <HomePage/>
    </Provider>
    ,app);
}

initialise();
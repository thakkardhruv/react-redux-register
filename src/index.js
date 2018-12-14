import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {applyMiddleware, createStore} from 'redux';
import {Provider} from 'react-redux';
import AllReducers from './reducer';

const eventStore = applyMiddleware()(createStore);

ReactDOM.render(
<Provider store={eventStore(AllReducers)}>
    <App />
</Provider>, 
document.getElementById('root'));


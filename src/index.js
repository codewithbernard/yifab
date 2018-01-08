import 'materialize-css/dist/css/materialize.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import registerServiceWorker from './registerServiceWorker';
import ReduxPromise from 'redux-promise';
import App from './components/App';
import reducers from './reducers';

const store = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(<Provider store={store(reducers)}><App /></Provider>,document.querySelector('#root'));

registerServiceWorker();

import 'materialize-css/dist/css/materialize.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import registerServiceWorker from './registerServiceWorker';

import App from './components/App';
import reducers from './reducers';

const store = createStore(reducers);

ReactDOM.render(<Provider store={store}><App /></Provider>,document.querySelector('#root'));

registerServiceWorker();

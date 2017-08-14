import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import ConfigureStore from './store/index.js';
import { getGames } from './actions/game_actions';
import './index.css';
import App from './app';

const store = ConfigureStore();
store.dispatch(getGames());

ReactDOM.render(<Provider store={store}>
  <App />
  </Provider>, document.getElementById('root'));
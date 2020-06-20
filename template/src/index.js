import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { HelmetProvider } from 'react-helmet-async';
import { configureAppStore } from 'store/configureStore';

import 'bootstrap/dist/css/bootstrap.min.css';

import './locales/i18n';

import App from './app';
import * as serviceWorker from './serviceWorker';

const store = configureAppStore();

const ConnectedApp = ({ Component }) => (
  <Provider store={store}>
    <HelmetProvider>
      <React.StrictMode>
        <Component/>
      </React.StrictMode>
    </HelmetProvider>
  </Provider>
);

const render = (Component) => {
  ReactDOM.render(<ConnectedApp Component={Component} />, document.getElementById('root'));
}

if(module.hot){
  module.hot.accept(['./app', './locales/i18n'], () => {
    ReactDOM.unmountComponentAtNode(document.getElementById);
    const App = require('./app').App;
    render(App);
  });
}

render(App);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

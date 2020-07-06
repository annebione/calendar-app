import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import { compose } from "redux";
import { store, persistor } from './app/modules/store'
import * as serviceWorker from './serviceWorker';
import App from "./App";

// Redux
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react'

// Redux Chrome Devtool Extension
const composeEnhancers =
  process.env.NODE_ENV === "development"
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : null || compose;

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PersistGate>
  </Provider>, 
  document.getElementById('root')
);


serviceWorker.register();

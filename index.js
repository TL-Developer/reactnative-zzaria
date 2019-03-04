/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */
import React from 'react';
import { Provider } from 'react-redux'
import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';

import storeConfig from './src/redux-flow/index.store';

const store = storeConfig();

const Redux = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

AppRegistry.registerComponent(appName, () => Redux);

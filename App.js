/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { Provider } from 'react-redux';
import store from './src/store';
import AppEntry from './src/appEntry';

const App = () => {
  return (
    <Provider store={store}>
       <AppEntry />
    </Provider>
  );
}

export default App;
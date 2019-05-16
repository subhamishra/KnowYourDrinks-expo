/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { Provider } from 'react-redux';
import SoftDrinkList from './src/components/DrinkList';
import store from './src/config/store';

export default () => (
  <Provider store={ store }>
    <SoftDrinkList />
  </Provider>
)

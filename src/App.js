import React from 'react';
import { View, Text } from 'react-native';
import { createStore, combineReducers } from 'redux';
import { connect, Provider } from 'react-redux';
import { StackNavigator, addNavigationHelpers } from 'react-navigation';
import configureStore from './configureStore';
import AppNavigator from './screens/AppNavigator'

const AppWithNavigationState = connect(
  (state, { dispatch, nav }) => ({
    navigation: addNavigationHelpers({dispatch, state: nav})
  })
)(AppNavigator);

const AppWithNavigationStateWrapper = connect(
  state => ({
    nav: state.nav,
  })
)(AppWithNavigationState);

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <AppWithNavigationStateWrapper />
  </Provider>
)

export default App;

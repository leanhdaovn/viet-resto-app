import React from 'react';
import { View, Text } from 'react-native';
import { StackNavigator } from 'react-navigation';
import PlacesListScreen from './screens/PlacesListScreen';
import PlaceDetailsScreen from './screens/PlaceDetailsScreen';
import reducer from './rootReducer';

const App = StackNavigator({
  Home: { screen: PlacesListScreen },
  PlaceDetails: { screen: PlaceDetailsScreen }
});

export default App;

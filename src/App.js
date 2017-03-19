import React, { Component} from 'react';
import { View,Text } from 'react-native';
import { Provider } from 'react-redux';
import { StackNavigator } from 'react-navigation';
import configureStore from './configureStore';
import reducer from './rootReducer';
import StatusBar from './components/StatusBar';
import ChangeLocationActionButton from './components/ChangeLocationActionButton';
import PlacesList from './components/PlacesList';
import styles from './styles'

const store = configureStore();

const PlacesListScreen = ({navigation}) => (
  <Provider store={store} style={styles.container}>
    <View>
      <ChangeLocationActionButton />
      <PlacesList navigation={navigation} />
    </View>
  </Provider>
);

const PlaceDetailsScreen = ({navigation: { state: { params: { place } } }}) => (
  <View>
    <Text>{place.name}</Text>
    <Text>{place.rating}</Text>
  </View>
);

PlacesListScreen.navigationOptions = {
  title: 'Nearby Viet Restaurants',
};

PlaceDetailsScreen.navigationOptions = {
  title: 'Place Details',
};

const App = StackNavigator({
  Home: { screen: PlacesListScreen },
  PlaceDetails: { screen: PlaceDetailsScreen }
});

export default App;

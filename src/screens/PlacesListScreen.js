import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import configureStore from '../configureStore';
import ChangeLocationActionButton from '../components/ChangeLocationActionButton';
import PlacesList from '../components/PlacesList';
import styles from '../styles'

const store = configureStore();

const PlacesListScreen = ({navigation}) => (
  <Provider store={store} style={styles.container}>
    <View>
      <ChangeLocationActionButton />
      <PlacesList navigation={navigation} />
    </View>
  </Provider>
);

PlacesListScreen.navigationOptions = {
  title: 'Nearby Viet Restaurants',
};

export default PlacesListScreen;

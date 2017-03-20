import React from 'react';
import { List } from 'native-base';
import PlaceListItem from '../PlaceListItem';
import styles from '../../styles';

const ListViewWithLoading = ({navigation, places, loading}) => (
  <List dataArray={places} renderRow={(place) =>
    <PlaceListItem place={place} navigation={navigation} />
  } />
)

export default ListViewWithLoading;

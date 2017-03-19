import React, { Component} from 'react';
import { View, Text, ListView } from 'react-native';
import PlaceListItem from '../PlaceListItem';
import styles from '../../styles';

const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

const ListViewWithLoading = ({navigation, places, loading}) => (
  <View>
    { loading ? <Text style={styles.loadingText}>Loading...</Text> : null }
    <ListView
      enableEmptySections={true}
      dataSource={ds.cloneWithRows(places)}
      renderRow={(place) => (
        <PlaceListItem place={place} navigation={navigation} />
      )}
      styles={styles.listView}
    />
</View>
)

export default ListViewWithLoading;

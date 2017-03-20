import React from 'react';
import { Text } from 'react-native';
import { Left, Body, ListItem } from 'native-base';
import PlaceImage from '../PlaceImage';

const PlaceListItemPresentation = ({place, onPress}) => (
  <ListItem thumbnail style={{paddingTop: 20, paddingBottom: 20}} onPress={onPress}>
    <Left>
      <PlaceImage place={place}/>
    </Left>
    <Body>
      <Text>{place.name}</Text>
      <Text>{place.vicinity}</Text>
    </Body>
  </ListItem>
)

export default PlaceListItemPresentation;

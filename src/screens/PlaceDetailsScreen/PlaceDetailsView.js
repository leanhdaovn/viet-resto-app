import React from 'react';
import { View, Text, TouchableHighlight, Linking } from 'react-native';
import {
  Container, Header, Title, Content,
  Button, Left, Right, Body, Icon
} from 'native-base';
import styles from '../../styles'

const openPlaceOnMap = (place) => {
  Linking.canOpenURL('comgooglemaps://').then(supported => {
    if (!supported) {
      const appleMapsUrl = `maps://maps.apple.com/?q=${place.name}+${place.vicinity}`;
      Linking.openURL(appleMapsUrl).catch(err => console.error('An error occurred', err));
    } else {
      // const googleMapsUrl = `http://maps.google.com/maps?q=${place.name}+${place.vicinity}`;
      Linking.openURL(place.url).catch(err => console.error('An error occurred', err));
    }
  });
};

const PlaceDetailsView = ({navigation, place}) => (
  !place ?
  <Text>Loading...</Text> :
  <Container>
    <Header>
      <Left>
        <Button transparent>
          <Icon name='arrow-back' onPress={ () => navigation.goBack() }/>
        </Button>
      </Left>
      <Body>
        <Title>Details</Title>
      </Body>
      <Right />
    </Header>

    <Content>
      <View>
        <Text>{place.name}</Text>
        <Text>{place.formatted_address}</Text>
        <Text>Phone number: {place.international_phone_number}</Text>
        <Text>Rating: {place.rating}</Text>
        <Text>Website: {place.website}</Text>
        <Text>Opening Hours: {place.rating}</Text>
        <TouchableHighlight onPress={() => openPlaceOnMap(place)}>
          <View style={styles.li}>
            <Text>View On Map</Text>
          </View>
        </TouchableHighlight>
        <Text>Photos: {}</Text>
        <Text>Reviews: {}</Text>
      </View>
    </Content>
  </Container>
);

export default PlaceDetailsView;

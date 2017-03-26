import React from 'react';
import { View, Text, TouchableHighlight, Linking, Image } from 'react-native';
import {
  Container, Header, Title, Content,
  Button, Left, Right, Body, Icon,
  Spinner, ListItem
} from 'native-base';
import { Row, Grid } from 'react-native-easy-grid';
import PlaceImage from './PlaceImage';
import PlaceReviews from './PlaceReviews';
import styles from '../../styles';

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

const sampleImage = 'https://2.bp.blogspot.com/-J3saSwsHUs0/V78goqwWUII/AAAAAAABOOY/BDSLniQtwiIIAL_cBdZ_ml9dCX-f2O61gCLcB/s1600/01%2BSGE_7544%2BLittle%2BVietnam%2BRestaurant%2Band%2BCafe%2B%2540%2BGrandlink%2BSquare%2B%2528Near%2BPaya%2BLebar%2BMRT%2BStation%2529%2B%255BSingapore%255D%2B%2528Large%2529.JPG';

const themeColor = '#00CE9F';

const PlaceDetailsView = ({ navigation, place }) => (
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

    { place ?
    (<Content style={{ backgroundColor: '#fff' }}>
      <Grid>
        <Row>
          <PlaceImage place={place} style={{ resizeMode: 'cover', width: null, flex: 1, height: 200 }}/>
        </Row>
        <Row style={{ backgroundColor: themeColor, height: 80, padding: 10 }}>
          <View>
            <Text>{place.name}</Text>
            <Text>Rating: {place.rating}</Text>
          </View>
        </Row>
        <View style={{ padding: 10 }}>
          <ListItem icon onPress={() => openPlaceOnMap(place)}>
            <Left>
              <Icon name='ios-pin-outline' />
            </Left>
            <Body>
                <Text>{place.formatted_address}</Text>
            </Body>
            <Right/>
          </ListItem>
          <ListItem icon>
            <Left>
              <Icon name='ios-call-outline' />
            </Left>
            <Body>
              <Text>{place.international_phone_number}</Text>
            </Body>
          </ListItem>
          <ListItem icon>
            <Left>
              <Icon name='ios-globe-outline' />
            </Left>
            <Body>
              <Text>{place.website}</Text>
            </Body>
          </ListItem>
        </View>
        <PlaceReviews />
      </Grid>
    </Content>) :
    (<Spinner />)
    }
  </Container>
);

export default PlaceDetailsView;

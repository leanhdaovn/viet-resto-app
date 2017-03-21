import React from 'react';
import { View, Text } from 'react-native';
import {
  Container, Header, Title, Content, Footer, FooterTab,
  Button, Left, Right, Body, Icon,
  ListItem, Thumbnail
} from 'native-base';
import ChangeLocationActionButton from '../components/ChangeLocationActionButton';
import PlacesList from '../components/PlacesList';

const PlacesListScreen = ({navigation}) => (
  <Container>
    <Header>
      <Body>
        <Title>Nearby Viet Restaurants</Title>
      </Body>
    </Header>

    <Content>
      <PlacesList navigation={navigation} />
    </Content>

    <Footer>
      <FooterTab>
        <ChangeLocationActionButton />
      </FooterTab>
    </Footer>
  </Container>
);

export default PlacesListScreen;

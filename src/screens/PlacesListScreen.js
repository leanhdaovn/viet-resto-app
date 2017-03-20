import React from 'react';
import { View, Text } from 'react-native';
import {
  Container, Header, Title, Content, Footer, FooterTab,
  Button, Left, Right, Body, Icon,
  ListItem, Thumbnail
} from 'native-base';
import { Provider } from 'react-redux';
import configureStore from '../configureStore';
import ChangeLocationActionButton from '../components/ChangeLocationActionButton';
import PlacesList from '../components/PlacesList';

const store = configureStore();

const PlacesListScreen = ({navigation}) => (
  <Provider store={store}>
    <Container>
      <Header>
        <Body>
          <Title>Viet Resto</Title>
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
  </Provider>
);

export default PlacesListScreen;

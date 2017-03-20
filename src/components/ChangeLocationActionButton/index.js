import React from 'react';
import { connect } from 'react-redux';
import { Text } from 'react-native';
import RNGooglePlaces from 'react-native-google-places';
import { Button } from 'native-base';
import {
  createChangeLocationStartAction,
  createChangeLocationSuccessAction,
  createChangeLocationErrorAction
} from './actions';

const ChangeLocationActionButtonView = ({onPress}) => (
  <Button success full onPress={onPress}>
    <Text style={{color: '#fff'}}>Change Location</Text>
  </Button>
);

const openSearchModal = () => dispatch => {
  dispatch(createChangeLocationStartAction());
  RNGooglePlaces.openAutocompleteModal()
  .then(place => {
    dispatch(createChangeLocationSuccessAction({place}))
  })
  .catch(error => { dispatch(createChangeLocationSuccessAction(error)) });
}

const mapDispatchToProps = (dispatch) => ({
  title: 'Change Location',
  onPress: () => dispatch(openSearchModal())
});

const ChangeLocationActionButton = connect(null, mapDispatchToProps)(ChangeLocationActionButtonView);

export default ChangeLocationActionButton;

import React from 'react';
import { connect } from 'react-redux';
import PlaceListItemPresentation from './PlaceListItemPresentation';
import { clearCurrentPlaceAction } from '../../screens/PlaceDetailsScreen/actions';

const PlaceListItem = connect(
  (state, { navigation, place }) => ({
    onPress: () => navigation.navigate('PlaceDetails', { place })
  })
)(PlaceListItemPresentation);

export default PlaceListItem;

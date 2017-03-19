import React from 'react';
import { connect } from 'react-redux';
import PlaceListItemPresentation from './PlaceListItemPresentation';

const mapStateToProps = (state, { navigation, place }) => ({
  onPress: () => navigation.navigate('PlaceDetails', { place })
});

const PlaceListItem = connect(mapStateToProps)(PlaceListItemPresentation);

export default PlaceListItem;

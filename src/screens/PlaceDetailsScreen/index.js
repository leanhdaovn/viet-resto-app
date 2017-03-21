import React from 'react';
import { connect } from 'react-redux';
import PlaceDetailsView from './PlaceDetailsView'
import {
  loadPlace
} from './actions'
import { currentPlaceSelector } from './selectors'

const PlaceDetails = connect(
  state => ({
    place: currentPlaceSelector(state)
  })
)(PlaceDetailsView);

const PlaceDetailsScreen = connect(
  null,
  (dispatch, { navigation: { state: { params: { place } } } }) => {
    console.log(place);
    return {
      loadPlace: dispatch(loadPlace(place.place_id))
    }
  }
)(PlaceDetails);

export default PlaceDetailsScreen;

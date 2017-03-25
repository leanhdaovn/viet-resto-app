import React from 'react';
import { connect } from 'react-redux';
import PlaceDetailsView from './PlaceDetailsView';
import {
  clearCurrentPlaceAction,
  loadPlace
} from './actions';
import { currentPlaceSelector } from './selectors';
import { SamplePlace } from '../../SamplePlaces';
import get from 'lodash/fp/get';

const PlaceDetails = connect(
  state => ({
    place: currentPlaceSelector(state) //|| SamplePlace
  })
)(PlaceDetailsView);

const PlaceDetailsScreen = connect(
  null,
  (dispatch, { navigation }) => {
    const place = get('state.params.place')(navigation) || {}
    return {
      clearPlace: dispatch(clearCurrentPlaceAction()),
      loadPlace: setTimeout(() => dispatch(loadPlace(place.place_id)), 100)
    }
  }
)(PlaceDetails);

export default PlaceDetailsScreen;

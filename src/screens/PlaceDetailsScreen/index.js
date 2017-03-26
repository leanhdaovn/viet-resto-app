import React from 'react';
import { connect } from 'react-redux';
import PlaceDetailsView from './PlaceDetailsView';
import {
  createLoadPlaceSuccessAction,
  loadPlace
} from './actions';
import { currentPlaceSelector } from './selectors';
import { SamplePlace } from '../../SamplePlaces';
import get from 'lodash/fp/get';

const getPlaceIfCorrect = (state, placeId) => {
  const place = currentPlaceSelector(state);
  console.log('place', placeId, place)
  if (place && placeId){
    if (place.place_id == placeId){
      return place;
    } else {
      return null;
    }
  } else {
    return place; // SamplePlace
  }
};

const setDefaultPlace = (dispatch, placeId) => {
  if (placeId) {
    return;
  }
  dispatch(createLoadPlaceSuccessAction({place: SamplePlace}));
};

const PlaceDetails = connect(
  (state, {place}) => ({
    place: getPlaceIfCorrect(state, place.place_id) //|| SamplePlace
  }),
  (dispatch, {place}) => ({
    setDefaultPlace: setDefaultPlace(dispatch, place.place_id)
  })
)(PlaceDetailsView);

const PlaceDetailsScreen = connect(
  null,
  (dispatch, { navigation }) => {
    const place = get('state.params.place')(navigation) || {}
    return {
      loadPlace: place.place_id ? dispatch(loadPlace(place.place_id)) : null,
      place
    }
  }
)(PlaceDetails);

export default PlaceDetailsScreen;

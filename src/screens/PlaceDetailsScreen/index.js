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

const getPlaceIfCorrect = (state, placeId) => {
  const place = currentPlaceSelector(state);
  if (place && place.place_id == placeId){
    return place
  }
  return null;
}

const PlaceDetails = connect(
  (state, {place}) => ({
    place: getPlaceIfCorrect(state, place.place_id) //|| SamplePlace
  })
)(PlaceDetailsView);

const PlaceDetailsScreen = connect(
  null,
  (dispatch, { navigation }) => {
    const place = get('state.params.place')(navigation) || {}
    return {
      loadPlace: dispatch(loadPlace(place.place_id)),
      place
    }
  }
)(PlaceDetails);

export default PlaceDetailsScreen;

import { createAction } from 'redux-actions';
import { SamplePlace } from '../../SamplePlaces';

export const LOAD_PLACE_START_ACTION = 'currentPlace/LOAD_PLACE_START_ACTION'
export const LOAD_PLACE_SUCCESS_ACTION = 'currentPlace/LOAD_PLACE_SUCCESS_ACTION'
export const LOAD_PLACE_ERROR_ACTION = 'currentPlace/LOAD_PLACE_ERROR_ACTION'
export const CLEAR_CURRENT_PLACE_ACTION = 'currentPlace/CLEAR_CURRENT_PLACE_ACTION'

export const createLoadPlaceStartAction = createAction(LOAD_PLACE_START_ACTION);
export const createLoadPlaceSuccessAction = createAction(LOAD_PLACE_SUCCESS_ACTION);
export const createLoadPlaceErrorAction = createAction(LOAD_PLACE_ERROR_ACTION);
export const clearCurrentPlaceAction = createAction(CLEAR_CURRENT_PLACE_ACTION);

let placeCache = [];

export const loadPlace = placeId => dispatch => {
  // dispatch(createLoadPlaceSuccessAction({ place: SamplePlace }));
  // return;

  // dispatch(clearCurrentPlaceAction());

  let place = placeCache[placeId];

  if (place) {
    dispatch(createLoadPlaceSuccessAction({ place }));
    return;
  }

  const url = `https://maps.googleapis.com/maps/api/place/details/json?placeid=${placeId}&key=AIzaSyAN0XX-AZzMOKnssHEBjnh8u-QwP9SqTLc`;

  fetch(url, {method: "GET"})
    .then((response) => response.json())
    .then((responseData) => {
      place = responseData.result;
      placeCache[placeId] = place;
      dispatch(createLoadPlaceSuccessAction({ place }));
    })
    .done();
};

export default {
  loadPlace,
  createLoadPlaceStartAction,
  createLoadPlaceSuccessAction,
  createLoadPlaceErrorAction,
  clearCurrentPlaceAction
};

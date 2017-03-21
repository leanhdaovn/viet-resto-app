import { createSelector } from 'reselect';
import get from 'lodash/fp/get';

export const placesSelector = state => get('app.nearbyPlaces.places')(state);
export const loadPlacesStateSelector = state => get('app.nearbyPlaces.loadPlacesState')(state);
export const placesLoadingSelector = createSelector(
  loadPlacesStateSelector,
  loadPlacesState => (loadPlacesState == 'started')
)

export default {
  placesSelector,
  loadPlacesStateSelector,
  placesLoadingSelector
};

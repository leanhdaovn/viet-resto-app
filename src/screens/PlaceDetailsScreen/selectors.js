import { createSelector } from 'reselect';
import get from 'lodash/fp/get';

export const currentPlaceSelector = state => get('app.currentPlace.place')(state);
export const currentPlaceReviewsSelector = state => get('app.currentPlace.place.reviews')(state);

export default {
  currentPlaceSelector,
  currentPlaceReviewsSelector,
};

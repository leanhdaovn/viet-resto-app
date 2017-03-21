import { createSelector } from 'reselect';
import get from 'lodash/fp/get';

export const currentPlaceSelector = state => get('app.currentPlace.place')(state);

export default {
  currentPlaceSelector
};

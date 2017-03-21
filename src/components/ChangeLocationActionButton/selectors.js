import get from 'lodash/fp/get';

export const selectedLocationSelector = state => get('app.location.selectedLocation')(state);

export default {
  selectedLocationSelector
};

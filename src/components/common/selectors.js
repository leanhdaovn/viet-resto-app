import get from 'lodash/fp/get';

export const googleApiKeySelector = state => get('app.api.googleApiKey')(state);

export default {
  googleApiKeySelector
};

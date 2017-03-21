import { handleActions } from 'redux-actions';
import {
  createLoadPlaceStartAction,
  createLoadPlaceSuccessAction,
  createLoadPlaceErrorAction
} from './actions';

const reducers = handleActions({
  [createLoadPlaceStartAction]: (state) => ({
    ...state,
    loadPlaceState: 'started'
  }),
  [createLoadPlaceSuccessAction]: (state, action) => {
    return {
      loadPlaceState: 'finished',
      place: action.payload.place
    }
  },
  [createLoadPlaceErrorAction]: (state) => ({
    ...state,
    loadPlaceState: 'finished'
  })
}, {
  loadPlaceState: 'finished',
  places: null
});

export default reducers;

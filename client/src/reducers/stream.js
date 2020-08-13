import _ from 'lodash';

import { types } from '../actions';

const INITIAL_STATE = {};

const stream = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.CLEAR_STREAM:
      return _.omit(state, action.payload);
    case types.SET_STREAM:
      return {
        ...state,
        [action.payload.id]: action.payload
      };
    case types.SET_STREAMS:
      return {
        ...state,
        ..._.mapKeys(action.payload, 'id')
      };
    default:
      return state;
  }
};

export default stream;

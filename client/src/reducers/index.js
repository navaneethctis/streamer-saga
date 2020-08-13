import { combineReducers } from 'redux';
import { reducer } from 'redux-form';

import authentication from './authentication';
import stream from './stream';

const reducers = combineReducers({
  authentication,
  form: reducer,
  stream
});

export default reducers;

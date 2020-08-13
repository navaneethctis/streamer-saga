export const types = {
  CLEAR_STREAM: 'CLEAR_STREAM',
  CREATE_STREAM: 'CREATE_STREAM',
  DESTROY_STREAM: 'DESTROY_STREAM',
  EDIT_STREAM: 'EDIT_STREAM',
  INDEX_STREAM: 'INDEX_STREAM',
  SHOW_STREAM: 'SHOW_STREAM',
  SET_STREAM: 'SET_STREAM',
  SET_STREAMS: 'SET_STREAMS',
  SIGN_IN: 'SIGN_IN',
  SIGN_OUT: 'SIGN_OUT'
};

export const clearStream = id => ({
  payload: id,
  type: types.CLEAR_STREAM
});

export const createStream = stream => ({
  payload: stream,
  type: types.CREATE_STREAM
});

export const deleteStream = id => ({
  payload: id,
  type: types.DESTROY_STREAM
});

export const readStream = id => ({
  payload: id,
  type: types.SHOW_STREAM
});

export const readStreams = () => ({
  type: types.INDEX_STREAM
});

export const setStream = stream => ({
  payload: stream,
  type: types.SET_STREAM
});

export const setStreams = streams => ({
  payload: streams,
  type: types.SET_STREAMS
});

export const signIn = userId => ({
  payload: userId,
  type: types.SIGN_IN
});

export const signOut = () => ({
  type: types.SIGN_OUT
});

export const updateStream = (id, updates) => ({
  payload: { id, updates },
  type: types.EDIT_STREAM
});

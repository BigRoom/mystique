import { createReducer } from 'utils';
import { RECEIVE_DEFAULT } from 'constants/api';

export default createReducer({
  [RECEIVE_DEFAULT]: (state, payload) => ({ ...state, server: payload.server })
}, {});

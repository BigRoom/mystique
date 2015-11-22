import { createReducer } from 'utils';
import * as C from 'constants/giphy';

export const giphy = createReducer({
  [C.REQUEST_GIPHY_SUCCESS]: (state, payload) => [...state, payload]
}, []);

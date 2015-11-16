import createReducer from 'utils/createReducer';
import { INCREMENT, INCREMENT_FIVE, DECREMENT, DECREMENT_FIVE } from 'constants/counter';

export default createReducer({
  [INCREMENT]: (state) => state + 1,
  [DECREMENT]: (state) => state - 1,
  [INCREMENT_FIVE]: (state) => state + 5,
  [DECREMENT_FIVE]: (state) => state - 5
}, 0);

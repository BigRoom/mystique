import { INCREMENT, INCREMENT_FIVE, DECREMENT } from 'constants/counter';

export default {
  increment: () => ({ type: INCREMENT }),
  increment_five: () => ({ type: INCREMENT_FIVE }),
  decrement: () => ({ type: DECREMENT })
};

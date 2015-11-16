import { INCREMENT, INCREMENT_FIVE, DECREMENT, DECREMENT_FIVE } from 'constants/counter';

export default {
  increment: () => ({ type: INCREMENT }),
  increment_five: () => ({ type: INCREMENT_FIVE }),
  decrement: () => ({ type: DECREMENT }),
  decrement_five: () => ({ type: DECREMENT_FIVE })
};

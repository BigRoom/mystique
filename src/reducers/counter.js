import { INCREMENT, INCREMENT_FIVE, DECREMENT, DECREMENT_FIVE } from 'constants/counter';

export default function counter(state = 0, action) {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    case INCREMENT_FIVE:
      return state + 5;
    case DECREMENT_FIVE:
      return state - 5;
    default:
      return state;
  };
};

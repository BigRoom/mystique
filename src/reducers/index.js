import { combineReducers } from 'redux';
import { messages, channels } from 'reducers/chat';
import { routerStateReducer } from 'redux-router';

export default combineReducers({
  router: routerStateReducer,
  messages,
  channels
});

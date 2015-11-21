import { combineReducers } from 'redux';
import { routeReducer } from 'redux-simple-router';
import { messages, channels } from 'reducers/chat';
import { giphy } from 'reducers/giphy';

export default combineReducers({
  routing: routeReducer,
  messages,
  channels,
  giphy
});

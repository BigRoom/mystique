import { combineReducers } from 'redux';
import { messages, channels } from 'reducers/chat';
import { giphy } from 'reducers/giphy'
import { routeReducer } from 'utils/redux-simple-router';

export default combineReducers({
  routing: routeReducer,
  messages,
  channels,
  giphy
});

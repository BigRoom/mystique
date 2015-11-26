import { combineReducers } from 'redux';
import { routeReducer } from 'redux-simple-router';
import { messages, channels } from 'reducers/chat';
import api from 'reducers/api';

export default combineReducers({
  routing: routeReducer,
  messages,
  channels,
  api
});

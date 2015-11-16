export { default as counter } from 'reducers/counter';
import { combineReducers } from 'redux';
import counter from 'reducers/counter';
import { messages, channels } from 'reducers/chat';

export default combineReducers({
  counter,
  messages,
  channels
});

export { default as counter } from 'reducers/counter';
import { combineReducers } from 'redux';
import counter from 'reducers/counter';

export default combineReducers({
  counter
});

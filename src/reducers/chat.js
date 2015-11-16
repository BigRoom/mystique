import createReducer from 'utils/createReducer';
import { MESSAGE_RECEIVED, CHANNEL_RECEIVED } from 'constants/chat';

export const messages = createReducer({
  [MESSAGE_RECEIVED]: (state, action) => [...state, action.message.contents]
}, [])

export const channels = createReducer({
  [CHANNEL_RECEIVED]: (state, action) => [...state, ...action.message.contents]
},[])

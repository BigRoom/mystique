import createReducer from 'utils/createReducer';
import { MESSAGE_RECEIVED, CHANNEL_RECEIVED, SEND_MESSAGE } from 'constants/chat';

export const messages = createReducer({
  [MESSAGE_RECEIVED]: (state, action) => [...state, action.message.contents],
  [SEND_MESSAGE]: (state, action) => [...state, ...action.message]
}, [])

export const channels = createReducer({
  [CHANNEL_RECEIVED]: (state, action) => [...state, ...action.message.contents]
}, [])

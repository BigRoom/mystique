import { createReducer } from 'utils';
import { MESSAGE_RECEIVED, CHANNEL_RECEIVED, SEND_MESSAGE } from 'constants/chat';

export const messages = createReducer({
  [MESSAGE_RECEIVED]: (state, payload) => [...state, payload],
  [SEND_MESSAGE]: (state, payload) => [...state, payload]
}, [])

export const channels = createReducer({
  [CHANNEL_RECEIVED]: (state, action) => [...state, action.message.contents]
}, [])

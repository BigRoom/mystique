import { createReducer } from 'utils';
import { MESSAGE_RECEIVED, CHANNEL_RECEIVED, SEND_MESSAGE, SENT_MESSAGE } from 'constants/chat';

export const messages = createReducer({
  [MESSAGE_RECEIVED]: (state, payload) => [...state, payload],
  [SEND_MESSAGE]: (state, payload) => [...state, payload],
  [SENT_MESSAGE]: (state, payload) => [
    ...state.slice(0, payload.index),
    {
      ...state[payload.index],
      sent: true
    },
    ...state.slice(payload.index + 1)
  ]
}, [])

export const channels = createReducer({
  [CHANNEL_RECEIVED]: (state, action) => [...state, action.message.contents]
}, [])

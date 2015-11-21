import { MESSAGE_RECEIVED, CHANNEL_RECEIVED, RAW_MSG, SEND_MESSAGE } from 'constants/chat';

export default {
  message_received: (message) => ({ type: MESSAGE_RECEIVED, payload: { ...message }}),
  channel_received: (message) => ({ type: CHANNEL_RECEIVED, payload: { ...message }}),
  raw_msg: (message) => ({ type: RAW_MSG, payload: { message }}),
  send_message: (message) => ({ type: SEND_MESSAGE, payload: {
      from: 'ajb',
      content: message,
      time: Date.now(),
      channel: "#something",
      host: "192.168.1.1"
  }})
};

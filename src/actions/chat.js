import * as C from 'constants/chat';

export default {
  message_received: (message) => ({ type: C.MESSAGE_RECEIVED, payload: { ...message }}),
  channel_received: (message) => ({ type: C.CHANNEL_RECEIVED, payload: { ...message }}),
  raw_msg: (message) => ({ type: C.RAW_MSG, payload: { message }}),
  send_message: (message) => ({ type: C.SEND_MESSAGE, payload: {
      from: 'ajb',
      content: message,
      time: Date.now(),
      channel: "#something",
      host: "192.168.1.1"
  }})
};

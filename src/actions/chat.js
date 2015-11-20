import { MESSAGE_RECEIVED, CHANNEL_RECEIVED, RAW_MSG, SEND_MESSAGE } from 'constants/chat';

export default {
  message_received: (message) => ({ type: MESSAGE_RECEIVED, message }),
  channel_received: (message) => ({ type: CHANNEL_RECEIVED, message }),
  raw_msg: (message) => ({ type: RAW_MSG, message }),
  send_message: (message) => ({ type: SEND_MESSAGE, message: {
      from: 'ajb',
      content: message,
      time: Date.now(),
      channel: "#something",
      host: "192.168.1.1"
  }})
};

import { MESSAGE_RECEIVED, CHANNEL_RECEIVED, RAW_MSG } from 'constants/chat';

export default {
  message_received: (message) => ({ type: MESSAGE_RECEIVED, message }),
  channel_received: (message) => ({ type: CHANNEL_RECEIVED, message }),
  raw_msg: (message) => ({ type: RAW_MSG, message })
};

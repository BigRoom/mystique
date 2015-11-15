import { MESSAGE_RECEIVED } from 'constants/websocket';

export default {
  message_received: (message) => ({ type: MESSAGE_RECEIVED, message })
}

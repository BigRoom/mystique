export class Socket {
  constructor(host) {
    this.ircHost = host + ":6697";
    this.ws = new WebSocket('ws://'+host+'/api/ws');

    this.ws.onOpen(() => {
      // TODO : Ask @paked about what to send when conenction is established
      this.send({});
    });
  }

  send(name, data) {
    this.ws.send({
      name,
      ...data
    });
  }
};

const WitConverse = require('./wit-converse.js');
const WitClient = require('./wit-client.js');

exports.routes = [];

exports.routes.push({
  method: 'GET',
  path: '/',
  handler: (request, reply) => {
    return reply.file('index.html');
  }
});

exports.routes.push({
  method: 'POST',
  path: '/converse',
  config: {
    plugins: {
      websocket: {
        only: true,
        create: () => {
            /* no-op */
        },
        connect: (wss, ws) => {
          ws.send(JSON.stringify({ cmd: 'WELCOME' }));
          this.to = setInterval(() => {
            ws.send(JSON.stringify({ cmd: 'PING' }));
          }, 5000);
        },
        disconnect: () => {
          if (this.to !== null) {
            clearTimeout(this.to);
            this.to = null;
          }
        }
      }
    }
  },
  handler: (request) => {
    // TODO: need session id to be passed through here
    const client = WitClient(request.websocket().ws);
    WitConverse(client, request.payload.text);
  }
});

const WitConverse = require('./wit-converse.js');
const WitClient = require('./wit-client.js');

let client;

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
    plugins: { websocket: { only: true } }
  },
  handler: (request) => {
    // TODO: websocket per session
    if (!client) {
      client = WitClient(request.websocket().ws);
    }
    WitConverse(client, request.payload.text);
  }
});

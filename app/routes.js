exports.routes = [];

exports.routes.push({
  method: 'GET',
  path: '/',
  handler: (request, reply) => {
    return reply.file('index.html');
  }
});

exports.routes.push({
  method: 'GET',
  path: '/converse',
  handler: (request, reply) => {
    // TODO: call node-wit and include function
    return reply(request.query.q);
  }
});

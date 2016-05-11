exports.routes = [];

exports.routes.push({
  method: 'GET',
  path: '/converse',
  handler: (request, reply) => {
    reply('SPEAK TO ME');
  }
});

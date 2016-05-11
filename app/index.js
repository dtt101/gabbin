'use strict';

const Hapi = require('hapi');
const Hoek = require('hoek');

const internals = {
  config: {
    isTest: false,
    port: 3000,
    path: './.temp'
  }
};

exports.init = (config, next) => {

  const options = Hoek.applyToDefaults(internals.config, config);

  const server = new Hapi.Server();

  server.connection({ port: options.port, host: '127.0.0.1' });

  server.route(require('./routes').routes);

  server.start(err => {
    if (err) {
      throw err;
    }
    return next(err, server);
  });
};

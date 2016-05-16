'use strict';

const Path = require('path');
const Hapi = require('hapi');
const Hoek = require('hoek');
const Inert = require('inert');
const HAPIWebSocket = require('hapi-plugin-websocket');

const internals = {
  config: {
    isTest: false,
    port: 3000,
    path: './.temp'
  }
};

exports.init = (config, next) => {

  const options = Hoek.applyToDefaults(internals.config, config);

  const server = new Hapi.Server({
    connections: {
      routes: {
        files: {
          relativeTo: Path.join(__dirname, 'public')
        }
      }
    }
  });

  server.connection({ port: options.port, host: '127.0.0.1' });

  server.register([Inert, HAPIWebSocket], () => {});

  server.route(require('./routes').routes);

  server.start(err => {
    if (err) throw err;
    return next(err, server);
  });
};

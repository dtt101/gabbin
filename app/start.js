'use strict';

require('dotenv').config();

const Server = require('./index.js');

Server.init({ port: process.env.PORT, path: './.data' }, (err, server) => {
  if (err) throw err;
  console.log(`Server started at: ${server.info.uri}`);
});

'use strict';

require('dotenv').config();

const Server = require('./index.js');
const port = process.env.PORT || 1337;

Server.init({ port, path: './.data' }, (err, server) => {
  if (err) throw err;
  console.log(`Server started at: ${server.info.uri}`);
});

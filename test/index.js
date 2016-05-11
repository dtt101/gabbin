const Hapi = require('hapi');
const Code = require('code');
const Lab = require('lab');
const RimRaf = require('rimraf');

const App = require('../app');

const lab = exports.lab = Lab.script();

const describe = lab.experiment;
const it = lab.test;
const expect = Code.expect;
const afterEach = lab.afterEach;

const levelPath = './.temp';

describe('server', () => {
  afterEach(done => {
    RimRaf.sync('./.temp');
    done();
  });

  it('starts and returns a server object', { parallel: false}, done => {
    App.init({ port: 5000, path: levelPath, isTest: true }, (err, server) => {
      expect(err).to.not.exist();
      expect(server).to.be.instanceof(Hapi.Server);

      server.stop(done);
    });
  });

  it('runs on the provided port', { parallel: false }, done => {
    App.init({ port: 5000, path: levelPath, isTest: true }, (err, server) => {
      expect(err).to.not.exist();
      expect(server.info.port).to.equal(5000);

      server.stop(done);
    });
  });
});

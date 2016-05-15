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

describe('chat interface', () => {
  afterEach(done => {
    RimRaf.sync(levelPath);
    done();
  });

  it('returns a root page', { parallel: false }, done => {
    App.init({port: 0, path: levelPath, isTest: true}, (err, server) => {
      server.inject({ method: 'GET', url: '/'}, response => {
        expect(response.statusCode).to.equal(200);
        done();
      });
    });
  });

  it('shows a chat textbox and send button', { parallel: false }, done => {
    App.init({port: 0, path: levelPath, isTest: true}, (err, server) => {
      server.inject({ method: 'GET', url: '/'}, response => {
        expect(response.result).to.include('Talk');
        done();
      });
    });
  });
});

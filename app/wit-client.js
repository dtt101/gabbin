const {Wit, log} = require('node-wit');

const firstEntityValue = require('../lib/first-entity-value.js');
const mdb = require('../lib/mdb.js');

module.exports = (ws) => {
  const actions = {
    send(request, response) {
      const {sessionId, context, entities} = request;
      const {text, quickreplies} = response;
      return new Promise(function(resolve, reject) {
        if (context.movies) {
          response.movies = context.movies;
        }
        ws.send(JSON.stringify({response}));
        return resolve();
      });
    },
    findMovieByGenre({sessionId, context, text, entities}) {
      return new Promise((resolve, reject) => {
        mdb.getMoviesForGenre(text).then(result => {
          context.movies = result;
          return resolve(context);
        });
      });
    }
  };
  return new Wit({
    accessToken: process.env.WIT_API_KEY, 
    actions, 
    logger: new log.Logger(log.INFO)
  });
};

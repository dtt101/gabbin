const Logger = require('node-wit').Logger;
const levels = require('node-wit').logLevels;
const Wit = require('node-wit').Wit;

// TODO: move this out into a lib file
const firstEntityValue = (entities, entity) => {
  const val = entities && entities[entity] &&
    Array.isArray(entities[entity]) &&
    entities[entity].length > 0 &&
    entities[entity][0].value
  ;
  if (!val) {
    return null;
  }
  return typeof val === 'object' ? val.value : val;
};

module.exports = (ws) => {
  const actions = {
    say(sessionId, context, message, cb) {
      ws.send(JSON.stringify({ msg: message }));
      cb();
    },
    merge(sessionId, context, entities, message, cb) {
      // Retrieve the show entity and store it into a context field
      console.log(entities);
      const show = firstEntityValue(entities, 'show');
      if (show) {
        context.show = show;
      }
      cb(context);
    },
    error(sessionId, context, error) {
      console.log(error.message);
    },
    runTests(sessionId, context, cb) {
      // TODO: run mmf test
      context.resultMsg = 'Looks like you are missing a microfilter, you can just get a new one from here: https://accessories.sky.com/catalogue/products/sky-microfilter?irct=sts';
      cb(context);
    }
  };

  const logger = new Logger(levels.DEBUG);

  const token = process.env.WIT_API_KEY;
  return new Wit(token, actions, logger);
};

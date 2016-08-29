const converse = (client, message) => {
  const sessionId = 'my-user-session-42'; // TODO: move this out
  const context0 = {};

  client.runActions(sessionId, message, context0)
  .catch((e) => {
    console.log('Oops! Got an error: ' + e);
  });
};

module.exports = converse;

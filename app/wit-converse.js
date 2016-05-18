const converse = (client, message) => {
  const session = 'my-user-session-42'; // TODO: move this out
  const context0 = {};
  client.runActions(session, message, context0, (e) => {
    if (e) {
      console.log('Oops! Got an error: ' + e);
      return 'Error';
    }
  });
};

module.exports = converse;

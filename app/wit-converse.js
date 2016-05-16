const converse = (client, message) => {
  const session = 'my-user-session-42'; // TODO: move this out
  const context0 = {};
  client.runActions(session, message, context0, (e, context1) => {
    if (e) {
      console.log('Oops! Got an error: ' + e);
      return 'Error';
    }
    console.log('>>>>>>>>>> The session state is now: ' + JSON.stringify(context1));
  });
};

module.exports = converse;

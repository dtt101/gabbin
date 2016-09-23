# gabbin

gabbin is a chat api client for wit.ai

## Setup

Requires nvm and npm

```
nvm use
npm install
```

Create .env file:

```
WIT_API_KEY=xxxx
MDB_API_KEY=xxxx
```

## Routes

### Converse

```
converse?v=20160330&session_id=123abc&q=weather%20in%20Brussels
```

#### Arguments

 * `v`: version of the api
 * `session_id`: A specific ID of your choosing representing the session your query belongs to
 * `q`: the message from the user

#### Response (json)

 * `msg`: the message response
 * `confidence`: represents the confidence level of the next step, between 0 (low) and 1 (high).

#### UI

```
/
```

Visit root URL for test chat interface

# TODO

 * Wire to entity api
 * get recent watched movie
 * do age range check
 * Update docs to reflects websocket interface
 * Update tests to reflect websocket usage
 * Session id needs to be real

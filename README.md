# gabbin

gabbin is a chat api client for wit.ai

## Setup

Requires nvm and npm

```
nvm use
npm install
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

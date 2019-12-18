const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const session = require('express-session');
const uuid = require('uuid');
const nunjucks = require('nunjucks');
const path = require('path');
const webAuthN = require('webauthn');
const webauthn = new webAuthN({
  origin:'http://localhost:8080',
  usernameField: 'username',
  userFields: {
    username:'username',
    name:'displayName',
    userID: 'userID'
  }, rpName: "Rita's WebAuthN"
});

const port = process.env.port || 8080;

module.exports={
express:express,
app:app,
bodyParser:bodyParser,
session:session,
nunjucks:nunjucks,
path:path,
webauthn:webauthn,
port:port,
uuid:uuid
}

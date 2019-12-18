const webAuthServer = require('./webAuthServ.js');
const scss = require('./styles/main.scss');

webAuthServer.app.use(session({
  secret: webAuthServer.port,
  resave: false,
  saveUninitialized: true,
  genid: (req)=>{
    return webAuthServer.uuid();
  }
}));

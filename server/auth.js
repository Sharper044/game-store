module.exports={
  login: (req, res) => {
    const db = req.app.get('db');
    let { session } = req;
    let { username, password } = req.body;

    db.login([ username ])
      .then( userRes => {
        if ( userRes[0].password === password ){
          session.user.id = userRes[0].id;
          session.user.username = userRes[0].username;
          res.status(200).send( session.user );
        }
        else {
          res.status(401).send('Unauthorized.');
        }
      })
      .catch(() => res.status( 500 ).send());
  },

  register: (req, res) => {
    const db = req.app.get('db');
    let { session } = req;
    let { username, password } = req.body;

    db.register([ username, password ])
      .then(userRes => {
        session.user.id = userRes[0].id;
        session.user.username = userRes[0].username;
        res.status(200).send( session.user );
      })
      .catch(() => res.status( 500 ).send());
  },

  logout: (req, res) => {
    req.session.destroy();
    res.status(200).send(req.session);
  },

  checkForSession: (req, _res, next) => {
    if( !req.session.user ){
      req.session.user = { 
        id: Math.round(Math.random() * 1000) * -1,
        username: ''
      };
    }
    next();
  },

  checkAuthentication: ( req, res, next) => {
    if( req.session.user.id < 0 ){
      res.status(403).send('Unauthorized... Please login.');
    }
    next();
  },
}
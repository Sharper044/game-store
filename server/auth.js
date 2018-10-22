// This set of functions are used for handling the user data.

module.exports={
  // Login works by taking the current session, and the username/password provided and checking if the username and password match what is in the database. If so the session is updated with the user info. If not an error is sent. The client should also after a successful login ping the mergeCartLogin endpoint. 
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

  // Register works by taking the current session, and the username/password provided and then saving that into the database. The session is updated with the user info and sent back to the client. The client should also then ping the mergeCartRegister endpoint. 
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

  // Logout simply destroys the current session.
  logout: (req, res) => {
    req.session.destroy();
    res.status(200).send(req.session);
  },

  // This is used to check for a current session on the client, and if there is none, to create it. The ids on users not in the database are negative and random to prevent overlap. This allows for an easy check of their status and lets the cart features work.
  checkForSession: (req, _res, next) => {
    if( !req.session.user ){
      req.session.user = { 
        id: Math.round(Math.random() * 1000) * -1,
        username: ''
      };
    }
    next();
  },

  // For any endpoint that needs a user to be logged in, this should be used as middleware. It checks to see if they are logged in by seeing if the user id on their session is non-negative.
  checkAuthentication: ( req, res, next) => {
    if( req.session.user.id < 0 ){
      res.status(403).send('Unauthorized... Please login.');
    }
    next();
  },
}
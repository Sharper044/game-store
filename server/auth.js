const dotenv = require('dotenv');
dotenv.config({ path: '.env.local' });

module.exports={
  authStrategyFunction: (accessToken, refreshToken, extraParams, profile, done) => {
    const db = app.get('db');
    const { sub, email } = profile._json;

    db.find_user([sub])
      .then(res => {
        if (res.length) {
          done(null, res[0].user_id);
        } else {
          db.register([sub, email])
            .then(registeredUser => {
              done(null, registeredUser[0].user_id);
            });
        }
      });
  },
  getUser: (req, res) => {
    if (!req.user) {
      res.status(404).redirect(process.env.FAILURE_REDIRECT);
    } else {
      res.status(200).send(req.user);
    }
  }
}
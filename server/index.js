const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const express = require('express');
const session = require('express-session');
const massive = require('massive');
const passport = require('passport');
const storeController = require('./storeController');
const auth = require('./auth');
const Auth0Strategy = require('passport-auth0');

dotenv.config({ path: '.env.local' });

const { AUTH_DOMAIN, AUTH_CLIENT_ID, AUTH_CLIENT_SECRET, CONNECTION_STRING, FAILURE_REDIRECT, SERVER_PORT, SESSION_SECRET, SUCCESS_REDIRECT } = process.env;
const app = express();

app.use(session({
  secret: SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(bodyParser.json());

massive(CONNECTION_STRING).then((db) => {
  app.set('db', db);
});

passport.use(new Auth0Strategy(
  {
    domain: AUTH_DOMAIN,
    clientID: AUTH_CLIENT_ID,
    clientSecret: AUTH_CLIENT_SECRET,
    callbackURL: '/auth/callback',
    scope: 'openid, profile, email'
  },
  auth.authStrategyFunction,
));

app.get('/auth', passport.authenticate('auth0'));

app.get('/auth/callback', passport.authenticate('auth0', {
  successRedirect: SUCCESS_REDIRECT,
  failureRedirect: FAILURE_REDIRECT
}))

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

app.get('/api/userData', auth.getUser)

app.get('/api/getProducts', storeController.getProducts);

app.put('/api/getOrders', storeController.getOrders);

app.post('/api/placeOrder', storeController.placeOrder);

app.post('/api/deleteOrder', storeController.deleteOrder);

app.put('/api/getCart', storeController.getCart);

app.put('/api/updateCart', storeController.updateCart, storeController.getCart);

app.post('/api/newCart', storeController.newCart);

app.put('/api/deleteCart', storeController.deleteCart);

app.listen(SERVER_PORT, () => console.log(`Hailing frequencies open on port ${SERVER_PORT}...`));

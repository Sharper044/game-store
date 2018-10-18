const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const express = require('express');
const session = require('express-session');
const massive = require('massive');
const passport = require('passport');
const storeController = require('./storeController');
const Auth0Strategy = require('passport-auth0');

dotenv.config({ path: '.env.local' });

const { CONNECTION_STRING, SERVER_PORT, SESSION_SECRET } = process.env;
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

app.get('/api/getProducts', storeController.getProducts);

// app.get('/api/getOrder',);

// app.get('/api/getOrders',);

// app.put('/api/updateOrder',);

// app.post('/api/placeOrder',);

// app.get('/api/getCart',);

// app.put('/api/updateCart',);

// app.post('/api/newCart',);

// app.put('/api/deleteCart',);

app.listen(SERVER_PORT, () => console.log(`Hailing frequencies open on port ${SERVER_PORT}...`));

const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const express = require('express');
const session = require('express-session');
const massive = require('massive');
const storeController = require('./storeController');
const auth = require('./auth');
const cors = require('cors');

// Get info from the .env file.
dotenv.config({ path: '.env.local' });
const { CONNECTION_STRING, SERVER_PORT, SESSION_SECRET } = process.env;

// Initialize the backend framework.
const app = express();

app.use(cors()); // Used to let different internal ports talk to each-other (e.g. localhost:3000 -> SERVER_PORT)
// Setup sessions
app.use(session({
  secret: SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
}));
app.use(bodyParser.json()); // Used to parse incoming requests
app.use(( req, res, next ) => auth.checkForSession( req, res, next )); // All requests will be checked for a session.

// Connect to the database
massive(CONNECTION_STRING).then((db) => {
  app.set('db', db);
});

// Exposed endpoints. Note, that on many of the get/delete requests I have used put or post. This is purposeful, so I can have access to a request body, that normally are unavailable on get/delete requests in Axios (used by front end).
app.put('/api/login', auth.login);

app.post('/api/register', auth.register);

app.put('/api/logout', auth.logout);

app.post('/api/checkForSession', auth.checkForSession);

app.get('/api/getProducts', storeController.getProducts);

app.put('/api/getOrders', storeController.getOrders);

app.post('/api/placeOrder', auth.checkAuthentication, storeController.placeOrder, storeController.getOrders);

app.post('/api/deleteOrder', auth.checkAuthentication, storeController.deleteOrder, storeController.getOrders);

app.put('/api/getCart', storeController.getCart);

app.put('/api/updateCart', storeController.updateCart, storeController.getCart);

app.post('/api/newCart', storeController.newCart, storeController.getCart);

app.put('/api/deleteCart', storeController.deleteCart, storeController.newCart);

app.put('/api/mergeCartRegister', storeController.mergeCartRegister, storeController.getCart);

app.put('/api/mergeCartLogin', storeController.mergeCartLogin, storeController.getCart);

// Setup the server to listen for incoming requests.
app.listen(SERVER_PORT, () => console.log(`Hailing frequencies open on port ${SERVER_PORT}...`));

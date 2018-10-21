const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const express = require('express');
const session = require('express-session');
const massive = require('massive');
const storeController = require('./storeController');
const auth = require('./auth');
const cors = require('cors');

dotenv.config({ path: '.env.local' });

const { CONNECTION_STRING, SERVER_PORT, SESSION_SECRET } = process.env;
const app = express();

app.use(cors());
app.use(session({
  secret: SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
}));
app.use(bodyParser.json());
app.use(( req, res, next ) => auth.checkForSession( req, res, next ));

massive(CONNECTION_STRING).then((db) => {
  app.set('db', db);
});

app.put('/api/login', auth.login);

app.post('/api/register', auth.register);

app.put('/api/logout', auth.logout);

app.post('/api/checkForSession', auth.checkForSession);

app.get('/api/getProducts', storeController.getProducts);

app.put('/api/getOrders', storeController.getOrders);

app.post('/api/placeOrder', auth.checkAuthentication,storeController.placeOrder, storeController.getOrders);

app.post('/api/deleteOrder', storeController.deleteOrder, storeController.getOrders);

app.put('/api/getCart', storeController.getCart);

app.put('/api/updateCart', storeController.updateCart, storeController.getCart);

app.post('/api/newCart', storeController.newCart);

app.put('/api/deleteCart', storeController.deleteCart, storeController.newCart);

app.put('/api/mergeCartRegister', storeController.mergeCartRegister, storeController.getCart);

app.put('/api/mergeCartLogin', storeController.mergeCartLogin, storeController.getCart);

app.listen(SERVER_PORT, () => console.log(`Hailing frequencies open on port ${SERVER_PORT}...`));

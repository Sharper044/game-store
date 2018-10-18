import * as bodyParser from 'body-parser';
import * as dotenv from 'dotenv';
import * as express from 'express';
import * as session from 'express-session';
import * as massive from 'massive';
import * as passport from 'passport';
import * as storeController from './storeController';
// import * as Auth0Strategy from 'passport-auth0';

dotenv.config({ path: '.env.local' });

const { CONNECTION_STRING, SERVER_PORT, SESSION_SECRET } = process.env;
const app = express();

app.use(session({
  secret: SESSION_SECRET as string,
  resave: false,
  saveUninitialized: true,
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(bodyParser.json());

massive(CONNECTION_STRING as string).then((db: any) => {
  app.set('db', db);
});

app.get('/api/getProducts', storeController.getProducts);

app.get('/api/getOrder',);

app.get('/api/getOrders',);

app.put('/api/updateOrder',);

app.post('/api/placeOrder',);

app.get('/api/getCart',);

app.put('/api/updateCart',);

app.post('/api/newCart',);

app.put('/api/deleteCart',);

app.listen(SERVER_PORT, () => console.log(`Hailing frequencies open on port ${SERVER_PORT}...`));

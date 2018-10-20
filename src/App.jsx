import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Cart from './pages/Cart';
import Landing from './pages/Landing';
import NavBar from './pages/NavBar';
import Products from './pages/Products';
import ProfileAndOrders from './pages/ProfileAndOrders';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavBar/>
          <Switch>
            <Route component={Landing} exact path="/"/>
            <Route component={Cart} path="/cart"/>
            <Route component={Products} path="/products"/>
            <Route component={ProfileAndOrders} path="/profile"/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

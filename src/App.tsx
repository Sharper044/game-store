import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Cart from './pages/Cart';
import Landing from './pages/Landing';
import Products from './pages/Products';
import ProfileAndOrders from './pages/ProfileAndOrders';

class App extends React.Component {
  public render() {
    return (
      <BrowserRouter>
        <div className="App">
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

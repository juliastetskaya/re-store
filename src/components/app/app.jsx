import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ShopHeader from '../shop-header';
import { HomePage, CartPage } from '../pages';

const App = () => (
  <main role="main" className="container">
    <ShopHeader numItems={5} total={210} />
    <div className="container">
      <Switch>
        <Route
          path="/"
          component={HomePage}
          exact
        />
        <Route
          path="/cart"
          component={CartPage}
        />
      </Switch>
    </div>
  </main>
);

export default App;

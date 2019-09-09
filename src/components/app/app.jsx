import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { HomePage, CartPage } from '../pages';

const App = () => (
  <main role="main" className="container">
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

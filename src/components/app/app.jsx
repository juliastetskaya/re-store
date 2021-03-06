import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import ShopHeader from '../shop-header';
import { HomePage, CartPage } from '../pages';

const App = ({ cartItems: items, orderTotal: total }) => (
  <main role="main" className="container">
    <ShopHeader numItems={items.reduce((acc, item) => acc + item.count, 0)} total={total} />
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

const mapStateToProps = ({ shoppingCart: { cartItems, orderTotal } }) => (
  { cartItems, orderTotal }
);

export default connect(mapStateToProps)(App);

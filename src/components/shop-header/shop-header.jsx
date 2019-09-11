import React from 'react';
import { Link } from 'react-router-dom';

const ShopHeader = ({ numItems, total }) => (
  <header className="shop-header row">
    <Link to="/" className="logo-link">
      <div className="logo text-dark">ReStore</div>
    </Link>
    <Link to="/cart" className="shopping-cart-link">
      <div className="shopping-cart">
        <i className="cart-icon fa fa-shopping-cart" />
        {numItems} items (${total})
      </div>
    </Link>
  </header>
);

export default ShopHeader;

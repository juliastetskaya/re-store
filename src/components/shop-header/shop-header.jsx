import React from 'react';

const ShopHeader = ({ numItems, total }) => (
  <header className="shop-header row">
    <a href="#2" className="logo text-dark">ReStore</a>
    <a href="#3" className="shopping-cart">
      <i className="cart-icon fa fa-shopping-cart" />
      {numItems} items (${total})
    </a>
  </header>
);

export default ShopHeader;

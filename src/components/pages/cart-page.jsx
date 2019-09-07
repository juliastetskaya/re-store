import React from 'react';
import { withRouter } from 'react-router-dom';

const cartPage = (route) => {
  console.log(route);
  return (
    <div>Cart Page</div>
  );
};

export default withRouter(cartPage);

import React from 'react';
import { withRouter } from 'react-router-dom';

const homePage = (route) => {
  console.log(route);
  return (
    <div>Home Page</div>
  );
};

export default withRouter(homePage);

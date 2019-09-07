import React from 'react';
import { BookstoreServiceConsumer } from '../bookstore-service-context';

const withBookstoreConsumer = () => (WrappedComponent) => (props) => (
  <BookstoreServiceConsumer>
    {
      (bookstoreService) => (
        <WrappedComponent {...props} bookstoreService={bookstoreService} />
      )
    }
  </BookstoreServiceConsumer>
);

export default withBookstoreConsumer;

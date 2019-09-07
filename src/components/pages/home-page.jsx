import React from 'react';
import withBookstoreService from '../hoc';
import BookList from '../book-list';

const homePage = ({ bookstoreService }) => (
  <BookList books={bookstoreService.getBooks()} />
);

export default withBookstoreService()(homePage);

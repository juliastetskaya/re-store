import React, { Component } from 'react';
import BookListItem from '../book-list-item';

// eslint-disable-next-line react/prefer-stateless-function
class BookList extends Component {
  render() {
    const { books } = this.props;

    return (
      <ul>
        {books.map((book) => <li key={book.id}><BookListItem book={book} /></li>)}
      </ul>
    );
  }
}

export default BookList;

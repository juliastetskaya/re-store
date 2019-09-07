import React, { Component } from 'react';
import { connect } from 'react-redux';
import BookListItem from '../book-list-item';
import withBookstoreService from '../hoc';
import booksAdded from '../../actions';
import { compose } from '../../utils';

class BookList extends Component {
  componentDidMount() {
    const { bookstoreService, booksAdded } = this.props;
    const data = bookstoreService.getBooks();

    booksAdded(data);
  }

  render() {
    const { books } = this.props;

    return (
      <ul>
        {books.map((book) => <li key={book.id}><BookListItem book={book} /></li>)}
      </ul>
    );
  }
}

const mapStateToProps = ({ books }) => ({ books });

export default compose(withBookstoreService(),
  connect(mapStateToProps, { booksAdded }))(BookList);

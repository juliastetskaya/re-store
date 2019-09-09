import React, { Component } from 'react';
import { connect } from 'react-redux';
import BookListItem from '../book-list-item';
import withBookstoreService from '../hoc';
import fetchBooks from '../../actions';
import { compose } from '../../utils';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';

class BookList extends Component {
  componentDidMount() {
    const {
      fetchBooks,
    } = this.props;

    fetchBooks();
  }

  render() {
    const { books, loading, error } = this.props;

    if (loading) {
      return <Spinner />;
    }

    if (error) {
      return <ErrorIndicator />;
    }

    return (
      <ul className="book-list">
        {books.map((book) => <li key={book.id}><BookListItem book={book} /></li>)}
      </ul>
    );
  }
}

const mapStateToProps = ({ books, loading, error }) => ({ books, loading, error });

const mapDispatchToProps = (dispatch, { bookstoreService }) => ({
  fetchBooks: fetchBooks(bookstoreService, dispatch),
});

export default compose(withBookstoreService(),
  connect(mapStateToProps, mapDispatchToProps))(BookList);

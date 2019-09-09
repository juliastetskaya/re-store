import React, { Component } from 'react';
import { connect } from 'react-redux';

import Spinner from '../../components/spinner';
import ErrorIndicator from '../../components/error-indicator';
import BookList from '../../components/book-list';
import withBookstoreService from '../../components/hoc';
import { fetchBooks, bookAddedToCart } from '../../actions';
import { compose } from '../../utils';

class BookListContainer extends Component {
  componentDidMount() {
    const {
      fetchBooks,
    } = this.props;

    fetchBooks();
  }

  render() {
    const {
      books, loading, error, onAddedToCart,
    } = this.props;

    if (loading) {
      return <Spinner />;
    }

    if (error) {
      return <ErrorIndicator />;
    }

    return <BookList books={books} onAddedToCart={onAddedToCart} />;
  }
}

const mapStateToProps = ({ books, loading, error }) => ({ books, loading, error });

const mapDispatchToProps = (dispatch, { bookstoreService }) => ({
  fetchBooks: fetchBooks(bookstoreService, dispatch),
  onAddedToCart: (id) => dispatch(bookAddedToCart(id)),
});

export default compose(withBookstoreService(),
  connect(mapStateToProps, mapDispatchToProps))(BookListContainer);

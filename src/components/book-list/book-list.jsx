import React, { Component } from 'react';
import { connect } from 'react-redux';
import BookListItem from '../book-list-item';
import withBookstoreService from '../hoc';
import booksAdded from '../../actions';
import { compose } from '../../utils';
import Spinner from '../spinner';

class BookList extends Component {
  componentDidMount() {
    const { bookstoreService, booksAdded } = this.props;
    bookstoreService.getBooks()
      .then((data) => booksAdded(data));
  }

  render() {
    const { books, loading } = this.props;

    if (loading) {
      return <Spinner />;
    }

    return (
      <ul className="book-list">
        {books.map((book) => <li key={book.id}><BookListItem book={book} /></li>)}
      </ul>
    );
  }
}

const mapStateToProps = ({ books, loading }) => ({ books, loading });

export default compose(withBookstoreService(),
  connect(mapStateToProps, { booksAdded }))(BookList);

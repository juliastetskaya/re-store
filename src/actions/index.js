const booksRequested = () => ({
  type: 'FETCH_BOOKS_REQUEST',
});

const booksAdded = (newBooks) => ({
  type: 'FETCH_BOOKS_SUCCESS',
  payload: newBooks,
});

const booksError = (err) => ({
  type: 'FETCH_BOOKS_FAILURE',
  payload: err,
});

const fetchBooks = (bookstoreService, dispatch) => () => {
  dispatch(booksRequested());
  bookstoreService.getBooks()
    .then((data) => dispatch(booksAdded(data)))
    .catch((err) => dispatch(booksError(err)));
};

export default fetchBooks;

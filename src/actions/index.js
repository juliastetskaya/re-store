const booksAdded = (newBooks) => ({
  type: 'BOOKS_ADDED',
  payload: newBooks,
});

const booksRequested = () => ({
  type: 'BOOKS_REQUESTED',
});

const booksError = (err) => ({
  type: 'BOOKS_ERROR',
  payload: err,
});

export {
  booksAdded,
  booksRequested,
  booksError,
};

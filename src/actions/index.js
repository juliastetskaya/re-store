const booksAdded = (newBooks) => ({
  type: 'BOOKS_ADDED',
  payload: newBooks,
});

const booksRequested = () => ({
  type: 'BOOKS_REQUESTED',
});

export {
  booksAdded,
  booksRequested,
};

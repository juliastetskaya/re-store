const initialState = {
  books: [],
  loading: true,
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'BOOKS_ADDED':
      return {
        books: action.payload,
        loading: false,
        error: null,
      };
    case 'BOOKS_REQUESTED':
      return {
        books: [],
        loading: true,
        error: null,
      };
    case 'BOOKS_ERROR':
      return {
        books: [],
        loading: false,
        error: true,
      };
    default:
      return state;
  }
};

export default reducer;

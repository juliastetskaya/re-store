const initialState = {
  books: [],
  loading: true,
  error: null,
  cartItems: [],
  orderTotal: 335,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_BOOKS_REQUEST':
      return {
        ...state,
        books: [],
        loading: true,
        error: null,
      };
    case 'FETCH_BOOKS_SUCCESS':
      return {
        ...state,
        books: action.payload,
        loading: false,
        error: null,
      };
    case 'FETCH_BOOKS_FAILURE':
      return {
        ...state,
        books: [],
        loading: false,
        error: true,
      };
    case 'BOOK_ADDED_TO_CART': {
      const bookId = action.payload;
      const book = state.books.filter(({ id }) => id === bookId)[0];
      const { title: name, price: total } = book;
      const newItem = {
        id: bookId, name, count: 1, total,
      };

      return {
        ...state,
        cartItems: [...state.cartItems, newItem],
      };
    }
    default:
      return state;
  }
};

export default reducer;

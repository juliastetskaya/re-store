const initialState = {
  books: [],
  loading: true,
  error: null,
  cartItems: [],
  orderTotal: 335,
};

const updateCartItems = (cartItems, item, index) => {
  if (index === -1) {
    return [
      ...cartItems,
      item,
    ];
  }

  const cartWithoutCartItem = cartItems.filter(({ id }) => id !== item.id);
  return [
    ...cartWithoutCartItem,
    item,
  ];
};

const updateItem = (book, item = {}) => {
  const {
    id = book.id,
    title = book.title,
    count = 0,
    total = 0,
  } = item;

  return {
    id,
    title,
    count: count + 1,
    total: total + book.price,
  };
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
      const { cartItems, books } = state;

      const itemIndex = cartItems.findIndex(({ id }) => id === bookId);
      const cartItem = cartItems[itemIndex];
      const book = books.find(({ id }) => id === bookId);

      const newItem = updateItem(book, cartItem);

      return {
        ...state,
        cartItems: updateCartItems(cartItems, newItem, itemIndex),
      };
    }
    default:
      return state;
  }
};

export default reducer;

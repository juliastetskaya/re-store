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

  return [
    ...cartItems.slice(0, index),
    item,
    ...cartItems.slice(index + 1),
  ];
};

const updateItem = (book, item = {}, quantity) => {
  const {
    id = book.id,
    title = book.title,
    count = 0,
    total = 0,
  } = item;

  const newCount = count + quantity;
  const newTotal = total + book.price * quantity;

  return {
    id,
    title,
    count: newCount > 1 ? newCount : 1,
    total: newTotal > book.price ? newTotal : book.price,
  };
};

const updateOrder = (state, bookId, quantity) => {
  const { cartItems, books } = state;

  const itemIndex = cartItems.findIndex(({ id }) => id === bookId);
  const cartItem = cartItems[itemIndex];
  const book = books.find(({ id }) => id === bookId);

  const newItem = updateItem(book, cartItem, quantity);

  return {
    ...state,
    cartItems: updateCartItems(cartItems, newItem, itemIndex),
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
      return updateOrder(state, action.payload, 1);
    }

    case 'BOOK_REMOVED_FROM_CART': {
      return updateOrder(state, action.payload, -1);
    }

    case 'ALL_BOOKS_REMOVED_FROM_CART':
      return {
        ...state,
        cartItems: state.cartItems.filter(({ id }) => id !== action.payload),
      };

    default:
      return state;
  }
};

export default reducer;

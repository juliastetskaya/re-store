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
  const { shoppingCart: { cartItems }, bookList: { books } } = state;

  const itemIndex = cartItems.findIndex(({ id }) => id === bookId);
  const cartItem = cartItems[itemIndex];
  const book = books.find(({ id }) => id === bookId);

  const newItem = updateItem(book, cartItem, quantity);

  return {
    orderTotal: 0,
    cartItems: updateCartItems(cartItems, newItem, itemIndex),
  };
};

const updateShoppingCart = (state, action) => {
  if (!state) {
    return {
      cartItems: [],
      orderTotal: 0,
    };
  }

  switch (action.type) {
    case 'BOOK_ADDED_TO_CART': {
      return updateOrder(state, action.payload, 1);
    }

    case 'BOOK_REMOVED_FROM_CART': {
      return updateOrder(state, action.payload, -1);
    }

    case 'ALL_BOOKS_REMOVED_FROM_CART':
      return {
        cartItems: state.shoppingCart.cartItems.filter(({ id }) => id !== action.payload),
      };
    default:
      return state.shoppingCart;
  }
};

export default updateShoppingCart;

const sameSizeAndId = (a, b) => a.id === b.id && a.size === b.size;

export const handleAddToCart = (cartState, incomingProduct, amount = 1, size = "M") => {
  const [cart, setCart] = cartState;

  // Add amount and size to the incoming product object
  const newCartItem = { ...incomingProduct, amount, size };

  // Check if the incoming item is already in cart
  const sameItemInCart = cart.find((item) => sameSizeAndId(item, newCartItem));

  // Add to the amount if the item is already in cart else add new incoming item
  if (sameItemInCart) {
    sameItemInCart.amount += amount;
    setCart([...cart]);
  } else {
    setCart([...cart, newCartItem]);
  }
};

export const handleRemoveFromCart = (cartState, cartItem, amount = 1) => {
  const [cart, setCart] = cartState;

  // Lower amount if more than 0 else remove item from cart
  // Spreading cart to force react to re-render
  cartItem.amount -= amount;
  if (cartItem.amount <= 0) {
    setCart([...cart.filter((x) => !sameSizeAndId(x, cartItem))]);
  } else {
    setCart([...cart]);
  }
};

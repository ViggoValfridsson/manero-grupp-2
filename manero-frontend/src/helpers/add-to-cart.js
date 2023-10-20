export const handleAddToCart = (cartState, product, amount = 1, size = "M") => {
  const [cart, setCart] = cartState;
  // TODO: FIX
  if (cart.find((item) => item.id === product.id)) {
    return;
  }
  setCart([...cart, { ...product, amount, size }]);
};

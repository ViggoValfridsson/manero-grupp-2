export default class CartItem {
  constructor(product, size, amount) {
    this.product = product;
    this.size = size;
    this.amount = amount;
    // Use this to keep track of items in cart
    this.itemId = `${product.id}_${size}`;
  }
}

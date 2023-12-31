import { ShoppingBag } from "lucide-react";
import PageIconCircle from "../../components/PageIconCircle";
import { CartProductCard } from "../../components/CartProductCard";
import { Link } from "react-router-dom";
import { useCart } from "../../hooks/useCart";

export default function Cart() {
  const { cart } = useCart();

  // Page if cart is empty
  if (cart.length == 0)
    return (
      <div className="cart-page empty">
        <PageIconCircle icon={<ShoppingBag />} />
        <div>
          <h2>Your cart is empty!</h2>
          <p>Looks like you haven{"'"}t added any products yet.</p>
        </div>
        <Link to="/products" className="button button-black">
          Shop now
        </Link>
      </div>
    );

  // Page if cart is not empty
  return (
    <div className="cart-page not-empty">
      <div className="cart">
        {cart.map((cartItem) => (
          <CartProductCard key={cartItem.id} cartItem={cartItem} />
        ))}
      </div>
      <div className="total">
        <div>
          <p>Total</p>
          <span>${cart.reduce((a, b) => a + b.price * b.amount, 0).toFixed(2)}</span>
        </div>
      </div>
      <div className="checkout-button-wrapper">
        <Link to="/checkout" className="button button-black">
          Proceed to checkout
        </Link>
      </div>
    </div>
  );
}

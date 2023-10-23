import { ShoppingBag } from "lucide-react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../App";

export default function CartPreviewButton() {
  const [cart] = useContext(CartContext);

  return (
    <Link to="/cart" className={`cart-button ${cart.length == 0 ? "hidden" : ""}`}>
      <ShoppingBag />
      <span className="cart-button-amount">{cart.reduce((a, b) => a + b.amount, 0)}</span>
    </Link>
  );
}

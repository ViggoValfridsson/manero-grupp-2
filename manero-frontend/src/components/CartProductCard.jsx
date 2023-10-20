import { Minus, Plus } from "lucide-react";
import { apiDomain } from "../helpers/api-domain";
import { Link } from "react-router-dom";
import { handleAddToCart, handleRemoveFromCart } from "../helpers/add-to-cart";
import { useContext } from "react";
import { CartContext } from "../App";

export function CartProductCard({ cartItem }) {
  const cartState = useContext(CartContext);

  return (
    <div className="cart-product-card">
      <Link to={`/products/${cartItem.id}`}>
        <img src={apiDomain.https + cartItem.imagePaths[0]} alt="" />
        <div className="info">
          <p>{cartItem.name}</p>
          <span>${cartItem.price}</span>
          <span>Size: {cartItem.size}</span>
        </div>
      </Link>
      <div className="buttons">
        <button onClick={() => handleAddToCart(cartState, cartItem, 1, cartItem.size)}>
          <Plus size={16} />
        </button>
        <span>{cartItem.amount}</span>
        <button onClick={() => handleRemoveFromCart(cartState, cartItem)}>
          <Minus size={16} />
        </button>
      </div>
    </div>
  );
}

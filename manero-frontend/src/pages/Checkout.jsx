import { Link } from "react-router-dom";

import { useCart } from "../hooks/useCart";
import { ChevronRight } from "lucide-react";
import CheckoutItem from "../components/CheckoutItem";

function Checkout() {
  const { cart } = useCart();

  return (
    <div className="checkout-page">
      <section className="container-top">
        <div className="heading">
          <h2>My order</h2>
          <p>
            <span>${cart.reduce((a, b) => a + b.price * b.amount, 0).toFixed(2)}</span>
          </p>
        </div>
        <div className="specification">
          {cart.map((cartItem) => (
            <CheckoutItem key={cartItem.id} cartItem={cartItem} />
          ))}
        </div>
        <Link to="/shipping">
          <div className="container">
            <div className="info">
              <h2>Shipping details</h2>
              <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className="icon">
              <ChevronRight />
            </div>
          </div>
        </Link>
        <Link to="/payment">
          <div className="container">
            <div className="info">
              <h2>Payment Details</h2>
              <p>Lorem ipsum dolor sit.</p>
            </div>
            <div className="icon">
              <ChevronRight />
            </div>
          </div>
        </Link>
      </section>
      <section className="container-bottom">
        <div className="comment-field">
          <label>Comment</label>
          <input placeholder="Write your comment"></input>
        </div>
        <div className="order-button ">
          <Link to="/handle-order" className="button button-black">Place order</Link>
        </div>
      </section>
    </div>
  );
}

export default Checkout;

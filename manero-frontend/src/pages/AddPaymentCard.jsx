import { Camera } from "lucide-react";
import PaymentCard from "../components/PaymentCard";

function AddPaymentCard() {
  return (
    <div className="add-payment-card-page">
      <div className="payment-card-container">
        <div className="card-container">
          <PaymentCard />
        </div>
        <form>
          <div className="form-group">
            <label>Name</label>
            <input type="text" name="name" className="form-control" placeholder="John Doe" />
          </div>
          <div className="form-group">
            <label>card number</label>
            <div className="form-text-input">
              <input
                type="text"
                name="number"
                className="form-control"
                placeholder="xxxx xxxx xxxx xxxx"
              />
              <Camera />
            </div>
          </div>
          <div className="row">
            <div className="form-group">
              <label>MM/YY</label>
              <input type="tel" name="expiry" className="row-control" placeholder="--/--" />
            </div>
            <div className="form-group">
              <label>CVV</label>
              <input type="tel" name="cvc" className="row-control" placeholder="---" />
            </div>
          </div>
          <input type="hidden" name="issuer" />
          <div className="form-actions">
            <button className="button button-black">Save card</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddPaymentCard;

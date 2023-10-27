import { Camera } from "lucide-react";
import PaymentCard from "../components/PaymentCard";
import { useNavigate } from "react-router-dom";
import { useOrder } from "../hooks/useOrder";

function AddPaymentCard() {
  const { setPaymentCard, paymentCard } = useOrder();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const formDataObj = Object.fromEntries(formData.entries());
    setPaymentCard(formDataObj);

    navigate(-1);
  };

  return (
    <div className="add-payment-card-page">
      <div className="payment-card-container">
        <div className="card-container">
          <PaymentCard />
        </div>
        <form method="post" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              name="nameOnCard"
              className="form-control"
              placeholder="John Doe"
              defaultValue={paymentCard?.nameOnCard}
              required
              minLength={2}
              maxLength={100}
            />
          </div>
          <div className="form-group">
            <label>card number</label>
            <div className="form-text-input">
              <input
                type="text"
                name="cardNumber"
                className="form-control"
                placeholder="xxxx xxxx xxxx xxxx"
                defaultValue={paymentCard?.cardNumber}
                required
                minLength={4}
                maxLength={20}
              />
              <Camera />
            </div>
          </div>
          <div className="row">
            <div className="form-group">
              <label>MM/YY</label>
              <input
                type="tel"
                name="expirationDate"
                className="row-control"
                placeholder="--/--"
                defaultValue={paymentCard?.expirationDate}
                required
                minLength={5}
                maxLength={5}
              />
            </div>
            <div className="form-group">
              <label>CVV</label>
              <input
                type="tel"
                name="cvvNumber"
                className="row-control"
                placeholder="---"
                defaultValue={paymentCard?.cvvNumber}
                required
                minLength={3}
                maxLength={3}
              />
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

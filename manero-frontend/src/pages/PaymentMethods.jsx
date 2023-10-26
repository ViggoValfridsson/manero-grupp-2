import { CreditCard, Plus } from "lucide-react";

function PaymentMethods() {
  return (
    <div className="payment-method-page">
      <div className="options-container">
        <div className="container">
          <h3>Cards</h3>
          <p>Add a new card</p>
          <Plus />
        </div>
        <div className="card-container">
          <CreditCard />
          <p>1111 2222 3333 4444</p>
          <p>KRISTIN</p>
          <p>EXP. END</p>
        </div>
      </div>
      <div className="option-container">Apple Pay</div>
      <div className="option-container">Pay pal</div>
      <div className="option-container">Payoneer</div>
    </div>
  );
}

export default PaymentMethods;

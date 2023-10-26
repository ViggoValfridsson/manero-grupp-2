import { CreditCard } from "lucide-react";

function PaymentCard() {
  return (
    <div className="payment-card">
      {/* CreditCard - Instead of card */}
      <CreditCard />
      <p className="card-number">XXXX XXXX XXXX 4444</p>
      <div className="card-details">
        <p>John Doe</p>
        <p>EXP. END</p>
      </div>
    </div>
  );
}

export default PaymentCard;

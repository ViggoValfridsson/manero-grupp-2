import { Check, PenLine, Plus } from "lucide-react";
import PaymentCard from "../components/PaymentCard";

function PaymentMethods() {
  return (
    <div className="payment-method-page">
      <div className="card-title-container inline-padding">
        <p>Cards</p>
        <button>
          Add a new card
          <Plus />
        </button>
      </div>
      <div className="card-container">
        <PaymentCard />
        <PaymentCard />
      </div>

      {/* TEST JUST FOR DESIGN BELOW */}
      <div className="payment-alternative">
        <div className="payment-method-name">
          <p>Apple Pay</p>
          <span>
            <Check />
          </span>
        </div>
        <button>
          <PenLine />
        </button>
      </div>
      <div className="payment-alternative">
        <div className="payment-method-name">
          <p>Apple Pay</p>
          <span>
            <Check />
          </span>
        </div>
        <button>
          <PenLine />
        </button>
      </div>
      <div className="payment-alternative">
        <p>Payoneer</p>
        <button>
          <Plus />
        </button>
      </div>
    </div>
  );
}

export default PaymentMethods;

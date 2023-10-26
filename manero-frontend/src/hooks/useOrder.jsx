import { createContext, useContext, useState } from "react";
import { useCart } from "./useCart";
import Customer from "../models/Customer";
import Address from "../models/Address";
import PaymentCard from "../models/PaymentCard";
import { apiDomain } from "../helpers/api-domain";

const OrderContext = createContext(null);

export function OrderContextProvider({ children }) {
  const [customer, _setCustomer] = useState(null);
  const [address, _setAddress] = useState(null);
  const [paymentCard, _setPaymentCard] = useState();
  const [isOrderSuccessful, _setIsOrderSuccessful] = useState(false);
  const { cart } = useCart();

  const setCustomer = (firstName, lastName, email, phone) => {
    _setCustomer(new Customer(firstName, lastName, email, phone));
  };

  const setAddress = (streetAddress, city, postalCode) => {
    _setAddress(new Address(streetAddress, city, postalCode));
  };

  const setPaymentCard = (cardNumber, expirationDate, cvvNumber, nameOnCard) => {
    _setPaymentCard(new PaymentCard(cardNumber, expirationDate, cvvNumber, nameOnCard));
  };

  const placeOrder = async () => {
    // Cancel if details are missing or invalid
    if (!customer || !address || !paymentCard) {
      console.log("Invalid order details");
      return;
    }

    const orderData = {
      customer: customer,
      address: address,
      products: cart.map((item) => ({
        productId: item.id,
        size: item.size,
        amount: item.amount,
      })),
    };

    console.log(orderData);

    // Send data to the backend via POST
    const response = await fetch(`${apiDomain.https}/api/orders`, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(orderData),
    });
    const data = await response.JSON();
    console.log("response from server:", data);

    if (response.status === 200) {
      _setIsOrderSuccessful(true);
    }
  };

  return (
    <OrderContext.Provider
      value={{
        placeOrder,
        isOrderSuccessful,
        customer,
        setCustomer,
        address,
        setAddress,
        paymentCard,
        setPaymentCard,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
}

export const useOrder = () => useContext(OrderContext);

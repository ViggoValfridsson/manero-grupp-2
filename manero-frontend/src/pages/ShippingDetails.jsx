import { useNavigate } from "react-router-dom";
import { useOrder } from "../hooks/useOrder";

export default function ShippingDetails() {
  const { setShipping, customer, address } = useOrder();

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const formDataObj = Object.fromEntries(formData.entries());
    setShipping(formDataObj);

    navigate(-1);
  };

  return (
    <div className="shipping-details-page">
      <p>Please enter you shipping details</p>
      <form method="post" onSubmit={handleSubmit}>
        <h3>Customer</h3>
        <label>
          <span>First Name</span>
          <input
            type="text"
            name="firstName"
            defaultValue={customer?.firstName}
            required
            minLength={2}
            maxLength={100}
          />
        </label>
        <label>
          <span>Last Name</span>
          <input
            type="text"
            name="lastName"
            defaultValue={customer?.lastName}
            required
            minLength={2}
            maxLength={100}
          />
        </label>
        <label>
          <span>Email Address</span>
          <input
            type="email"
            name="email"
            defaultValue={customer?.email}
            required
            minLength={6}
            maxLength={320}
          />
        </label>
        <label>
          <span>Phone Number</span>
          <input
            type="tel"
            name="phone"
            defaultValue={customer?.phone}
            required
            minLength={10}
            maxLength={20}
          />
        </label>
        <h3>Address</h3>
        <label>
          <span>Street Address</span>
          <input
            type="text"
            name="streetAddress"
            defaultValue={address?.streetAddress}
            required
            minLength={1}
            maxLength={255}
          />
        </label>
        <label>
          <span>Postal Code</span>
          <input
            type="text"
            name="postalCode"
            defaultValue={address?.postalCode}
            required
            minLength={1}
            maxLength={255}
          />
        </label>
        <label>
          <span>City</span>
          <input
            type="text"
            name="city"
            defaultValue={address?.city}
            required
            minLength={4}
            maxLength={20}
          />
        </label>
        <button className="button button-black">Save</button>
      </form>
    </div>
  );
}

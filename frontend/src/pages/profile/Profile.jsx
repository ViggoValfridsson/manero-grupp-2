import useFetch from "../../hooks/useFetch";
import getCookieByName from "../../helpers/getCookieByName";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { apiDomain } from "../../helpers/api-domain";
import PageIconCircle from "../../components/PageIconCircle";
import {
  User,
  PencilLine,
  MapPin,
  CreditCard,
  DoorOpen,
  Calendar,
  ChevronRight,
} from "lucide-react";
import { Link } from "react-router-dom";

function Profile() {
  const navigate = useNavigate();
  const account = useFetch(`${apiDomain.https}/api/account`);
  const authToken = getCookieByName("Authorization");

  useEffect(() => {
    if (!authToken || account.error || (!account.isLoading && !account.data)) {
      // Login failed
      navigate("/signin");
    }
  }, [authToken, account]);

  if (account.isLoading) {
    return;
  }

  return (
    <div className="profile-page">
      <div className="heading">
        <Link to="/profile/edit" className="icon-container">
          <PageIconCircle icon={<User />} />
          <div className="edit-icon">
            <PencilLine />
          </div>
        </Link>
        <div className="heading-text">
          <h1>
            {account.data.firstName} {account.data.lastName}
          </h1>
          <p>{account.data.email}</p>
        </div>
      </div>
      <div className="link-list">
        <Link to={"/order-history"}>
          <div className="list-item">
            <div className="items-start">
              <Calendar />
              <p>Order History</p>
            </div>
            <ChevronRight />
          </div>
        </Link>
        <Link to={"/payment-method"}>
          <div className="list-item">
            <div className="items-start">
              <CreditCard />
              <p>Payment Method</p>
            </div>
            <ChevronRight />
          </div>
        </Link>
        <Link to={"/my-address"}>
          <div className="list-item">
            <div className="items-start">
              <MapPin />
              <p>My Address</p>
            </div>
            <ChevronRight />
          </div>
        </Link>
        <Link to={"/sign-out"}>
          <div className="list-item">
            <div className="items-start">
              <DoorOpen />
              <p>Sign Out</p>
            </div>
            <ChevronRight />
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Profile;

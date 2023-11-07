import useFetch from "../../hooks/useFetch";
import { apiDomain } from "../../helpers/api-domain";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import getCookieByName from "../../helpers/getCookieByName";

function OrderHistory() {
  const orders = useFetch(`${apiDomain.https}/api/orders`);
  const authToken = getCookieByName("Authorization");
  const navigate = useNavigate();

  useEffect(() => {
    // Login failed
    if (!authToken || orders.error) {
      // Delete cookie to prevent infinite redirects
      document.cookie = `Authorization=; expires="${new Date(
        0
      ).toUTCString()}" path=/; secure; SameSite=Lax`;
      navigate("/signin");
    }
  }, [authToken, orders, navigate]);

  return (
    <div>OrderHistory</div>
  )
}

export default OrderHistory
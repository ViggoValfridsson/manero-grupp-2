import { Link } from "react-router-dom";
import { apiDomain } from "../../helpers/api-domain";
import useFetch from "../../hooks/useFetch";

function MyAddresses() {
  const addresses = useFetch(`${apiDomain.https}/api/addresses`);

  console.log(addresses);

  return (
    <div className="my-addresses-page">
      <Link to={"/profile/address/add"}>Add</Link>
    </div>
  );
}

export default MyAddresses;

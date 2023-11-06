import useFetch from "../../hooks/useFetch";
import getCookieByName from "../../helpers/getCookieByName";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { apiDomain } from "../../helpers/api-domain";

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

  return <div>profile</div>;
}

export default Profile;

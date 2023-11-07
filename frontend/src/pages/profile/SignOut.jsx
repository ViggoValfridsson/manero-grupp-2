import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "../../hooks/useToast";

function SignOut() {
  const navigate = useNavigate();
  const toast = useToast();

  useEffect(() => {
    // delete auth token
    document.cookie = `Authorization=; expires="${new Date(
      0
    ).toUTCString()}" path=/; secure; SameSite=Lax`;

    toast.add("Successfully signed out!");
    navigate("/");
  }, [navigate, toast]);

  return null;
}

export default SignOut;

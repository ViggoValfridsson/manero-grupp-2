import { Check, EyeOff, Facebook, Twitter } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import ThemedInput from "../../components/ThemedInput";
import { useState } from "react";
import { apiDomain } from "../../helpers/api-domain";

function SignUp() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const signUpData = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      phoneNumber: phoneNumber,
      password: password,
      confirmPassword: confirmPassword,
    };
    try {
      const response = await fetch(`${apiDomain.https}/api/account/signup`, {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(signUpData),
      });

      if (!response.ok) {
        throw new Error(`Something went wrong status: ${response.status}`);
      }

      const data = await response.json();
      console.log("response from server:", data);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="signup-container">
        <h1>Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <ThemedInput
            label="First Name"
            regex={"^[a-zA-ZåäöÅÄÖ]+$"}
            error={"Must contain only letters"}
            value={firstName}
            type="text"
            onChange={(e) => setFirstName(e.target.value)}
          >
            <Check />
          </ThemedInput>
          <ThemedInput
            label="Last Name"
            type="text"
            regex={"^[a-zA-ZåäöÅÄÖ]+$"}
            error={"Must contain only letters"}
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          >
            <Check />
          </ThemedInput>
          <ThemedInput
            label="Email"
            type="email"
            regex={"^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$"}
            error={"Must be a valid email address"}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          >
            <Check />
          </ThemedInput>
          <ThemedInput
            label="phone number"
            type="text"
            regex={"^\\+?[1-9]\\d{1,14}$"}
            error={"Must be a valid phone number"}
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          >
            <Check />
          </ThemedInput>
          <ThemedInput
            label="Password"
            type="password"
            regex={"^.{8,}$"}
            error={"Must contain at least 8 characters"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          >
            <button type="button">
              <EyeOff className="container-icon" />
            </button>
          </ThemedInput>
          <ThemedInput
            label="Confirm Password"
            type="password"
            regex={"^[a-zA-Z]+$"}
            error={confirmPassword !== password ? "Must match the previous password" : null}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          >
            <button type="button">
              <EyeOff className="container-icon" />
            </button>
          </ThemedInput>

          <button type="submit" className="button button-black">
            SIGN UP
          </button>
          <p>
            Already have an account? <Link to="/signin">Sign in.</Link>
          </p>
        </form>

        <div className="signup-options">
          <Link to={"/facebook-auth"}>
            <div className="icon facebook">
              <Facebook />
            </div>
          </Link>
          <Link to={"/twitter-auth"}>
            <div className="icon twitter">
              {" "}
              <Twitter />
            </div>
          </Link>
          <Link to={"google-auth"}>
            <div className="image-icon">
              <img src="\images\google plus.png" alt="google-icon" />
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default SignUp;

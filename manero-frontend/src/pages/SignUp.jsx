import { Check, EyeOff, Facebook, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

function SignUp() {
  return (
    <>
      <div className="signup-container">
        <h1>Sign Up</h1>
        <form>
          <div className="signup-detail">
            <div className="input-container">
              <label className="label-with-input">
                <input type="text" placeholder="Enter your name" />
                <span>NAME</span>
              </label>
              <Check className="container-icon" />
            </div>
            <div className="input-container">
              <label className="label-with-input">
                <input type="text" placeholder="Enter your email" />
                <span>Email</span>
              </label>
              <Check className="container-icon" />
            </div>
            <div className="input-container">
              <label className="label-with-input">
                <input type="password" placeholder="Enter your password" />
                <span>PASSWORD</span>
              </label>
              <EyeOff className="container-icon" />
            </div>
            <div className="input-container">
              <label className="label-with-input">
                <input type="text"  placeholder="Confirm you password"/>
                <span>CONFIRM PASSWORD</span>
              </label>
              <EyeOff className="container-icon" />
            </div>
          </div>
          <Link to={"/account-confirmation"}>
            <button type="submit" className="button button-black">
              SIGN UP
            </button>
          </Link>
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

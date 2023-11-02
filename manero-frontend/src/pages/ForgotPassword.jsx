import { Link } from "react-router-dom";

function ForgotPassword() {
  return (
    <div className="forgot-password-page">
      <div className="ingress">
        Please enter your email address. You will receive a link to create a new password via email.
      </div>
      <form>
        <label className="label-with-input">
          <input type="text" placeholder="Enter your email" />
          <span>Email</span>
        </label>
        <Link to={"/reset-password"}>
          <button type="submit" className="button button-black">
            SEND
          </button>
        </Link>
      </form>
    </div>
  );
}

export default ForgotPassword;

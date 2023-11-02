import { EyeOff } from "lucide-react";
import { Link } from "react-router-dom";

function ResetPassword() {
  return (
    <div className="reset-password-page">
      <div className="ingress">Enter new password and confirm.</div>
      <form>
        <div className="input-container">
          <label className="label-with-input">
            <input type="password" placeholder="Enter your new password" />
            <span>New PASSWORD</span>
          </label>
          <button>
            <EyeOff className="container-icon" />
          </button>
        </div>

        <div className="input-container">
          <label className="label-with-input">
            <input type="password" placeholder="Confirm your new password" />
            <span>CONFIRM PASSWORD</span>
          </label>
          <button>
            <EyeOff className="container-icon" />
          </button>
        </div>

        <Link to={"/password-confirmation"}>
          <button type="submit" className="button button-black">
            CHANGE PASSWORD
          </button>
        </Link>
      </form>
    </div>
  );
}

export default ResetPassword;

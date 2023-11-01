import { ChevronLeft, Check, EyeOff } from "lucide-react";
import { Link } from "react-router-dom";
export default function SignIn() {
  return (
    <>
      <div className="signin-container">
        <div className="local-hedear">
          <ChevronLeft />
          <p>SignIn</p>
        </div>
        <h1>Welcome Back!</h1>
        <h3>Sign in to continue</h3>

        <div className="signin-detail">
          <div className="input-container">
            <input type="text" placeholder="EMAIL" />
            <button type="submit">
              <div className="container-icon">
                <Check />
              </div>
            </button>
          </div>

          <div className="input-container">
            <input type="text" placeholder="PASSWORD" />
            <button type="submit">
              <div className="container-icon">
                <EyeOff />
              </div>
            </button>
          </div>
        </div>
        <div className="config-content">
          <form>
            <input type="checkbox" id="rememberme" name="rememberme" value="check" />
            <label htmlFor="rememberme"> Remember me</label>
            {/* <label for="rememberme"> Remember me</label> */}
          </form>
          <p>Forgot password?</p>
        </div>
        <div className="signin-button-wrapper">
          <Link to="/signin" className="button button-black">
            SIGN IN
          </Link>
        </div>
        <p>Don’t have an account? Sign up.</p>
      </div>
    </>
  );
}

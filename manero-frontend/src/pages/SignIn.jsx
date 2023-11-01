import { ChevronLeft, Check, EyeOff } from "lucide-react";
import { Link } from "react-router-dom";
export default function SignIn() {
  return (
    <>
      <div className="signin-container">
        <ChevronLeft />
        <p>SignIn</p>
        <h1>Welcome Back!</h1>
        <p>Sign in to continue</p>

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

        <form>
          <input type="checkbox" id="rememberme" name="rememberme" value="check" />
          <label for="rememberme"> Remember me</label>
        </form>
        <p>Forgot password?</p>

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

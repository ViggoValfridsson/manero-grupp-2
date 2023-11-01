import { ArrowRight, ChevronLeft } from "lucide-react";
export default function SignIn() {
  return (

    <div className="signin">
    <ChevronLeft />
      <p>SignIn</p>
      <h1>Welcome Back!</h1>
      <p>Sign in to continue</p>
      <div className="content-bottom">
        <div className="input-container">
          <input type="text" placeholder="kristinwatson@mail.com" />
          <button type="submit">
            <div className="container-arrow">
              <ArrowRight />
            </div>
          </button>
        </div>
        <div className="input-container">
          <input type="text" placeholder="Password" />
          <button type="submit">
            <div className="container-arrow">
              <ArrowRight />
            </div>
          </button>
        </div>
      </div>
      <form>
        <input type="checkbox" id="rememberme" name="rememberme" value="check" />
        <label for="rememberme"> Remember me</label>
      </form>
      <p>Forgot password?</p>
      
      <button className="button button-black" type="button">SIGN IN</button>
      <p>Don’t have an account? Sign up.</p>
    </div>

  );
}
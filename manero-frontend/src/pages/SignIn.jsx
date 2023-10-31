import { ArrowRight } from "lucide-react";
export default function SignIn() {
  return (
    <div>
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
        <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat" />
        <label for="vehicle3"> Remember me</label>
      </form>
      <p>Forgot password?</p>
    </div>
  );
}

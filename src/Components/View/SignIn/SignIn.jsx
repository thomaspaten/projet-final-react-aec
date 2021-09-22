import React from "react";
import { login } from "../../../Service/loginHelper";

function SignIn(props) {
  // ***** STATES

  const setLoginState = props.setLoginState;
  return (
    <>
      <section className="mt-5">
        <div className="container pt-5">
          <div className="row">
            <div className="col-4 offset-4">
              <main className="form-signin">
                <form>
                  <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

                  <div className="form-floating">
                    <input
                      type="email"
                      className="form-control"
                      id="floatingInput"
                    />
                    <label htmlFor="floatingInput">Username</label>
                  </div>
                  <div className="form-floating">
                    <input
                      type="password"
                      className="form-control"
                      id="floatingPassword"
                      placeholder="Password"
                      autoComplete="true"
                    />
                    <label htmlFor="floatingPassword">Password</label>
                  </div>

                  <div className="checkbox mb-3">
                    <label>
                      <input type="checkbox" value="remember-me" /> Remember me
                    </label>
                  </div>
                  <button
                    onClick={() => {
                      login(setLoginState);
                    }}
                    className="w-100 btn btn-lg btn-dark"
                    type="submit"
                  >
                    Sign in
                  </button>
                </form>
              </main>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default SignIn;

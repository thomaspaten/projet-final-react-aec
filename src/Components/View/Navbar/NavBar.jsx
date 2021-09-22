import React from "react";
import { CartFill } from "react-bootstrap-icons";
import ItemCounter from "./ItemCounter";
import { isLogin, logout } from "../../../Service/loginHelper";
import { Link } from "react-router-dom";

function NavBar(props) {
  // ***** STATES

  const loginState = props.loginState;
  const setLoginState = props.setLoginState;
  const cartContent = props.cartContent;

  return (
    <header>
      <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark mb-5">
        <div className="container">
          <Link aria-current="page" className="navbar-brand" to="/">
            Store
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav me-auto mb-2 mb-md-0">
              <li className="nav-item">
                <Link
                  aria-current="page"
                  className={isLogin() ? "nav-link active" : "nav-link"}
                  to="/"
                >
                  Home
                </Link>
              </li>
            </ul>
            <div className="d-flex">
              <ul className="navbar-nav d-flex align-items-center">
                <li className="nav-item">
                  <a
                    onClick={() => {
                      logout(setLoginState);
                    }}
                    className={isLogin() ? "nav-link" : "nav-link active"}
                    aria-current="page"
                    href="/"
                  >
                    {loginState ? "Logout" : "Login"}
                  </a>
                </li>
                <li className="nav-item mx-2">
                  <CartFill color="white" size={30} />
                </li>
              </ul>
              <ItemCounter cartContent={cartContent} />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
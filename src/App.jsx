import React, { useState } from "react";
import NavBar from "./Components/View/Navbar/NavBar";
import SignIn from "./Components/View/SignIn/SignIn";
import Store from "./Components/View/Store/Store";
import isLogin from "./Service/loginHelper";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

function App() {
  // ***** STATE
  const [cartContent, setCartContent] = useState(0);

  // CASE : || false exist in case there is no token yet in localStorage , in this case, isLogin would return false
  const [loginState, setLoginState] = useState(isLogin() || false);
  return (
    <BrowserRouter>
      <NavBar
        loginState={loginState}
        setLoginState={setLoginState}
        cartContent={cartContent}
      />
      <Switch>
        <Route exact path="/">
          {isLogin() ? (
            <Store cartContent={cartContent} setCartContent={setCartContent} />
          ) : (
            <Redirect to="/signin" />
          )}
        </Route>
        <Route exact path="/signin">
          {isLogin() ? (
            <Redirect to="/" />
          ) : (
            <SignIn setLoginState={setLoginState} />
          )}
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

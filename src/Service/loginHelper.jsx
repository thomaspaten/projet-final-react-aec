// NOTE : Every file in the folder service starts lowercase because they are components, they are functions

// NOTE : Managing the login state and the localStorage in the same functions is
// a design choice to make them always intertwine wich prevents futur potential bugs
// by making sure they are always in sync.

const TOKEN_KEY = "jwt";

export const login = (setLoginState) => {
  localStorage.setItem(TOKEN_KEY, "User is logged in");
  setLoginState(true);
};

export const logout = (setLoginState) => {
  localStorage.removeItem(TOKEN_KEY);
  setLoginState(false);
};

export const isLogin = () => {
  if (localStorage.getItem(TOKEN_KEY)) {
    return true;
  } else {
    return false;
  }
};

export default isLogin;

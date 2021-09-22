import React from "react";

function cartHelper(cartContent, setCartContent, systemName, amount) {
  // CASE : The cart is empty, we want to add the first item in it
  if (cartContent.length === 0 && amount > 0) {
    let newObjCart = [{ [systemName]: 1 }];
    localStorage.setItem("cartContent", JSON.stringify(newObjCart));
    setCartContent(JSON.parse(localStorage.getItem("cartContent")));
    return;
  }

  // CASE : There is nothing in the cart, we want to remove from it
  else if (cartContent.length === 0 && amount === -1) {
    return;
  }

  // NOTE : If the LocalStorage gets a change , it get set as the current state of cartContent.
  // That way, LocalStorage remain always the only source of truth wich helps to avoid a lot of potential life cycle problems.

  // CASE : the cart is not empty

  for (let i = 0; i < cartContent.length; i++) {
    // CASE : the item already exist in the cart

    if (systemName in cartContent[i]) {
      // CASE : The user remove an item from the list rendered wich, remove every unit of that item from the cart
      if (amount === "all") {
        cartContent[i][systemName] = 0;
        localStorage.setItem("cartContent", JSON.stringify(cartContent));
        setCartContent(JSON.parse(localStorage.getItem("cartContent")));
        return;
      }

      // CASE : The user is trying to set an amount of an item below 0

      if (amount === -1 && cartContent[i][systemName] === 0) {
        return;
      }

      // CASE : The user adds one more of an already existing item

      cartContent[i][systemName] += amount;
      localStorage.setItem("cartContent", JSON.stringify(cartContent));
      setCartContent(JSON.parse(localStorage.getItem("cartContent")));

      return;
    }
  }
  // CASE : the cart is not empty but the item doesnt exist in the cart
  let newObjCart = { [systemName]: 1 };
  cartContent = [...cartContent, newObjCart];
  localStorage.setItem("cartContent", JSON.stringify(cartContent));
  setCartContent(JSON.parse(localStorage.getItem("cartContent")));
}

export default cartHelper;
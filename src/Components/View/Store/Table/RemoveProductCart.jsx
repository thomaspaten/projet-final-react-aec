import React from "react";
import { CartDash } from "react-bootstrap-icons";
import cartHelper from "../../../../Service/cartHelper";

function RemoveProductCart(props) {
  // ***** PROPS

  const systemName = props.productData.systemName;

  // ***** STATES

  const cartContent = props.cartContent;
  const setCartContent = props.setCartContent;

  return (
    <button
      onClick={() => {
        cartHelper(cartContent, setCartContent, systemName, -1);
      }}
      className="btn btn-warning btn-lg "
    >
      <CartDash color="white" size={30} />
    </button>
  );
}

export default RemoveProductCart;
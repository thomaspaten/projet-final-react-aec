import React from "react";
import { CartPlus } from "react-bootstrap-icons";
import cartHelper from "../../../../Service/cartHelper";

function AddItemCart(props) {
  // ***** PROPS

  const systemName = props.productData.systemName;

  // ***** STATES

  const cartContent = props.cartContent;
  const setCartContent = props.setCartContent;

  return (
    <button
      onClick={() => {
        cartHelper(cartContent, setCartContent, systemName, 1);
      }}
      className="btn btn-success btn-lg"
    >
      <CartPlus color="white" size={30} />
    </button>
  );
}

export default AddItemCart;
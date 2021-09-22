import React from "react";
import { Trash } from "react-bootstrap-icons";
import cartHelper from "../../../../Service/cartHelper";

function RemoveProductFromList(props) {
  // ***** PROPS

  const systemName = props.productData.systemName;

  // ***** STATES
  const productDisplay = props.productDisplay;
  const setProductDisplay = props.setProductDisplay;
  const cartContent = props.cartContent;
  const setCartContent = props.setCartContent;

  return (
    <button
      onClick={() => {
        handleRemoveItemList(
          cartHelper,
          cartContent,
          setCartContent,
          systemName,
          setProductDisplay,
          productDisplay
        );
      }}
      className="btn btn-danger btn-lg"
    >
      <Trash color="white" size={30} />
    </button>
  );
}

function handleRemoveItemList(
  cartHelper,
  cartContent,
  setCartContent,
  systemName,
  setProductDisplay,
  productDisplay
) {
  cartHelper(cartContent, setCartContent, systemName, "all");

  setProductDisplay(
    productDisplay.filter((el) => el.systemName !== systemName)
  );
}

export default RemoveProductFromList;
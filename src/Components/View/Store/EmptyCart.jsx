import React from "react";
import { CartX } from "react-bootstrap-icons";

function EmptyCart(props) {
  // ***** STATES
  const setCartContent = props.setCartContent;

  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col mt-5">
          <button
            onClick={() => {
              handleEmptyCart(setCartContent);
            }}
            className="btn btn-danger btn-lg my-4"
          >
            <CartX color="white" size={30} />
          </button>
        </div>
      </div>
    </div>
  );
}

const handleEmptyCart = (setCartContent) => {
  localStorage.removeItem("cartContent");
  return setCartContent([]);
};

export default EmptyCart;
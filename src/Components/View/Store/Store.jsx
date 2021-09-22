import React, { useEffect } from "react";
import EmptyCart from "./EmptyCart";
import ProductTable from "./Table/ProductTable";
import getProductData from "../../../Service/productsData";

function Store(props) {
  // ***** STATES
  const cartContent = props.cartContent;
  const setCartContent = props.setCartContent;

  // NOTE : Here the cartContent is initialized with the carContent in localStorage , that way
  // the content of the cart remains intact even if the user close his browser.

  useEffect(() => {
    if (localStorage.getItem("cartContent") === null) {
      localStorage.setItem("cartContent", JSON.stringify([]));
      setCartContent(JSON.parse(localStorage.getItem("cartContent")));
    } else {
      setCartContent(JSON.parse(localStorage.getItem("cartContent")));
    }
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <EmptyCart setCartContent={setCartContent} />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <ProductTable
            cartContent={cartContent}
            setCartContent={setCartContent}
            getProductData={getProductData}
          />
        </div>
      </div>
    </div>
  );
}

export default Store;
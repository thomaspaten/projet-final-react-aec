import React, { useEffect, useState } from "react";

function ThisProductCounter(props) {
  // ***** PROPS

  const productData = props.productData;

  // ***** STATES
  const cartContent = props.cartContent;

  const systemName = productData.systemName;
  let nbProduct = 0;

  if (cartContent.length !== 0 && cartContent.length !== undefined) {
    cartContent.forEach((el, index) => {
      if (systemName in el) {
        nbProduct = cartContent[index][systemName];
      }
    });
  }

  return (
    <button className="btn btn-info btn-lg" size="60px" disabled>
      {nbProduct}
    </button>
  );
}
export default ThisProductCounter;
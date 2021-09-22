import React from "react";
import ThisProductCounter from "./ThisProductCounter";
import ShowProductInfo from "./ShowProductInfo";
import AddItemToCart from "./AddItemCart";
import RemoveItemList from "./RemoveProductFromList";
import RemoveItemCart from "./RemoveProductCart";

function ProductRow(props) {
  // ***** PROPS

  const productData = props.productData;

  // ***** STATES

  const cartContent = props.cartContent;
  const setCartContent = props.setCartContent;
  const productDisplay = props.productDisplay;
  const setProductDisplay = props.setProductDisplay;

  return (
    <tr>
      <th scope="row">
        {" "}
        <img src={productData.img} alt={productData.name} />
      </th>
      <td>{productData.name}</td>
      <td>
        <ThisProductCounter
          productData={productData}
          cartContent={cartContent}
        />
      </td>
      <td>
        <ShowProductInfo productData={productData} />
      </td>
      <td>
        <div className="d-grid gap-3 d-flex">
          <AddItemToCart
            productData={productData}
            cartContent={cartContent}
            setCartContent={setCartContent}
          />
          <RemoveItemCart
            productData={productData}
            cartContent={cartContent}
            setCartContent={setCartContent}
          />
          <RemoveItemList
            productData={productData}
            productDisplay={productDisplay}
            setProductDisplay={setProductDisplay}
            cartContent={cartContent}
            setCartContent={setCartContent}
          />
        </div>
      </td>
    </tr>
  );
}
export default ProductRow;
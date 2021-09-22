import React, { useEffect, useMemo, useState } from "react";
import ProductRow from "./ProductRow";

function ProductTable(props) {
  // ***** PROPS
  const getProductData = props.getProductData;

  // ***** STATES
  const [productDisplay, setProductDisplay] = useState([]);
  const cartContent = props.cartContent;
  const setCartContent = props.setCartContent;

  // NOTE : If this was link to an API we would use the promise prototype .then
  useEffect(() => {
    let mounted = true;
    if (mounted) {
      setProductDisplay(getProductData);
    }
    // NOTE : This is the Clean up Function that gets applied after each render
    return () => (mounted = false);
  }, []);

  return (
    <table className="table">
      <tbody>
        {productDisplay.map((item) => {
          return (
            <ProductRow
              key={item.id}
              productDisplay={productDisplay}
              setProductDisplay={setProductDisplay}
              productData={item}
              cartContent={cartContent}
              setCartContent={setCartContent}
            />
          );
        })}
      </tbody>
    </table>
  );
}
export default ProductTable;
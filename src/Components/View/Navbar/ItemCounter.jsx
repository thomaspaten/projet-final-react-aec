function ItemCounter(props) {
  // ***** STATES
  const cartContent = props.cartContent;
  let nbItemCart = 0;

  // NOTE : Here we look for the number of items in the cart in state , instead of the cart in localStorage
  // that way, the number of item in cart, can't be seen on the UI when not connected

  // CASE : If they are items in the cart, find how many, otherwise default is already 0.

  if (cartContent.length > 0) {
    const reducer = (previousValue, currentValue) => {
      return previousValue + Object.values(currentValue)[0];
    };
    nbItemCart = cartContent.reduce(reducer, 0);
  }

  return (
    <ul className="navbar-nav d-flex align-items-center bg-light p-1 rounded">
      <li className="nav-item ms-1">
        <span className="btn btn-outline-dark">{nbItemCart}</span>
      </li>
      <li className="nav-item ms-2">Products</li>
    </ul>
  );
}

export default ItemCounter;
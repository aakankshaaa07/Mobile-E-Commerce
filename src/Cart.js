import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faArrowLeft, faTrash, faArrowRight } from '@fortawesome/free-solid-svg-icons';

function Cart() {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Abstract Print Shirt", price: 2700, quantity: 2, image: "/assets/shirt2.png", size: "M" },
    { id: 2, name: "Stretch Shirt", price: 1590, quantity: 2, image:"/assets/shirt3.png", size: "S" },
    { id: 3, name: "Pixelated Printed Shirt", price: 2250, quantity: 1, image:"/assets/shirt5.png", size: "M" },
  ]);

  // Function is called when the quantity input for an item is changed and it updates the cartItems state
  const handleQuantityChange = (id, increment) => {
    const updatedCartItems = cartItems.map((item) => {
      if (item.id === id) {
        const newQuantity = item.quantity + increment;
        return { ...item, quantity: newQuantity > 0 ? newQuantity : 0 };
      }
      return item;
    });
    setCartItems(updatedCartItems);
  };

  // function removes an item from the cart when the "Delete" button is clicked
  const handleDeleteItem = (id) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCartItems);
  };

  // function calculates the total cost of all items in the cart
  const calculateTotalCost = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="Cart">
      <div className="cartHeader">
        <Link to={`/`}><FontAwesomeIcon icon={faArrowLeft} style={{width: "25px", height: "25px"}}/></Link>
        <h2>Details</h2>
        <FontAwesomeIcon icon={faBell} style={{width: "25px", height: "25px"}}/>
      </div>

      {/* Rendering the cart items */}
      {cartItems.map((item) => (
        <div key={item.id}>
          <div className="cartCard">
            <img src={process.env.PUBLIC_URL + item.image} alt={item.name} style={{width: "20%", height: "20%", borderRadius: "5px", marginRight: "15px", border: "1px solid #00000033"}}></img>
            <div className="cartdetails">
              <div className="cartHeader">
                <p className="cartProductName">{item.name}</p>
                <button onClick={() => handleDeleteItem(item.id)}><FontAwesomeIcon icon={faTrash} style={{width: "15px", height: "15px", color: "#F60000"}}/></button>
              </div>
              <p className="cartProductSize">Size: {item.size}</p>
              <div className="cardFooter">
                <p className="cartProductCost">INR {item.price}</p>
                <div className="cartProductQuantity">
                  <button onClick={() => handleQuantityChange(item.id, -1)}>-</button>
                  <span style={{fontSize: "14px", margin: "0 7px"}}>{item.quantity}</span>
                  <button onClick={() => handleQuantityChange(item.id, 1)}>+</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
      <input
        className="voucherInput"
        type="text"
        placeholder="Add a voucher"
      />
      <div className="pricing">
        <div className="priceDivision">
          <p className="priceTitle">Sub-total</p>
          <p className="Value">INR {calculateTotalCost()}</p>
        </div>
        <div className="priceDivision">
          <p className="priceTitle">VAT (%)</p>
          <p className="Value">INR 0</p>
        </div>
        <div className="priceDivision">
          <p className="priceTitle">Shipping Fee</p>
          <p className="Value">INR 80</p>
        </div>
      </div>
      <div className="totalPrice">
        <p className="priceTotal">Total</p>
        <p className="Value">INR {calculateTotalCost() + 80}</p>
      </div>
      <div className="cartFooter">
        <button>Checkout <FontAwesomeIcon icon={faArrowRight} style={{marginLeft: "10px"}}/></button>
      </div>
    </div>
  );
};

export default Cart;

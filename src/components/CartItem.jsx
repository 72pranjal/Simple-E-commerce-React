import React, { useState, useEffect } from "react";

const CartItem = ({ cartItems, setCartItems }) => {
  const [amount, setAmount] = useState(0);

  const hanldelRemove = (id)=> {
    let updateItem = cartItems.filter(item=> item.id !== id)
    setCartItems(updateItem)
  }
  useEffect(() => {
    let sum = 0;
    cartItems.forEach((item) => {
      sum += item.price;
    });
    setAmount(sum);
  }, [cartItems]);
  return (
    <div className="cart-container">
      <h1>Cart Items</h1>

      <div className="cart-product">
        <ul className="item-list">
          {cartItems.length > 0 ? (
            cartItems.map((item, index) => (
              <li key={index}>
                <img src={item.image} alt="" />
                <p className="name">{item.title.slice(0, 15)}</p>
                <p className="price">₹ {item.price}</p>
                <button onClick={()=> hanldelRemove(item.id)} className="remove">Remove</button>
              </li>
            ))
          ) : (
            <p className="no-items">No items in the cart</p>
          )}
        </ul>

        {amount > 0 && (
          <div className="cart-total">
            <div className="amount">
              <p>Total Amount:</p>
              <p>₹ {amount}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default CartItem;

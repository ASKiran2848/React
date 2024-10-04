import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/cart.css';

const Cart = ({ cart, onAdd, onRemove }) => {
  const navigate = useNavigate();
  const totalAmount = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  const handlePlaceOrder = () => {
    navigate('/order-confirmation');
  };

  return (
    <div className="cart-container">
      <h2>Cart</h2>
      {cart.length === 0 ? (
        <p>No items in the cart.</p>
      ) : (
        <>
          <ul className="cart-list">
            {cart.map((item, index) => (
              <li key={index} className="cart-item">
                <img src={item.image} alt={item.name} className="cart-item-image" />
                <div className="cart-item-details">
                  <span className="cart-item-name">{item.name}</span>
                  <span className="cart-item-price">₹{item.price}</span>
                  <div className="cart-item-quantity">
                    <button onClick={() => onRemove(item)} enabled={item.quantity === 1}>−</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => onAdd(item)}>+</button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <div className="cart-total">
            <strong>Total Amount: ₹{totalAmount.toFixed(2)}</strong>
          </div>
          <button className="place-order-button" onClick={handlePlaceOrder}>Place Order</button>
        </>
      )}
    </div>
  );
};

export default Cart;

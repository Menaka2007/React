import React from 'react';
import { useCart } from './CartContext';
import './Cart.css';

function Cart() {
  const { cartItems, removeFromCart, updateQuantity, getTotal } = useCart();

  if (cartItems.length === 0) {
    return (
      <div className="cart-container">
        <h2>Your Cart is Empty!</h2>
        <p>Add some products to see them here.</p>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <h1>Your Cart ({cartItems.length} items)</h1>
      <div className="cart-items">
        {cartItems.map(item => (
          <div key={item._id} className="cart-item">
            <img src={item.image} alt={item.name} className="cart-image" />
            <div className="cart-info">
              <h3>{item.name}</h3>
              <p className="cart-price">{item.price} each</p>
              <div className="quantity-controls">
                <button className="qty-btn" onClick={() => updateQuantity(item._id, (item.quantity || 1) - 1)}>-</button>
                <span className="quantity">Qty: {item.quantity || 1}</span>
                <button className="qty-btn" onClick={() => updateQuantity(item._id, (item.quantity || 1) + 1)}>+</button>
              </div>
              <p className="item-total">Total: ₹{(() => {
                const priceStr = item.price.replace('₹', '').replace('$', '').replace(/,/g, '');
                const price = parseFloat(priceStr) || 0;
                return (price * (item.quantity || 1)).toLocaleString('en-IN');
              })()}</p>
              <button className="remove-btn" onClick={() => removeFromCart(item._id)}>Remove</button>
            </div>
          </div>
        ))}
      </div>
      <div className="cart-total">
        <h2>Total: ₹{getTotal()}</h2>
        <button className="checkout-btn">Proceed to Checkout</button>
      </div>
    </div>
  );
}

export default Cart;

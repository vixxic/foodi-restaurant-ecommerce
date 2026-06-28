import "../styles/sections/Cart.css";
import { AiOutlineDelete } from "react-icons/ai";

import { useContext } from "react";
import { GlobalContext } from "../globalContext/GlobalContext";

function Cart() {
  const { cartItems } = useContext(GlobalContext);

  return (
    <div className="cart-container section">
      <h1 className="cart-title">Your Cart</h1>

      <div className="cart-layout">
        <div className="cart-items-list">
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item-card">
              <img src={item.image} alt={item.name} className="item-image" />

              <div className="item-details">
                <h3 className="item-name">{item.name}</h3>
                <p className="item-custom">{item.customization}</p>
                <p className="item-price">${item.price.toFixed(2)}</p>
              </div>

              <div className="item-actions">
                <div className="quantity-controller">
                  <button className="qty-btn">-</button>
                  <span className="qty-value">{item.quantity}</span>
                  <button className="qty-btn">+</button>
                </div>
                <button className="delete-btn">
                  <AiOutlineDelete color="#AF2D33" size={20} />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="order-summary-card">
          <h2 className="summary-title">Order Summary</h2>

          <div className="summary-row">
            <span>Subtotal</span>
            <strong>$55.00</strong>
          </div>
          <div className="summary-row">
            <span>Tax (8%)</span>
            <strong>$4.40</strong>
          </div>
          <div className="summary-row">
            <span>Delivery Fee</span>
            <span className="free-text">FREE</span>
          </div>

          <hr className="summary-divider" />

          <div className="summary-row total-row">
            <span>Total</span>
            <span className="total-price">$59.40</span>
          </div>

          <div className="promo-section">
            <label className="promo-label">Promo Code</label>
            <div className="promo-input-group">
              <input
                type="text"
                placeholder="Enter code"
                className="promo-input"
              />
              <button className="promo-btn">Apply</button>
            </div>
          </div>

          <button className="checkout-btn">
            Proceed to Checkout
            <span className="arrow-icon">→</span>
          </button>

          <p className="secure-text">Secure checkout powered by Stripe</p>
        </div>
      </div>
    </div>
  );
}

export default Cart;

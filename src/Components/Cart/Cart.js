import React, {useContext, useEffect, useState} from "react";
import {CartContext} from "../../context/CartContext";
import './cart.css'
import {images} from "../Item/image";

const Cart = () => {

  const { items } = useContext(CartContext);
  const { removeFromCart, clearCart, discountedIds } = useContext(CartContext);

  const [showCongrats, setShowCongrats] = useState(false);
  const handleShowCongrats = () => setShowCongrats(true);

  useEffect(() => {
    setShowCongrats(false);
  }, []);

  const [billingInfo, setBillingInfo] = useState({
    address: "",
    postalCode: "",
    email: "",
    phone: "",
  });

  const handleBillingInfoChange = (event) => {
    const { name, value } = event.target;
    setBillingInfo((prevState) => ({ ...prevState, [name]: value }));
  };

  const [paymentMethod, setPaymentMethod] = useState("");

  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
  }

  const getTotalPrice = () => {
    let totalPrice = 0;
    for (const item of items) {
      totalPrice += item.price * item.quantity;
    }
    return totalPrice.toFixed(2);
  };

  function getWording(item) {
    return item.quantity === 1 ? `${item.name}` : `${item.name} (${item.quantity})`;
  }

  return (
    <div className={'whole-container'}>
      <h1> Cart </h1>
      <div className={'cart-container'}>
        <div className={'info-container'}>
          <div className={"billing-info"}>
            <h3>Where do you want to receive or pick your purchase?</h3>
            <form>
              <div>
                <label>
                  Address:
                  <input
                      type="text"
                      name="address"
                      value={billingInfo.address}
                      onChange={handleBillingInfoChange}
                      required
                  />
                </label>
                <label>
                  Postal Code:
                  <input
                      type="text"
                      name="postalCode"
                      value={billingInfo.postalCode}
                      onChange={handleBillingInfoChange}
                      required
                  />
                </label>
              </div>
              <div>
                <label>
                  Email:
                  <input
                      type="email"
                      name="email"
                      value={billingInfo.email}
                      onChange={handleBillingInfoChange}
                      required
                  />
                </label>
                <label>
                  Phone:
                  <input
                      type="tel"
                      name="phone"
                      value={billingInfo.phone}
                      onChange={handleBillingInfoChange}
                      required
                  />
                </label>
              </div>
            </form>
          </div>
          <div className="payment-info">
            <h3>Please choose desired payment method: </h3>
            <form>
              <div className={'payment-info-div'}>
                <label>
                  <input
                      type="radio"
                      name="paymentMethod"
                      value="creditCard"
                      checked={paymentMethod === "creditCard"}
                      onChange={handlePaymentMethodChange}
                      required
                  />
                  Credit Card
                </label>
                <label>
                  <input
                      type="radio"
                      name="paymentMethod"
                      value="debitCard"
                      checked={paymentMethod === "debitCard"}
                      onChange={handlePaymentMethodChange}
                      required
                  />
                  Debit Card
                </label>
                <label>
                  <input
                      type="radio"
                      name="paymentMethod"
                      value="mercadoPago"
                      checked={paymentMethod === "mercadoPago"}
                      onChange={handlePaymentMethodChange}
                      required
                  />
                  Mercado Pago
                </label>
                <label>
                  <input
                      type="radio"
                      name="paymentMethod"
                      value="modo"
                      checked={paymentMethod === "modo"}
                      onChange={handlePaymentMethodChange}
                      required
                  />
                  MODO
                </label>
              </div>
            </form>
            {
              showCongrats ? (
                  <h2 style={{ color: 'green' }}> Congratulations for the purchase! Details has been sent to the email. </h2>
              ) : null
            }
          </div>
        </div>
        <div className={'cart-items-container'}>
          {items.length === 0 ? (
              <p className={'cart-empty'}>Cart is empty, don't forget to add products and take advantage of discounts!</p>
          ) : (
              <ul className={'cart-list'}>
                {items.map((item) => (
                    <div className="cart-item-cart" key={item.id}>
                      <img
                          src={images[item.img]}
                          className="cart-item-img-cart"
                          alt={item.name}
                      />
                      <li key={item.id}>
                        <div className="cart-item-detail-cart">
                          <div className="cart-item-name">{getWording(item)}</div>
                          <div className="cart-item-price">
                            {discountedIds.includes(parseInt(item.id)) ? (
                                <>
                                  <span className="original-price">${(item.price * item.quantity).toFixed(2)}</span>
                                  <span className="discounted-price">${((item.price - (item.price * 0.10)) * item.quantity).toFixed(2)}</span>
                                </>
                            ) : (
                                <span>${(item.price * item.quantity).toFixed(2)}</span>
                            )}
                          </div>
                        </div>
                        <button className={'cart-remove-btn'} onClick={() => removeFromCart(item)}>Remove</button>
                      </li>
                    </div>
                ))}
              </ul>
          )}
          <p className={'cart-total-price'}> Total Price: ${getTotalPrice()}</p>
          <div className={'cart-buttons'}>
            <button className={'cart-clear-btn'} onClick={() => clearCart()}>Clear Cart</button>
            <button className={'cart-pay-btn'} onClick={handleShowCongrats}> Pay </button>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Cart;

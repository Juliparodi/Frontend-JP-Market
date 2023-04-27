import React, {useContext, useState} from "react";
import {CartContext} from "../../context/CartContext";
import './cart.css'
import {images} from "../Item/image";
import ModalItem from "../ModalItem/ModalItem";
import ModalCart from "../ModalCart/ModalCart";

const Cart = () => {

  const { items } = useContext(CartContext);
  const { removeFromCart, clearCart } = useContext(CartContext);

  const [showModal, setShowModal] = useState(false);
  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

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
      totalPrice += item.price;
    }
    return totalPrice.toFixed(2);
  };

  return (
      <div className={'cart-container'}>
        <h2 className={'cart-title-cart'}>Cart</h2>
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
                    checked={paymentMethod === "mercadopago"}
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
        </div>
        {items.length === 0 ? (
            <p className={'cart-empty'}>Cart is empty, don't forget to add products and take advantage of discounts!</p>
        ) : (
            <ul className={'cart-list'}>
              {items.map((item) => (
                  <span className="cart-item-cart" key={item.id}>
                  <img
                      src={images[item.img]}
                      className="cart-item-img-cart"
                      alt={item.name}
                  />
                  <li key={item.id}>
                    {item.name} - ${item.price}
                    <button className={'cart-remove-btn'} onClick={() => removeFromCart(item)}>Remove</button>
                  </li>
                </span>
              ))}
            </ul>
        )}
        <p className={'cart-total-price'}> Total Price: ${getTotalPrice()}</p>
        <div className={'cart-buttons'}>
          <button className={'cart-clear-btn'} onClick={() => clearCart()}>Clear Cart</button>
          <button className={'cart-pay-btn'} onClick={handleShowModal}>Pay</button>
        </div>
        {
          showModal ? (
              <ModalCart items={items} showModal={showModal} handleCloseModal={handleCloseModal} />
          ) : null
        }
      </div>
  );
};

export default Cart;

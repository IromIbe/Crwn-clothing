import React from "react";
import "./Checkout.scss";
import { useSelector } from "react-redux";
import CheckoutItem from "../checkout-item/CheckoutItem";
import StripeCheckoutButton from "../stripe-button/stripe-button";

function Checkout() {
  const totalPrice = useSelector((state) =>
    state.cart.cartItems.reduce(
      (accumulatedQuantity, cartItem) =>
        accumulatedQuantity + cartItem.quantity * cartItem.price,
      0
    )
  );
  const cartItems = useSelector((state) => state.cart.cartItems);

  return (
    <div className='checkout-page'>
      <div className='checkout-header'>
        <div className='header-block'>
          <span>Product</span>
        </div>
        <div className='header-block'>
          <span>Description</span>
        </div>
        <div className='header-block'>
          <span>Quantity</span>
        </div>
        <div className='header-block'>
          <span>Price</span>
        </div>
        <div className='header-block'>
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <div className='total'>
        <span>TOTAL: ${totalPrice}</span>
      </div>
      <div className='test-warning'>
        *Please use the following test credit card for payments* <br /> 4242
        4242 4242 4242 - Exp: 06/22 - CVV: 123
      </div>
      <StripeCheckoutButton price={totalPrice} />
    </div>
  );
}

export default Checkout;

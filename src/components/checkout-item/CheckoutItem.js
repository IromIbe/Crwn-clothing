import React from "react";
import "./CheckoutItem.scss";
import {
  clearItemFromCart,
  addItem,
  reduceItem,
} from "../../features/redux/cart/cartSlice";
import { useDispatch } from "react-redux";

function CheckoutItem({ cartItem }) {
  const { name, imageUrl, price, quantity } = cartItem;
  const dispatch = useDispatch();
  const handleRemoveFromCart = (cartItem) => {
    dispatch(clearItemFromCart(cartItem));
  };
  const reduceItemFromCart = (cartItem) => {
    dispatch(reduceItem(cartItem));
  };
  const increaseItem = (cartItem) => {
    dispatch(addItem(cartItem));
  };
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => reduceItemFromCart(cartItem)}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>

        <div className="arrow" onClick={() => increaseItem(cartItem)}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div
        className="remove-button"
        onClick={() => handleRemoveFromCart(cartItem)}
      >
        &#10005;
      </div>
    </div>
  );
}

export default CheckoutItem;

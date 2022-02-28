import React from "react";
import "./CheckoutItem.scss";
import { clearItemFromCart } from "../../features/redux/cart/cartSlice";
import { useDispatch } from "react-redux";

function CheckoutItem({ cartItem }) {
  const { name, imageUrl, price, quantity, id } = cartItem;
  const dispatch = useDispatch();
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">{quantity}</span>
      <span className="price">{price}</span>
      <div
        className="remove-button"
        onClick={() => {
          // console.log("heyoo");
          dispatch(clearItemFromCart(id));
        }}
      >
        &#10005;
      </div>
    </div>
  );
}

export default CheckoutItem;

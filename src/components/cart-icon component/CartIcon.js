import React from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import "./CartIcon.scss";
import { useDispatch } from "react-redux";
import { toggle_cart } from "../../features/redux/cart/cartSlice";
import { useSelector } from "react-redux";

function CartIcon() {
  const dispatch = useDispatch();
  const displayNumber = useSelector((state) =>
    state.cart.cartItems.reduce(
      (accumulatedQuantity, cartItem) =>
        accumulatedQuantity + cartItem.quantity,
      0
    )
  );
  return (
    <div className="cart-icon" onClick={() => dispatch(toggle_cart())}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{displayNumber}</span>
    </div>
  );
}

export default CartIcon;

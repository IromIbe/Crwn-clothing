import React from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import "./CartIcon.scss";
import { useDispatch } from "react-redux";
import { toggle_cart } from "../../features/redux/cart/cartSlice";

function CartIcon() {
  const dispatch = useDispatch();
  return (
    <div className='cart-icon' onClick={() => dispatch(toggle_cart())}>
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'>0</span>
    </div>
  );
}

export default CartIcon;

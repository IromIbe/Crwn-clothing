import React from "react";
import "./CartDropdown.scss";
import CustomButton from "../customButton/CustomButton";
import { useSelector } from "react-redux";
import CartItem from "../cart-item component/CartItem";

function CartDropdown() {
  const cartItems = useSelector((state) => state.cart.cartItems);
  return (
    <div className='cart-dropdown'>
      <div className='cart-items'>
        {cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))}
      </div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  );
}

export default CartDropdown;

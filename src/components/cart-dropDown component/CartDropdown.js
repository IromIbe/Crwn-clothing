import React from "react";
import "./CartDropdown.scss";
import CustomButton from "../customButton/CustomButton";

function CartDropdown() {
  return (
    <div className='cart-dropdown'>
      <div className='cart-items'> </div>
      <CustomButton>CHECK OUT</CustomButton>
    </div>
  );
}

export default CartDropdown;

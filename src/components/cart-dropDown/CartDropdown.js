import React from "react";
import "./CartDropdown.scss";
import CustomButton from "../customButton/CustomButton";
import { useSelector } from "react-redux";
import CartItem from "../cart-item component/CartItem";
import { useNavigate } from "react-router-dom";
import { toggle_cart } from "../../features/redux/cart/cartSlice";
import { useDispatch } from "react-redux";

function CartDropdown() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className="empty-message">Your Cart Is Empty</span>
        )}
      </div>
      <CustomButton
        onClick={() => {
          dispatch(toggle_cart());
          return navigate("/checkout");
        }}
      >
        GO TO CHECKOUT
      </CustomButton>
    </div>
  );
}

export default CartDropdown;

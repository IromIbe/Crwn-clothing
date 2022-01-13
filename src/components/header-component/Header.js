import React from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { auth } from "../../firebase/firebase";
import { useSelector } from "react-redux";
import CartIcon from "../cart-icon component/CartIcon";
import CartDropdown from "../cart-dropDown component/CartDropdown";

function Header() {
  const showCartItems = useSelector((state) => state.cart.hidden);
  const user = useSelector((state) => state.users.currentUser);
  // const dispatch = useDispatch();
  return (
    <div className='header'>
      <Link to='/' className='logo-container'>
        <Logo className='logo' />
      </Link>
      <div className='options'>
        <Link to='/shop' className='option'>
          SHOP
        </Link>
        <Link to='/contact' className='option'>
          CONTACT
        </Link>
        {user ? (
          <div className='option' onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link className='option' to='/signIn'>
            SIGN IN
          </Link>
        )}
        <CartIcon />
      </div>
      {showCartItems ? null : <CartDropdown />}
    </div>
  );
}

export default Header;

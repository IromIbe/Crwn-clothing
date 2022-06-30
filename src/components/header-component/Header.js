import React from "react";
import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink,
  OptionDiv,
} from "./header.styles";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { auth } from "../../firebase/firebase";
// import { getAuth, signOut } from "firebase/auth";

import { useSelector } from "react-redux";
import CartIcon from "../cart-icon component/CartIcon";
import CartDropdown from "../cart-dropDown/CartDropdown";

function Header() {
  const showCartItems = useSelector((state) => state.cart.hidden);
  const user = useSelector((state) => state.users.currentUser);
  // const dispatch = useDispatch();
  // const auth = getAuth();

  return (
    <HeaderContainer>
      <LogoContainer to='/'>
        <Logo className='logo' />
      </LogoContainer>
      <OptionsContainer>
        <OptionLink to='/shop'>SHOP</OptionLink>
        <OptionLink to='/contact'>CONTACT</OptionLink>
        {user?.currentUser !== null ? (
          <OptionDiv
            onClick={() => {
              auth.signOut();

              console.log(user?.currentUser === null);
            }}
          >
            SIGN OUT
          </OptionDiv>
        ) : (
          <OptionLink to='/signIn'>SIGN IN</OptionLink>
        )}
        <CartIcon />
      </OptionsContainer>
      {showCartItems ? null : <CartDropdown />}
    </HeaderContainer>
  );
}

export default Header;

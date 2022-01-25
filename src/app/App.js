import React, { useEffect } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { auth, createUserProfileDocument } from "../firebase/firebase";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../features/redux/users/usersSlice";
import Checkout from "../components/checkout/Checkout";
import Homepage from "../pages/homepage/Homepage";
import ShopPage from "../pages/shop/ShopPage";
import Header from "../components/header-component/Header";
import SignInAndSignUpPage from "../pages/sign-in And sign-up Page/SignInAndSignUpPage";
import { onSnapshot } from "firebase/firestore";

function App() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.users.currentUser);
  function onAuthStateChange() {
    return auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        onSnapshot(userRef, (snapshot) => {
          const user = {
            displayName: snapshot.data().displayName,
            email: snapshot.data().email,
          };
          dispatch(
            login({
              id: snapshot.id,
              ...user,
            })
          );
        });
      } else {
        dispatch(
          login({
            currentUser: userAuth,
          })
        );
      }
    });
  }
  useEffect(() => {
    const unsubscribe = onAuthStateChange();
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div>
      {}
      <Header />

      {user?.currentUser === null ? (
        <SignInAndSignUpPage />
      ) : (
        <>
          <Routes>
            <Route path="/" element={<Homepage />} />

            <Route path="/shop" element={<ShopPage />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </>
      )}
    </div>
  );
}

export default App;

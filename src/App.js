import React, { useEffect, useState } from "react";
// import { Counter } from "./features/counter/Counter";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { auth, createUserProfileDocument } from "./firebase/firebase";

import Homepage from "./pages/homepage/Homepage";
import ShopPage from "./pages/shop/ShopPage";
import Header from "./components/header-component/Header";
import SignInAndSignUpPage from "./pages/sign-in And sign-up Page/SignInAndSignUpPage";
import { onSnapshot } from "firebase/firestore";

function App() {
  const [currentUser, setCurrentUser] = useState({
    currentUser: null,
  });

  function onAuthStateChange() {
    return auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        onSnapshot(userRef, (snapshot) => {
          setCurrentUser({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data(),
            },
          });
          console.log(currentUser);
        });
        console.log(currentUser);
      } else {
        setCurrentUser({
          currentUser: userAuth,
        });
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
      <Header currentUser={currentUser.currentUser} />

      {!currentUser.currentUser ? (
        <SignInAndSignUpPage />
      ) : (
        <>
          <Routes>
            <Route path='/' element={<Homepage />} />

            <Route path='/shop' element={<ShopPage />} />
          </Routes>
        </>
      )}
    </div>
  );
}

export default App;

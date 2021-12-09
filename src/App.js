import React from "react";
// import { Counter } from "./features/counter/Counter";
import "./App.css";
import { Route, Routes } from "react-router-dom";

import Homepage from "./pages/homepage/Homepage";
import ShopPage from "./pages/shop/ShopPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Homepage />} />

        <Route path='/shop' element={<ShopPage />} />
      </Routes>
    </div>
  );
}

export default App;

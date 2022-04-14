import React from "react";
import CollectionPage from "../collection/Collection";
import "./ShopPage.scss";
import { Route, Routes } from "react-router-dom";
import CollectionOverview from "../../components/collection-overview/CollectionOverview";

function ShopPage() {
  return (
    <div className="shop-page">
      <Routes>
        <Route path="/" element={<CollectionOverview />} />
        <Route path=":collectionId" element={<CollectionPage />} />
      </Routes>
    </div>
  );
}

export default ShopPage;

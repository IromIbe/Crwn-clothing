import React from "react";
import CollectionPreview from "../../components/Collection-preview/CollectionPreview";
import SHOP_DATA from "./shopData";
import "./ShopPage.scss";

function ShopPage() {
  const collections = SHOP_DATA;
  return (
    <div className='shop-page'>
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
}

export default ShopPage;

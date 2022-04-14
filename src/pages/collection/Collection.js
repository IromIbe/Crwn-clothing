import React from "react";
import "./collection.scss";
import CollectionItem from "../../components/collection-item/CollectionItem";
import { selectShopCollection } from "../../features/redux/shop/shop.selector";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

function CollectionPage() {
  const { collectionId } = useParams();
  // console.log(collectionId, "mymy");
  const collection = useSelector(selectShopCollection(collectionId));
  // console.log(collection, "xfg");
  const { title, items } = collection;

  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map((item) => (
          <CollectionItem item={item} key={item.id} />
        ))}
      </div>
      {/* <h3>ergehrytuis</h3> */}
    </div>
  );
}

export default CollectionPage;

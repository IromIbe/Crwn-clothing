import React from "react";
import "./collectionOverview.scss";
import { useSelector } from "react-redux";
import { selectCollectionsForPreview } from "../../features/redux/shop/shop.selector";
import CollectionPreview from "../Collection-preview/CollectionPreview";

function CollectionOverview() {
  const collections = useSelector(selectCollectionsForPreview);

  return (
    <div className='collection-overview'>
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
}

export default CollectionOverview;

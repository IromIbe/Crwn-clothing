import React from "react";
import "./CollectionItem.scss";
import CustomButton from "../customButton/CustomButton";
import { useDispatch } from "react-redux";
import { addItem } from "../../features/redux/cart/cartSlice";

export default function CollectionItem({ item }) {
  const { name, imageUrl, price } = item;
  const dispatch = useDispatch();

  return (
    <div className='collection-item'>
      <div
        className='image'
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className='collection-footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>

      <CustomButton inverted onClick={() => dispatch(addItem(item))}>
        Add To Cart
      </CustomButton>
    </div>
  );
}

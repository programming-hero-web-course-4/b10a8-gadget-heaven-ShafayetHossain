import React, { useState } from "react";
import { TiDelete } from "react-icons/ti";

const StoreCard = ({ data, handleDeleteCard}) => {
  const { product_id, product_title, product_image, price, description } = data;

  return (
    <div className="flex items-center p-4 gap-5 mb-4 rounded-xl shadow-xl bg-white">
      <div className="">
        <img className=" rounded-xl" src={product_image} alt="" />
      </div>
      <div>
        <h1 className="font-bold text-xl">{product_title}</h1>
        <p className="opacity-70">{description}</p>
        <p className="font-bold">Price ${price}</p>
      </div>
      <div>
        <button
          onClick={() => handleDeleteCard(product_id)}
          className="text-red-500"
        >
          <TiDelete size={48} />
        </button>
      </div>
    </div>
  );
};

export default StoreCard;

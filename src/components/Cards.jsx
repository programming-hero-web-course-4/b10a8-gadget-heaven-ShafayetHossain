import React from "react";
import { Link } from "react-router-dom";
import Banner from "./Banner";

const Cards = ({ card }) => {
    const {product_id,product_image,price} = card
  return (
    <div className="">
      <div className="bg-slate-200 p-4 rounded-xl shadow-xl ">
        <div className="">
          <img className="rounded-xl w-full" src={product_image} alt="" />
        </div>
        <h1 className="mt-1">{card.product_title}</h1>
        <p className="my-2">Price: ${price}</p>
        <Link to={`/product/${product_id}`}>
          <button class="btn btn-outline rounded-full hover:bg-[#9538E2] text-[#9538E2] font-bold">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Cards;

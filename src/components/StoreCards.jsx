import React, { useEffect, useState } from "react";
import StoreCard from "./StoreCard";
import toast from "react-hot-toast";

const StoreCards = () => {
  const [data, setData] = useState(
    () => JSON.parse(localStorage.getItem("cards")) || []
  );

  const sumPrice = data.reduce(getSum, 0);
  function getSum(total, num) {
    return total + num.price;
  }

  const handlePurchase = () => {
    setData([]);
    localStorage.removeItem("cards");
    toast.success("Purchase Successfully!");
  };

  // Check Here

    const handleSortPrice = () => {
    const sorted = [...data].sort(function (a, b) {
      return b.price - a.price;
    });
    setData(sorted);
    toast.success("Sorted Successfully!");
  };


  const handleDeleteCard = (id) => {
    const updatedData = data.filter((cards) => {
      return cards.product_id != id;
    });
    setData(updatedData);
    localStorage.setItem("cards", JSON.stringify(updatedData));
    toast.error("Product Remove Carts!", {
      duration: 2000,
    });
  };



  return (
    <div>
      <div className="flex justify-between p-4">
        <h1 className="font-bold text-2xl">Cart</h1>
        <div className="flex justify-between items-center gap-x-3">
          <h1 className="font-bold text-xl">
            Total cost: $<span>{sumPrice.toFixed(2)}</span>
          </h1>
          <button
          onClick={handleSortPrice}
            className="badge badge-warning font-bold"
          >
            Sort by Price
          </button>
          <button
            onClick={handlePurchase}
            className="badge badge-success font-bold"
          >
            Purchase
          </button>
        </div>
      </div>
      <div className="bg-slate-100 p-3 rounded-b-xl">
        {data.map((data) => (
          <StoreCard
            key={data.product_id}
            data={data}
            handleDeleteCard={handleDeleteCard}
          ></StoreCard>
        ))}
      </div>
    </div>
  );
};

export default StoreCards;

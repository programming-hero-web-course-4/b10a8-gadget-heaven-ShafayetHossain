import React, { useEffect, useState } from "react";
import StoreCard from "./StoreCard";
import toast from "react-hot-toast";


const WishCards = () => {

  const [data, setData] = useState(
    () => JSON.parse(localStorage.getItem("wishlist")) || []
  );


  const handleDeleteCard = (id) => {
    const updatedData = data.filter((cards) => {
      return cards.product_id != id;
    });
    setData(updatedData);
    localStorage.setItem("wishlist", JSON.stringify(updatedData));
    toast.error("Cart Remove Wishlist!", {
      duration: 2000,
    });
  };

  return (
    <div>
      {data.map((data) => (
        <StoreCard
          key={data.product_id}
          data={data}
          handleDeleteCard={handleDeleteCard}
        ></StoreCard>
      ))}
    </div>
  );
};

export default WishCards;

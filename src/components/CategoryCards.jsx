import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import { useLoaderData } from "react-router-dom";

const CategoryCards = () => {
  const gadgets = useLoaderData();
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch("gadgets.json")
      .then((res) => res.json())
      .then((data) => setCards(data));
  }, []);

  const products = cards.filter((product) => product.category == gadgets);

  return products.length ? (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 mb-9">
      {products.map((card) => (
        <Cards key={card.product_id} card={card}></Cards>
      ))}
    </div>
  ) : (
    <div className="lg:ml-96">
      <h1 className="font-bold text-2xl lg:text-4xl">***Data not found***</h1>
    </div>
  );
};

export default CategoryCards;

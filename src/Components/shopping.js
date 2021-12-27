import React, { useState } from "react";
import "./shopping/shopping.css";
import Categories from "./shopping/categories";
import ShoppingCards from "./shopping/shoppingCards";
import shoppingData from "./shopping/shoppingData";

const allCategories = [
  "all",
  ...new Set(shoppingData.map((item) => item.category)),
];

function Shopping() {
  const [items, setItems] = useState(shoppingData);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === "all") {
      setItems(shoppingData);
      return;
    }
    const newItems = shoppingData.filter((item) => item.category === category);
    setItems(newItems);
  };

  return (
    <section>
      <Categories categories={categories} filterItems={filterItems} />
      <ShoppingCards items={items} />
    </section>
  );
}

export default Shopping;

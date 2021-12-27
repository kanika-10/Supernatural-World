import React from "react";
import { Link } from "react-router-dom";

const Categories = ({ categories, filterItems }) => {
  return (
    <section className="menu section">
      <div className="menu-title">
        <h2>Our Categories</h2>
        <div className="underline"></div>
        {categories.map((category, index) => {
          return (
            <button
              type="button"
              className="filter-btn"
              key={index}
              onClick={() => {
                filterItems(category);
              }}
            >
              {category}
            </button>
          );
        })}
        <Link to="/shopping-cart">
          <button type="button" className="shopping-cart">
            Go to Cart
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Categories;

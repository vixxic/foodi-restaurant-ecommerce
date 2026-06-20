import "../../styles/sections/Shop.css";
import { FiSearch } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";

import data from "../../Data";

import { FaHeart, FaRegHeart, FaStar } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import { useEffect, useState } from "react";
import { LuDessert } from "react-icons/lu";

function Shop() {
  const [products] = useState(data);

  const [filteredData, setFilteredData] = useState("all");

  const handleLike = () => {
    // e.stopPropagation();
    alert("Please Login first");
  };

  const handleCategory = (category) => {
    setFilteredData(category);
  };

  const displayedProducts =
    filteredData === "all"
      ? products
      : products.filter((product) => product.mealType === filteredData);

  return (
    <div className="shop-section section">
      <div className="menu-filter-container">
        <div className="categories-group">
          <button
            onClick={() => {
              handleCategory("all");
            }}
            className={`category-btn ${filteredData === "all" ? "active" : ""}`}
          >
            All
          </button>
          <button
            onClick={() => {
              handleCategory("Main Dish");
            }}
            className={`category-btn ${filteredData === "Main Dish" ? "active" : ""}`}
          >
            Main Dish
          </button>
          <button
            onClick={() => {
              handleCategory("Appetizer");
            }}
            className={`category-btn ${filteredData === "Appetizer" ? "active" : ""}`}
          >
            Appetizer
          </button>
          <button
            onClick={() => {
              handleCategory("Dessert");
            }}
            className={`category-btn ${filteredData === "Dessert" ? "active" : ""}`}
          >
            Dessert
          </button>
          <button
            onClick={() => {
              handleCategory("Drinks");
            }}
            className={`category-btn ${filteredData === "Drinks" ? "active" : ""}`}
          >
            Drinks
          </button>
        </div>

        <div className="actions-group">
          <div className="search-wrapper">
            <FiSearch />

            <input
              type="text"
              placeholder="Search dishes..."
              className="search-input"
            />
          </div>

          <div className="sort-dropdown">
            <span>Popular</span>
            <IoIosArrowDown />
          </div>
        </div>
      </div>

      <hr style={{ margin: 0 }} />

      <div className="product-con">
        {displayedProducts.map((product) => (
          <div key={product.id} className="product-card">
            <div onClick={handleLike} className="favorite-btn">
              {product.like === true ? <FaHeart /> : <FaRegHeart />}
            </div>

            <img
              className="product-image"
              src={product.image}
              alt={product.name}
            />

            <h3 className="product-title">{product.name}</h3>

            <div className="product-tags-con">
              {product.tags.map((tag, index) => (
                <p className="tag-badge">{tag}</p>
              ))}
            </div>

            <p className="product-price">
              <span>$</span>
              {product.price}
            </p>

            <div className="product-rating">
              <FaStar />{" "}
              <span>
                {product.rating}({product.reviewCount})
              </span>
            </div>

            <button className="add-btn">
              <FaPlus />
            </button>
          </div>
        ))}

        {displayedProducts.length === 0 && (
          <p className="no-data">No dishes found in this category.</p>
        )}
      </div>
    </div>
  );
}

export default Shop;

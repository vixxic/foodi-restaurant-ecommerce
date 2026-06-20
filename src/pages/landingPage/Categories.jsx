import "../../styles/sections/Categories.css";
import PlainBox from "../../components/PlainBox";

import data from "../../Data";
import { useState } from "react";

function Categories() {
  const [products] = useState(data);

  const mainDishCount = products.filter(
    (product) => product.mealType === "Main Dish",
  ).length;
  const appetizerCount = products.filter(
    (product) => product.mealType === "Appetizer",
  ).length;
  const dessertCount = products.filter(
    (product) => product.mealType === "Dessert",
  ).length;
  const drinksCount = products.filter(
    (product) => product.mealType === "Drinks",
  ).length;

  return (
    <div id="categories" className="category-section section">
      <h1 className="section-title">Popular Categories</h1>

      <div className="categories-con">
        <PlainBox
          img="/categories/Burger.png"
          title="Main Dish"
          section="category"
          data={mainDishCount}
        />
        <PlainBox
          img="/categories/Sandwitch.png"
          title="Appetizer"
          section="category"
          data={appetizerCount}
        />
        <PlainBox
          img="/categories/IceCream.png"
          title="Dessert"
          section="category"
          data={dessertCount}
        />
        <PlainBox
          img="/categories/OrangeJuice.png"
          title="Drinks"
          section="category"
          data={drinksCount}
        />
      </div>
    </div>
  );
}

export default Categories;

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
  const [products, setProducts] = useState([]);
  setProducts(data);

  const [filteredData, setFilteredData] = useState("all");

  useEffect(() => {
    const handleLike = () => {
      alert("Please Login first");
    };
  }, []);

  const handleCategory = (category) => {
    if (category === "main dish") {
      setFilteredData("main dish");
    } else if (category === "appetizer") {
      setFilteredData("appetizer");
    } else if (category === "dessert") {
      setFilteredData("dessert");
    } else if (category === "drinks") {
      setFilteredData("drinks");
    } else {
      setFilteredData("all");
    }
  };

  return (
    <div className="shop-section section">
      <div className="menu-filter-container">
        <div className="categories-group">
          <button
            onClick={() => {
              handleCategory("all");
            }}
            className="category-btn active"
          >
            All
          </button>
          <button
            onClick={() => {
              handleCategory("main dish");
            }}
            className="category-btn "
          >
            Main Dish
          </button>
          <button
            onClick={() => {
              handleCategory("appetizer");
            }}
            className="category-btn"
          >
            Appetizer
          </button>
          <button
            onClick={() => {
              handleCategory("dessert");
            }}
            className="category-btn"
          >
            Dessert
          </button>
          <button
            onClick={() => {
              handleCategory("drinks");
            }}
            className="category-btn"
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
        {data.map((product) => (
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
      </div>
    </div>
  );
}

export default Shop;

//nomor 8

// import "./App.css";
// import { useEffect, useState } from "react";

// function App() {
//   const [products, setProducts] = useState([]);
//   const [filteredData, setFilteredData] = useState("all");

//   const handleCategory = (category) => {
//     if (category === "men's clothing") {
//       setFilteredData("men's clothing");
//     } else if (category === "jewelery") {
//       setFilteredData("jewelery");
//     } else if (category === "electronics") {
//       setFilteredData("electronics");
//     } else if (category === "women's clothing") {
//       setFilteredData("women's clothing");
//     } else {
//       setFilteredData("all");
//     }
//   };

//   const displayedProducts =
//     filteredData === "all"
//       ? products
//       : products.filter((product) => product.category === filteredData);

//   useEffect(() => {
//     const getData = async () => {
//       const respone = await fetch("https://fakestoreapi.com/products");
//       const data = await respone.json();

//       setProducts(data);
//     };

//     getData();
//   }, []);

//   return (
//     <>
//       <div>
//         <h1>Categorys</h1>
//         <div style={{ display: "flex", gap: "10px" }}>
//           <button onClick={() => handleCategory("all")}>All</button>
//           <button onClick={() => handleCategory("men's clothing")}>
//             men clothing
//           </button>
//           <button onClick={() => handleCategory("jewelery")}>jewelery</button>
//           <button onClick={() => handleCategory("electronics")}>
//             electronic
//           </button>
//           <button onClick={() => handleCategory("women's clothing")}>
//             women clothing
//           </button>
//         </div>
//         <div>
//           {displayedProducts.map((product) => (
//             <div key={product.id}>
//               <h2>{product.title}</h2>
//               <img src={product.image} alt={product.title} width="150" />
//               <p>${product.price}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// }

// export default App;

import "../styles/components/ProductCard.css";
import { FaHeart } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";

function ProductCard({ data }) {
  return (
    <div className="product-card">
      <div className="favorite-btn">❤</div>

      <img className="product-image" src={item.image} alt={item.name} />

      <h3 className="product-title">{item.name}</h3>

      <p className="product-price">
        <span>$</span>24.00
      </p>

      <div className="product-rating">
        ⭐ <span>4.9</span>
      </div>

      <button className="add-btn">+</button>
    </div>
  );
}

export default ProductCard;

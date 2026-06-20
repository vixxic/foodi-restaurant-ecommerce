import "../../styles/sections/GreenPreFooter.css";
import SecTextCon from "../../components/SecTextCon";

function GreenPreFooter() {
  return (
    <div className="promo-container section">
      <div className="promo-text-container">
        <h1 className="promo-title">Can't Decide What To Order?</h1>
        <p className="promo-side-title">
          Browse our most popular dishes loved by thousands of customers. Our
          <br />
          chefs recommend trying the "Foodi Special" this week!
        </p>
      </div>

      <div className="promo-order-btn-con">
        <div className="promo-order-btn">Order Now</div>
      </div>
    </div>
  );
}

export default GreenPreFooter;

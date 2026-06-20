import "../../styles/sections/ShopHero.css";
import SecTextCon from "../../components/SecTextCon";

function ShopHero() {
  return (
    <div className="shop-header-section section">
      <div className="shop-text-con ">
        <SecTextCon
          side="MENU"
          main="Explore Our Full Menu"
          text={
            <>
              Discover all our delicious dishes crafted with fresh ingredients
              and exceptional taste. From energetic breakfasts to satisfying
              dinners, we have it all.
            </>
          }
        />
      </div>
      <div className="shop-img">
        <img src="/shop/salad-img.png" />
      </div>
    </div>
  );
}

export default ShopHero;

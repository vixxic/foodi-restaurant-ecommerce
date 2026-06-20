import "../../styles/sections/Categories.css";
import PlainBox from "../../components/PlainBox";

function Categories() {
  return (
    <div id="categories" className="category-section section">
      <h1 className="section-title">Popular Categories</h1>

      <div className="categories-con">
        <PlainBox
          img="/categories/Burger.png"
          title="Main Dish"
          section="category"
        />
        <PlainBox
          img="/categories/Sandwitch.png"
          title="Break Fast"
          section="category"
        />
        <PlainBox
          img="/categories/IceCream.png"
          title="Dessert"
          section="category"
        />
        <PlainBox
          img="/categories/OrangeJuice.png"
          title="Browse All"
          section="category"
        />
      </div>
    </div>
  );
}

export default Categories;

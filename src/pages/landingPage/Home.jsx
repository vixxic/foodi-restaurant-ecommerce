import "../../styles/sections/Home.css";
import GreenBtn from "../../components/GreenBtn";
import { FaPlay } from "react-icons/fa";

import { useNavigate } from "react-router";
function Home() {
  const navigate = useNavigate();

  return (
    <div id="home" className="home-section section">
      <div className="home-text-con">
        <h1>
          Dive into Delights <br /> Of Delectable{" "}
          <span style={{ color: "#39DB4A" }}> Food</span>
        </h1>

        <p>
          Where Each Plate Weaves a Story of Culinary <br />
          Mastery and Passionate Craftsmanship
        </p>

        <div>
          <div onClick={() => navigate("/all-menu")}>
            <GreenBtn text="Order Now" />
          </div>
          <p>Watch Video</p>
          <button className="order-now-btn">
            <FaPlay />
          </button>
        </div>
      </div>

      <div className="home-img">
        <img src="/Home-img.png" />
      </div>
    </div>
  );
}

export default Home;

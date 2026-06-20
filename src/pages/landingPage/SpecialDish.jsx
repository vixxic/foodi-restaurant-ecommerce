import "../../styles/sections/SpecialDish.css";
import MainSideTitle from "../../components/MainSideTitle";
import GreenBtn from "../../components/GreenBtn";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import data from "../../Data";

import { FaHeart, FaRegHeart, FaStar } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import { useRef, useState } from "react";

import { useNavigate } from "react-router";

function SpecialDish() {
  const divider = <hr />;
  const navigate = useNavigate();

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const specialDishData = data.filter((product) => product.special === true);

  const handleLike = () => {
    alert("Please Login first");
  };
  return (
    <div id="special-dish" className="Special-dish-section section">
      <div className="title-swiper-btn-con">
        <MainSideTitle
          side="SPECIAL DISHES"
          main={
            <>
              Standout Dishes
              <br />
              From Our Menu
            </>
          }
        />

        <div className="swiper-btn">
          <button
            ref={prevRef}
            style={{
              background: isBeginning ? "#EFEFEF" : "#3ed443",
              color: isBeginning ? "#6F6E6E" : "white",
              pointerEvents: isBeginning ? "none" : "auto",
            }}
            className="prev-btn  nav-btn"
          >
            <IoIosArrowBack />
          </button>
          <button
            ref={nextRef}
            style={{
              background: isEnd ? "#EFEFEF" : "#3ed443",
              color: isEnd ? "#6F6E6E" : "white",
              pointerEvents: isEnd ? "none" : "auto",
            }}
            className="next-btn  nav-btn"
          >
            <IoIosArrowForward />
          </button>
        </div>
      </div>

      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={24}
        slidesPerView={3}
        slidesPerGroup={3}
        breakpoints={{
          0: {
            slidesPerView: 1,
            slidesPerGroup: 1,
          },
          640: {
            slidesPerView: 2,
            slidesPerGroup: 2,
          },
          768: {
            slidesPerView: 3,
            slidesPerGroup: 3,
          },
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        onSlideChange={(swiper) => {
          setIsBeginning(swiper.isBeginning);
          setIsEnd(swiper.isEnd);
        }}
      >
        {specialDishData.map((product) => (
          <SwiperSlide key={product.id}>
            <div className="product-card">
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
                  <p key={index} className="tag-badge">
                    {tag}
                  </p>
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
          </SwiperSlide>
        ))}
      </Swiper>

      <div onClick={() => navigate("/all-menu")} className="all-menu-btn">
        <GreenBtn text="View More" />
      </div>
    </div>
  );
}

export default SpecialDish;

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

import { useRef, useState, useContext } from "react";

import { useNavigate } from "react-router";

import { GlobalContext } from "../../globalContext/GlobalContext";

function SpecialDish() {
  const divider = <hr />;
  const navigate = useNavigate();

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const specialDishData = data.filter((product) => product.special === true);

  const { isAuthentication, cartItems, setCartItems, like, setLike } =
    useContext(GlobalContext);

  const handleLike = (id) => {
    if (!isAuthentication) {
      navigate("/signIn");
      return;
    }

    setLike((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };

  const handleAddCart = (product) => {
    if (!isAuthentication) {
      navigate("/signIn");
      return;
    }

    setCartItems((prev) => {
      const existingItem = prev.find((item) => item.id === product.id);

      if (existingItem) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }

      return [...prev, { ...product, quantity: 1 }];
    });
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
              <button
                className="add-btn"
                onClick={() => handleAddCart(product)}
              >
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

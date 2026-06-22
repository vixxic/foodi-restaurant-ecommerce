import "./App.css";
import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// landing page
import Navbar from "./components/Navbar";
import Home from "./pages/landingPage/Home";
import Categories from "./pages/landingPage/Categories";
import SpecialDish from "./pages/landingPage/SpecialDish";
import Testimonials from "./pages/landingPage/Testimonials";
import Services from "./pages/landingPage/Services";
import Footer from "./pages/landingPage/Footer";

import { Routes, Route } from "react-router";

// e-commerce page
import ShopHero from "./pages/shopPage/ShopHero";
import Shop from "./pages/shopPage/Shop";
import GreenPreFooter from "./pages/shopPage/GreenPreFooter";

import Profile from "./pages/Profile";

import Cart from "./pages/Cart";

import Contact from "./pages/Contact";

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
    });

    function raf(time) {
      lenis.raf(time);
      ScrollTrigger.update();
    }

    gsap.ticker.add((time) => {
      raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    ScrollTrigger.scrollerProxy(document.body, {
      scrollTop(value) {
        if (arguments.length) {
          lenis.scrollTo(value);
        }
        return window.scrollY;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
      pinType: document.body.style.transform ? "transform" : "fixed",
    });

    ScrollTrigger.addEventListener("refresh", () => {
      lenis.scrollTo(window.scrollY, { immediate: true });
    });

    ScrollTrigger.refresh();

    return () => {
      lenis.destroy();
      ScrollTrigger.kill();
    };
  }, []);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="app inter-font">
            <Navbar />
            <Home />
            <Categories />
            <SpecialDish />
            <Testimonials />
            <Services />
            <Footer />
          </div>
        }
      />

      <Route
        path="/home"
        element={
          <div className="app inter-font">
            <Navbar />
            <Home />
            <Categories />
            <SpecialDish />
            <Testimonials />
            <Services />
            <Footer />
          </div>
        }
      />

      <Route
        path="/all-menu"
        element={
          <div className="app inter-font">
            <Navbar />
            <ShopHero />
            <Shop />
            <GreenPreFooter />
            <Footer />
          </div>
        }
      />

      <Route
        path="/profile"
        element={
          <div className="app inter-font">
            <Navbar />
            <Profile />
            <Footer />
          </div>
        }
      />

      <Route
        path="/cart"
        element={
          <div className="app inter-font">
            <Navbar />
            <Cart />
            <Footer />
          </div>
        }
      />

      <Route
        path="/contact"
        element={
          <div className="app inter-font">
            <Navbar />
            <Contact />
            <Footer />
          </div>
        }
      />
    </Routes>
  );
}

export default App;

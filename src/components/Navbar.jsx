import "../styles/components/Navbar.css";
import { IoPersonOutline, IoBagOutline } from "react-icons/io5";
import { Link } from "react-router";
import { HashLink } from "react-router-hash-link";
import { useNavigate } from "react-router";

import GreenBtn from "./GreenBtn";

function Navbar() {
  const navigate = useNavigate();

  return (
    <div className="navbar-con">
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid navbar-inner">
          <div className="logo-con">
            <img src="/logo.png" className="logo" />
          </div>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse nav-links"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li
                className="nav-item"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/home"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Menu
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/all-menu"
                      onClick={() => setOpen(false)}
                    >
                      All Menu
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <HashLink
                      className="dropdown-item"
                      smooth
                      to="/#categories"
                    >
                      Categories
                    </HashLink>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#special-dish">
                      Special Dishes
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <HashLink className="nav-link active" smooth to="/#services">
                  Services
                </HashLink>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="#offers"
                >
                  Offers
                </a>
              </li>
            </ul>
            <div className="box-3-nav">
              <IoPersonOutline onClick={() => navigate("/profile")} />
              <IoBagOutline onClick={() => navigate("/cart")} />
              <div onClick={() => navigate("/contact")}>
                <GreenBtn text="Contact" />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;

import "../../styles/sections/Footer.css";

import { FiFacebook } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa6";
import { FiTwitter } from "react-icons/fi";
import { FiYoutube } from "react-icons/fi";

function Footer() {
  const socialMedia = [FiFacebook, FaInstagram, FiTwitter, FiYoutube];
  return (
    <div className="footer-section section">
      <div className="footer-links-con-top">
        <div className="links-box footer-logo-box">
          <div className="logo-con">
            <img src="/logo.png" className="logo" />
          </div>

          <p>
            Savor the artistry where <br /> every dish is a culinary
            <br /> masterpiece
          </p>
        </div>
        <div className="links-box">
          <p className="links-box-tlt">Useful links</p>
          <ul>
            <li>About us</li>
            <li>Events</li>
            <li>Blogs</li>
            <li>FAQ</li>
          </ul>
        </div>
        <div className="links-box">
          <p className="links-box-tlt">Main Menu</p>
          <ul>
            <li>Home</li>
            <li>Offers</li>
            <li>Menus</li>
            <li>Reservation</li>
          </ul>
        </div>
        <div className="links-box">
          <p className="links-box-tlt">Contact Us</p>
          <ul>
            <li>example@email.com</li>
            <li>+64 958 248 966</li>
            <li>Social media</li>
          </ul>
        </div>
      </div>

      <div className="footer-links-con-bottom">
        <div className="footer-social-media-button-con">
          {socialMedia.map((Icon, index) => (
            <button
              className="footer-social-media-button"
              style={{
                background: index === 0 ? "#39DB4A" : "#edffef",
                color: index === 0 ? "white" : "#484848",
              }}
              key={index}
            >
              <Icon />
            </button>
          ))}
        </div>

        <div className="copyright">
          <p>
            Desain by{" "}
            <a
              style={{ color: "#555555" }}
              href="https://www.figma.com/design/VkniUh2TAdD5c0Y0IuzIbs/Restaurant-Website-UI-Template--Community-?node-id=1-197&t=o3orXZfi5OskfwF9-"
              target="_blank"
            >
              Dscode
            </a>{" "}
            | All rights reserved
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;

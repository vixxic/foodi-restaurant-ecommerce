import "../../styles/sections/Testimonials.css";
import SecTextCon from "../../components/SecTextCon";

function Testimonials() {
  return (
    <div className="testimonials-section section">
      <div className="testimonials-img">
        <img src="/testimonials/Testimonials-img.png" />
      </div>

      <div className="testimonials-text-con">
        <SecTextCon
          side="TESTIMONIALS"
          main={
            <>
              What Our Customers <br /> Say About Us
            </>
          }
          text={
            <>
              “I had the pleasure of dining at Foodi last night, and <br /> I'm
              still raving about the experience! The attention to <br /> detail
              in presentation and service was impeccable”
            </>
          }
        />

        <img
          src="/testimonials/cus-feedback.png"
          className="customer-feedback-img"
        />
      </div>
    </div>
  );
}

export default Testimonials;

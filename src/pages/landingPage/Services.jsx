import "../../styles/sections/Services.css";
import SecTextCon from "../../components/SecTextCon";
import GreenBtn from "../../components/GreenBtn";
import PlainBox from "../../components/PlainBox";

function Services() {
  return (
    <div id="services" className="services-section section">
      <div className="services-text-con">
        <SecTextCon
          side="OUR STORY & SERVICES"
          main={
            <>
              Our Culinary Journey
              <br /> And Services
            </>
          }
          text={
            <>
              Rooted in passion, we curate unforgettable dining <br />
              experiences and offer exceptional services,
              <br /> blending culinary artistry with warm hospitality.
            </>
          }
        />

        <div>
          <GreenBtn text="Explore" />
        </div>
      </div>

      <div className="services-type">
        <PlainBox
          className="type"
          section="services"
          img="/services/catering-box.png"
        />
        <PlainBox
          className="type"
          section="services"
          img="/services/fast-deliver-box.png"
        />
        <PlainBox
          className="type"
          section="services"
          img="/services/online-order-box.png"
        />
        <PlainBox
          className="type"
          section="services"
          img="/services/gift-cards-box.png"
        />
      </div>
    </div>
  );
}

export default Services;

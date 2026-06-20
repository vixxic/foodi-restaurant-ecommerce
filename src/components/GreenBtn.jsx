import "../styles/components/GreenBtn.css";
import { FiPhoneCall } from "react-icons/fi";

function GreenBtn({ text }) {
  return (
    <div
      style={{
        boxShadow:
          text === "Order Now" ? "0 15px 25px rgba(57, 211, 83, 0.3)" : "",
      }}
      className="green-btn"
    >
      {text === "Contact" ? <FiPhoneCall /> : ""}
      {text}
    </div>
  );
}

export default GreenBtn;

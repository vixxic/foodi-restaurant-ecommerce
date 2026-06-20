import { BiFontSize } from "react-icons/bi";

function MainSideTitle({ side, main }) {
  const container = {
    display: "flex",
    flexDirection: "column",
  };

  const sideTitle = {
    color: "#FF6868",
    fontWeight: "500",
    fontSize: "clamp(0.8rem, 1vw, 1.5rem)",
  };
  return (
    <div style={container}>
      <p style={sideTitle}>{side}</p>
      <h1 className="section-title">{main}</h1>
    </div>
  );
}

export default MainSideTitle;

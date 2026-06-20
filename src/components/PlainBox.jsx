import "../styles/components/PlainBox.css";

function PlainBox({ img, title, data, section }) {
  return (
    <div className="category-card ">
      <div
        className={`icon-wrapper-${section}`}
        style={{ background: section === "category" ? "#C1F1C6" : "" }}
      >
        <img src={img} />
      </div>

      {section === "category" ? (
        <>
          <h3>{title}</h3>
          <p>
            `({data} {title})`
          </p>
        </>
      ) : (
        ""
      )}
    </div>
  );
}

export default PlainBox;

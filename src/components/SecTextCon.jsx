import React from "react";
import MainSideTitle from "./MainSideTitle";

function SecTextCon({ side, main, text }) {
  return (
    <div>
      <MainSideTitle side={side} main={main} />
      <p>{text}</p>
    </div>
  );
}

export default SecTextCon;

import React from "react";
import "./starCompStyle.scss";
function StarComponent(props) {
  return (
    <img
      src={[props.isEmpty ? "/images/emptyStar.svg" : "/images/filledStar.svg"]}
      className={[props.isLast ? null : "singleStar"]}
    />
  );
}

export default StarComponent;

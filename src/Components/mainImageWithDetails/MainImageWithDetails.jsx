import React from "react";
import MainImageComp from "../mainImageComp/MainImageComp";
import "./mainImageWithDetailsStyle.scss";
import ImgDetailsComp from "../imgDetailsComp/ImgDetailsComp";

function MainImageWithDetails() {
  return (
    <div className="imgWithDetMainContainer">
      <MainImageComp />
      <ImgDetailsComp />
    </div>
  );
}

export default MainImageWithDetails;

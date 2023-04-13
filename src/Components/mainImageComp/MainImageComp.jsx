import React from "react";
import "./mainImageCompStyle.scss";
import subImg1 from "../../images/subImg1.png";
import subImg2 from "../../images/subImg2.png";
import subImg3 from "../../images/subImg3.png";
import subImg4 from "../../images/subImg4.png";

function MainImageComp() {
  const imgOnClick = (e) => {
    document.querySelector(".mainImg").src = e.target.src;
  };
  const SingleSubImg = (props) => {
    return (
      <img
        onClick={imgOnClick}
        className={props.isFirst ? "subImgStyle firstSubImg" : "subImgStyle"}
        src={props.src}
      />
    );
  };
  return (
    <div className="mainContainerImageComp">
      <div className="mainImgDiv">
        <img
          src="/images/mainPortrait@2x.png"
          alt="main product detail image"
          className="mainImg"
        />
        <img
          src="/images/360@2x.png"
          alt="360 photo"
          className="mainImgAbsltImg"
        />
      </div>
      <div className="subImgDiv">
        <button>
          <img src="/images/arrowLeft.svg" alt="arrow left" />
        </button>
        <SingleSubImg isFirst src={subImg1} />
        <SingleSubImg isFirst src={subImg2} />
        <SingleSubImg isFirst src={subImg3} />
        <SingleSubImg isFirst src={subImg4} />
        <button>
          <img src="/images/arrowRight.svg" alt="arrow right" />
        </button>
      </div>
    </div>
  );
}

export default MainImageComp;

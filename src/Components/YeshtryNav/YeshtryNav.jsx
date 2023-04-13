import React from "react";
import "./YeshtryNavStyle.scss";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
function YeshtryNav() {
  return (
    <div className="navbarBgDiv">
      <div className="mainContainer">
        <ul>
          <li>
            <button className="burgerIconBtn">
              <span></span>
              <span className="secMenuSpan"></span>
              <span></span>
            </button>
          </li>
          <li>
            <img src="images/yeshtryLogo.svg" alt="yeshtry Logo" />
          </li>
          <li className="valentineNavCont">
            <ChevronLeftIcon />
            <p>
              Valentine’s Day Offers! Buy Two Get One Free <a>Shop Now</a>
            </p>
            <ChevronRightIcon />
          </li>
          <li>
            <img
              src="/images/teleIcon.svg"
              className="navIcons"
              alt="telephone icon"
            />
            <p>Contact Us</p>
          </li>
          <li>
            <img
              src="/images/trackOrderIcon.svg"
              alt="track order Icon"
              className="navIcons"
            />
            <p>Track Order</p>
          </li>
          <li>
            <img
              src="/images/locationIcon.svg"
              className="navIcons"
              alt="location icon"
            />
            <p>Find A Store</p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default YeshtryNav;

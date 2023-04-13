import React from "react";
import "./menWomenComponentStyle.scss";
function MenWomenComponent() {
  const SingleLink = (props) => {
    return (
      <li>
        <a
          className={[
            props.isLast
              ? " singleLinkStyle lastSingleLink"
              : "singleLinkStyle",
          ]}
          href="#"
        >
          {props.title}
        </a>
      </li>
    );
  };
  return (
    <div className="bgContainer">
      <div className="menWomenMainContainer">
        <ul>
          <SingleLink title="Men" />
          <SingleLink title="Women" />
          <SingleLink title="Unisex" />
          <SingleLink title="Kids" />
          <SingleLink title="Best Sellers" />
          <SingleLink title="New Arrivals" />
          <SingleLink isLast title="Offers" />
        </ul>
      </div>
    </div>
  );
}

export default MenWomenComponent;

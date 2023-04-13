import React from "react";
import "./adressComponentStyle.scss";

function AdressComponent() {
  const SingleLink = (props) => {
    return (
      <a className="singleLinkStyle" href="#">
        {props.title}
      </a>
    );
  };
  return (
    <div className="parentContainer">
      <div className="adressMainContainer">
        <p>
          <SingleLink title="Men" />
          {" /"}
          <SingleLink title="Clothing" />
          {" /"}
          <SingleLink title="Tops" />
          {" /"}
          <SingleLink title="Adidas" />
          {" /"}
          Adidas Black T-Shirt
        </p>
      </div>
    </div>
  );
}

export default AdressComponent;

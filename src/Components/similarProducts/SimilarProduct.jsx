import React from "react";
import "./similarProductStyle.scss";
import SimilarProductsCard from "../similarProductsCard/SimilarProductsCard";
function SimilarProduct() {
  return (
    <div className="mainContainerSimilar">
      <h3>Similar Products</h3>
      <h4>You may like these products also</h4>
      <div className="similarProductsCard">
        <SimilarProductsCard
          discount="50%"
          src="/images/similarProductCard/image1.png"
        />
        <SimilarProductsCard
          isPickUp
          src="/images/similarProductCard/image2.png"
        />
        <SimilarProductsCard
          discount="30%"
          src="/images/similarProductCard/image3.png"
        />
        <SimilarProductsCard
          isPickUp
          discount="70%"
          src="/images/similarProductCard/image4.png"
        />
      </div>
    </div>
  );
}

export default SimilarProduct;

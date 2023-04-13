import React from "react";
import YeshtryNav from "../Components/YeshtryNav/YeshtryNav";
import SearchBarComponent from "../Components/searchBarComponent/SearchBarComponent";
import MenWomenComponent from "../Components/menWomenComponent/MenWomenComponent";
import AdressComponent from "../Components/adressComponent/AdressComponent";
import MainImageWithDetails from "../Components/mainImageWithDetails/MainImageWithDetails";
import SimilarProduct from "../Components/similarProducts/SimilarProduct";
import SliderLine from "../Components/sliderLine/SliderLine.jsx";
import Footer from "../Components/Footer/Footer";
import "./productDetailsStyle.scss";
import Cart from "../Components/Cart/Cart";
class ProductDetails extends React.Component {
  constructor(props) {
    super(props);

    // Set the initial state
    this.state = {
      isCartVisible: false,
      cartQuantity: 0,
    };
    this.CartVisibleTrue = this.CartVisibleTrue.bind(this);
    this.CartVisibleFalse = this.CartVisibleFalse.bind(this);
  }
  CartVisibleTrue() {
    this.setState(() => ({ isCartVisible: true }));
  }
  CartVisibleFalse() {
    this.setState(() => ({ isCartVisible: false }));
  }
  cartQuantity(e) {
    this.setState(() => ({ cartQuantity: e }));
  }
  render() {
    return (
      <div className="productDetailContainer">
        <YeshtryNav />
        <SearchBarComponent cartVisibleTrue={this.CartVisibleTrue} />
        <MenWomenComponent />
        <AdressComponent />
        <MainImageWithDetails cartQuantity={this.cartQuantity} />
        <SimilarProduct />
        <SliderLine />
        <Footer />
        {this.state.isCartVisible === false ? null : (
          <Cart cartVisibleFalse={this.CartVisibleFalse} />
        )}
      </div>
    );
  }
}

export default ProductDetails;

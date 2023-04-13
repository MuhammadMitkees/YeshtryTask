import React from "react";
import "./imgDetailsCompStyle.scss";
import StarComponent from "../starComponent/StarComponent";
import { UserContext } from "../../Context/UserContext";
class ImgDetailsComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 1,
    };
  }
  static contextType = UserContext;

  componentDidMount() {
    const user = this.context;
  }

  render() {
    const { user, setUser } = this.context;

    const SizeCircle = (props) => {
      return (
        <div
          className={[props.isSelected ? "selectedSizeCircle" : "sizeCircle"]}
        >
          <p>{props.size}</p>
        </div>
      );
    };
    const ColorCircle = (props) => {
      return (
        <div
          className={[props.isSelected ? "selectedColorCircle" : "colorCircle"]}
        >
          <img src={props.src} />
        </div>
      );
    };
    return (
      <div className="imgDetailMainCont">
        <img src="/images/adidasLogo.svg" alt="adidas Logo" />
        <p className="detailTxt">
          Adidas black t-shirt lorem ipsum dolor sit amet, consectetuer
          adipiscing elit.
        </p>
        <p className="genderTxt">Men</p>
        <div className="starDiv">
          <div>
            <StarComponent />
            <StarComponent />
            <StarComponent />
            <StarComponent />
            <StarComponent isEmpty isLast />
          </div>
          <p className="ratingTxt">4.9 of 5</p>
          <p className="ratingCountTxt">22 Rates</p>
        </div>
        <div className="priceDiv">
          <p className="priceTxt">
            9,999 <span>LE</span>
          </p>
          <p className="discountTxt">9,999 LE</p>
          <p className="discountPercentTxt">30% Off</p>
        </div>
        <div className="sizeDiv">
          <p>Size</p>
          <div className="sizeCircleDiv">
            <SizeCircle size="Small" />
            <SizeCircle size="Medium" />
            <SizeCircle isSelected size="Large" />
            <SizeCircle size="X Large" />
            <SizeCircle size="XX Large" />
          </div>
        </div>
        <div className="colorDiv">
          <p>Color</p>
          <div className="colorCircleDiv">
            <ColorCircle src="/images/colorImg1.png" isSelected />
            <ColorCircle src="/images/colorImg2.png" />
          </div>
        </div>
        <div className="quantityDiv">
          <p>Quantity</p>
          <div className="quantityBtnDiv">
            <button
              onClick={() => {
                if (this.state.quantity >= 2) {
                  this.setState((prev) => ({
                    quantity: prev.quantity - 1,
                  }));
                }
              }}
            >
              <img src="/images/-Sign.svg" alt="minus sign" />
            </button>
            <p>{this.state.quantity}</p>
            <button
              onClick={() => {
                this.setState((prev) => ({ quantity: prev.quantity + 1 }));
              }}
            >
              <img src="/images/+Sign.svg" alt="plus sign" />
            </button>
          </div>
          <div className="quantityAddtoCartDiv">
            <button
              onClick={() => {
                setUser({
                  globalQuantity: user.globalQuantity + this.state.quantity,
                });
              }}
              className="addToCartBtn"
            >
              Add To Cart
            </button>
            <button className="pickupBtn">Pickup From Store</button>
          </div>
        </div>
      </div>
    );
  }
}

export default ImgDetailsComp;

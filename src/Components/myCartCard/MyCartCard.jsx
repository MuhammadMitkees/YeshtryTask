import React from "react";
import "./myCardCartStyle.scss";
import UserContext from "../../Context/UserContext";
class MyCartCard extends React.Component {
  constructor(props) {
    super(props);
  }
  static contextType = UserContext;

  render() {
    const { user, setUser } = this.context;

    return (
      <div className="cartCardCont">
        <img src="/images/mainPortrait.png" alt="portrait e-commerce" />
        <div>
          <p className="cardCartDesc">
            Lorem ipsum dolor sit amet, consecte adipiscing elit.
          </p>
          <p>
            Quantity: <span>{this.props.quantity}</span>
          </p>
          <div className="priceAndRemoveDiv">
            <p>
              9,999 <span>LE</span>
            </p>
            <button
              onClick={() => {
                setUser({ globalQuantity: 0 });
              }}
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default MyCartCard;

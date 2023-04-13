import React, { Component } from "react";
import "./cartStyle.scss";
import MyCartCard from "../myCartCard/MyCartCard";
import UserContext from "../../Context/UserContext";
class Cart extends Component {
  constructor(props) {
    super(props);

    this.handleCartVisibilty = this.handleCartVisibilty.bind(this);
  }
  handleCartVisibilty(e) {
    e.preventDefault();
    this.props.cartVisibleFalse(false);
  }

  static contextType = UserContext;

  render() {
    const { user, setUser } = this.context;
    return (
      <div className="cartContainer">
        <div className="transparentDiv"></div>
        <div className="cartDiv">
          <button onClick={this.handleCartVisibilty}>
            <img src="/images/closeBtn.svg" alt="close Button" />
          </button>
          <h4>My Cart</h4>
          <p>Cart Summary</p>
          {user.globalQuantity === 0 ? (
            <p className="emptyCartTxt">cart is empty</p>
          ) : (
            <>
              <MyCartCard quantity={user.globalQuantity} />
              <p className="totalTxt">Total: 19,999 LE</p>
              <div className="reviewAndCheckoutDiv">
                <button>Review Cart</button>
                <button>Complete Checkout</button>
              </div>
            </>
          )}
        </div>
      </div>
    );
  }
}

export default Cart;

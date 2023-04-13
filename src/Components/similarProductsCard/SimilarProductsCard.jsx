import React from "react";
import "./similarProductsCardStyle.scss";
import StarComponent from "../starComponent/StarComponent";
import { fetchData } from "../../services/services";
class SimilarProductsCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      loading: true,
      error: null,
    };
  }
  async componentDidMount() {
    try {
      const data = await fetchData("posts/1");
      this.setState({ data, loading: false });
    } catch (error) {
      this.setState({ error, loading: false });
    }
  }

  render() {
    const { data, loading, error } = this.state;

    if (loading) {
      return <p>Loading...</p>;
    }

    if (error) {
      return <p>Error: {error.message}</p>;
    }
    if (data) {
      return (
        <div className="similarCardContainer">
          <img
            className="mainCardImg"
            src={this.props.src}
            alt="portrait for product detail"
          />
          <div className="cardCaption">
            <p className="mainCardTxt">{data.title}</p>
            <div className="priceAndLogo">
              <div className="priceAndDiscount">
                <p>
                  9,999 <span>LE</span>
                </p>
                {this.props.discount && (
                  <div className="discountDiv">
                    <p className="priceBeforeTxt">
                      9,999 <span>LE</span>
                    </p>
                    <p className="discPercTxt">{this.props.discount}</p>
                  </div>
                )}
              </div>
              <img src="/images/adidasLogo.svg" alt="adidas Logo" />
            </div>
            <div className="ratingDiv">
              <div className="starsRatingDiv">
                <StarComponent />
                <StarComponent />
                <StarComponent />
                <StarComponent />
                <StarComponent isLast isEmpty />
              </div>
              <p>4.2 of 5</p>
            </div>
            {this.props.isPickUp ? (
              <div className="pickUpAndFrom">
                <p>
                  From: <span>UK</span>
                </p>
                <p>
                  To: <span>Egypt</span>
                </p>
                <p>
                  in: <span>10</span>
                </p>
              </div>
            ) : (
              <div className="pickUpAndFrom">
                <p>
                  Pickup From: <span>Genena Mall</span>
                </p>
              </div>
            )}
          </div>
        </div>
      );
    }
  }
}

export default SimilarProductsCard;

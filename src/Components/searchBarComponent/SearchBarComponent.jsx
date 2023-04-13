import React from "react";
import "./SearchBarComponentStyle.scss";
import SearchIcon from "@mui/icons-material/Search";
import UserContext from "../../Context/UserContext";
class SearchBarComponent extends React.Component {
  constructor(props) {
    super(props);

    this.handleCartVisibilty = this.handleCartVisibilty.bind(this);
  }
  static contextType = UserContext;

  handleCartVisibilty(e) {
    e.preventDefault();
    this.props.cartVisibleTrue(true);
  }

  render() {
    const { user, setUser } = this.context;
    return (
      <div className="searchBarMainContainer">
        <div className="searchInputContainer">
          <input type="text" placeholder="Search" />
          <SearchIcon className="searchIcon" />
        </div>
        <img src="/images/adidasLogo.svg" alt="adidas logo" />
        <ul>
          <li>
            <a
              href="#"
              onClick={this.handleCartVisibilty}
              className="searchCompIconsLink firstSearchCompIconsLink"
            >
              <img
                src="/images/cartIcon.svg"
                alt=" cart icon"
                className="searchCompIcons"
              />
              Cart
              <p>{user?.globalQuantity}</p>
            </a>
          </li>
          <li>
            <a href="#" className="searchCompIconsLink">
              <img
                src="/images/whishlistIcon.svg"
                alt=" whishlist icon"
                className="searchCompIcons"
              />
              Wishlist
            </a>
          </li>
          <li>
            <a href="#" className="searchCompIconsLink">
              <img
                src="/images/loginIcon.svg"
                alt=" cart icon"
                className="searchCompIcons"
              />
              Login
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default SearchBarComponent;

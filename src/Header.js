import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import "./Header.css";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";

function Header() {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="Header">
      <Link to="./">
        <img
          src="https://www.dabitonto.com/share/uploads_news/4f9b1-amazon.jpg"
          className="header_logo"
        ></img>
      </Link>
      <div className="header_search">
        <input className="header_searchInput" type="text" />
        <SearchIcon className="header_searchIcon" />
      </div>
      <Link to="./signIn">
        <div className="header_option">
          <span className="header_optionLineOn">Hello Guest</span>
          <span className="header_optionLineTw">Sign In</span>
        </div>
      </Link>
      <div className="header_option">
        <span className="header_optionLineOn">Return</span>
        <span className="header_optionLineTw">& Order</span>
      </div>

      <div className="header_option">
        <span className="header_optionLineOn">Your</span>
        <span className="header_optionLineTw">Prime</span>
      </div>

      <Link to="./checkout">
        <div className="header_optionBasket">
          <ShoppingBasketIcon />
          <span className="header_optionLineTw header_basketCount">
            {basket?.length}
          </span>
        </div>
      </Link>
    </div>
  );
}

export default Header;

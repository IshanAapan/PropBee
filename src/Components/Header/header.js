import React from "react";
import "./header.css";
import logo01 from "../../assets/rental-logo.webp";
// import logo02 from "../../assets/delivery-van-logo.png";

const Header = () => {
  return (
    <div className="main-container">
      <header className="main-h1">
        <h1 className="header-h1">World's Largest NoBrokerage Property Site</h1>
        <h2 className="header-h2">
          <img src={logo01} alt="logo01" />
          Rental Agreement
          {/* |<img src={logo02} alt="logo02" /> Next Day Delivery */}
        </h2>
      </header>

      <nav className="navbar">
        <ul>
          <li>
            <a href="#">Buy</a>
          </li>
          <li>
            <a href="#">Rent</a>
          </li>
          <li>
            <a href="#">Commercial</a>
          </li>
        </ul>
      </nav>

      <div className="search-options"></div>
    </div>
  );
};

export default Header;

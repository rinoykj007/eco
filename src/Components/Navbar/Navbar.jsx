import "./Navbar.css";
import logo from "../Images/logo.png";
import cart_icon from "../Images/cart_icon.png";
import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [menu, setMenu] = useState("shop");
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for responsive menu

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <div className="navbar">
        <div className="nav-log">
          <img src={logo} alt="Shopper Logo" />
          <p>SHOPPER</p>
        </div>

        <div className="menu-toggle" onClick={toggleMenu}>
          &#9776; {/* Unicode character for hamburger menu */}
        </div>

        <ul className={`nav-menu ${isMenuOpen ? "active" : ""}`}>
          <li
            onClick={() => {
              setMenu("shop");
              setIsMenuOpen(false);
            }}
          >
            <Link to="/">shop</Link> {menu === "shop" ? <hr /> : <></>}
          </li>
          <li
            onClick={() => {
              setMenu("Mens");
              setIsMenuOpen(false);
            }}
          >
            <Link to="/Mens">Men</Link> {menu === "Mens" ? <hr /> : <></>}
          </li>
          <li
            onClick={() => {
              setMenu("Women");
              setIsMenuOpen(false);
            }}
          >
            <Link to="/Women">Women</Link> {menu === "Women" ? <hr /> : <></>}
          </li>
          <li
            onClick={() => {
              setMenu("Kids");
              setIsMenuOpen(false);
            }}
          >
            <Link to="/Kids">Kids</Link> {menu === "Kids" ? <hr /> : <></>}
          </li>
        </ul>

        <div className="nav-login-cart">
          <button>Login</button>
          <img src={cart_icon} alt="cart_icon" />
          <div className="nav-cart-count">{0}</div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

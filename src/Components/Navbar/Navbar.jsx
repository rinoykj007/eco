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
            <Link to="/">Shop</Link> {menu === "shop" ? <hr /> : null}
          </li>
          <li
            onClick={() => {
              setMenu("mens");
              setIsMenuOpen(false);
            }}
          >
            <Link to="/category/men">Men</Link>{" "}
            {menu === "mens" ? <hr /> : null}
          </li>
          <li
            onClick={() => {
              setMenu("women");
              setIsMenuOpen(false);
            }}
          >
            <Link to="/category/women">Women</Link>{" "}
            {menu === "women" ? <hr /> : null}
          </li>
          <li
            onClick={() => {
              setMenu("kids");
              setIsMenuOpen(false);
            }}
          >
            <Link to="/category/kid">Kids</Link>{" "}
            {menu === "kids" ? <hr /> : null}
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

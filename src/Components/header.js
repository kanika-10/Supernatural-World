import React, { useState } from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import { Link } from "react-router-dom";
import "./header/header.css";

function Header() {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <div>
      <Navbar expand="md">
        <div className="navbar">
          <NavbarBrand className="title" href="/">
            {" "}
            <div className="sign">
              <span className="fast-flicker">SUPER</span>NATU
              <span className="flicker">RAL-</span>WORLD
            </div>
          </NavbarBrand>
          <ul
            className={isMobile ? "nav-links-mobile" : "nav-links"}
            onClick={() => setIsMobile(false)}
          >
            <Link className="nav-link" to="/home">
              <li>
                <span className="fa fa-home fa-lg icon"></span> <div>Home</div>
              </li>
            </Link>
            <Link className="nav-link" to="/discover">
              <li>
                <span className="fa fa-cc-discover fa-lg icon "></span>{" "}
                <div>Discover</div>
              </li>
            </Link>
            <Link className="nav-link" to="/funzone">
              <li>
                <span className="fa fa-gamepad fa-lg icon "></span>
                <div>Fun Zone</div>
              </li>
            </Link>
            <Link className="nav-link" to="/shopping">
              <li>
                <span className="fa fa-shopping-cart fa-lg icon "></span>
                <div>Shoping</div>
              </li>
            </Link>
            <Link className="nav-link" to="/contactus">
              <li>
                <span className="fa fa-address-card fa-lg icon"></span>
                <div>Contact Us</div>{" "}
              </li>
            </Link>
          </ul>
          <button
            className="mobile-menu-item"
            onClick={() => setIsMobile(!isMobile)}
          >
            {isMobile ? (
              <i className="fa fa-times"></i>
            ) : (
              <i className="fa fa-bars"></i>
            )}
          </button>
        </div>
      </Navbar>
    </div>
  );
}

export default Header;

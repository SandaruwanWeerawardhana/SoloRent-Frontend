import React from "react";
import "./navbarContent.css";
import logov from "../../assets/logov.png";
import { Link } from "react-router-dom";

function NavbarContent() {
  return (
    <header className=" top-0 z-50">
      <div className="container fixed-top  ">
        <nav>
          <div className="logo">
            <Link to="/login">
              <img src={logov} alt="Company Logo" />
            </Link>
          </div>

          <ul className="pb-5 pt-0 ">
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/service">Service</Link>
            </li>
            <li>
              <Link to="/booking">Booking</Link>
            </li>
            <li>
              <Link to="/contact">About</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default NavbarContent;


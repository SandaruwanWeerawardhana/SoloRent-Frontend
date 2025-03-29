import React from "react";
import "./navbarContent.css";
import MenuContent from "../MenuContent/MenuContent";
import logov from "../../assets/logov.png";
import { Link } from "react-router-dom";

function NavbarContent() {
  return (
    <>
      <header>
        <div className="container fixed-top  ">
          <nav>
      
            <div className="logo">
            <Link to="/login">
                <img
                  src={logov}
                  alt="Company Logo"
                />
            </Link>
            </div>
    
            <ul class="pb-5 pt-0 ">
              <MenuContent linkname="Home" url="/home" />
              <MenuContent linkname="Booking" url="/FAQ" />
              <MenuContent linkname="Vehicles" url="/booking" />
              <MenuContent linkname="About" url="/contact" />
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}

export default NavbarContent;

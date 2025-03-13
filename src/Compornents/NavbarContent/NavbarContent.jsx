import React from "react";
import "./navbarContent.css";
import MenuContent from "../MenuContent/MenuContent";
import logo from "../../assets/logo.png";

function NavbarContent() {
  return (
    <>
      <header>
        <div className="container">
          <nav>
            <div className="logo">
              {/* <Link to="/login"> */}
                <img
                  src={logo}
                  alt="Company Logo"
                />
              {/* </Link> */}
            </div>
            <ul class="pb-5 pt-0 ">
              <MenuContent linkname="HOME" url="/home" />
              <MenuContent linkname="FAQ" url="/FAQ" />
              <MenuContent linkname="BOOKING" url="/booking" />
              <MenuContent linkname="CONTACT US" url="/contact" />
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}

export default NavbarContent;

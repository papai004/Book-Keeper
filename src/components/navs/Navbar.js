import React, { useState } from "react";
import Logo from "../images/book_keeper.png";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import  './Navbar.css';

function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };
  return (
    <div className="navbar">
      <div className="leftSide" id={openLinks ? "open" : "close"}>
        <img className="nav_img" src={Logo} alt="nav_img"/>
        <div className="hiddenLinks">
          <Link to="/Homepage">Home</Link>
          <Link to="/Collection">Our Collection</Link>
          <Link to="/Favourites">Favourites</Link>
          <Link to="/login">Publish</Link>
          <Link to="/ContactUs">📞</Link>
        </div>
      </div>
      <div className="rightSide">
        <Link to="/Homepage">Home</Link>
        <Link to="/Collection">Our Collection</Link>
        <Link to="/Favourites">Favourites</Link>
        <Link to="/login">Publish</Link>
        <Link to="/ContactUs">📞</Link>
      <button onClick={toggleNavbar}>
          <GiHamburgerMenu />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
import React from "react";
import "./Header.css";
import Search from "./Search";
import Navbar from "./Navbar";

const Header = ({ CartItem }) => {
  return (
    <>
      <div className="header_container">
        <Search CartItem={CartItem} />
        <Navbar />
      </div>
    </>
  );
};

export default Header;

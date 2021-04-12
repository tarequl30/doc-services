import React from "react";
import HeaderMain from "../HeaderMain/HeaderMain";
import Navbar from "./Navbar/Navbar";
import "../Header/Header.css";
import BusinessInfo from "../BusinessInfo/BusinessInfo";
const Header = () => {
  return (
    <div className="headerContainer">
      <Navbar></Navbar>
      <HeaderMain></HeaderMain>
      <BusinessInfo />
    </div>
  );
};

export default Header;

import React from 'react';
import navImg from "../../assets/logo.png";
import currencyImg from "../../assets/Currency.png";

const Navbar = ({availableBalance}) => {
    return (
        <div className="navbar max-w-[1200px] mx-auto mb-10">
        <div className="flex-1">
          <a className="text-xl">
            <img className="w-[70px]" src={navImg} alt="" />
          </a>
        </div>
        <div className="flex items-center gap-1 font-semibold">
          <span>{availableBalance}</span>
          <span> Coin </span>
          <img src={currencyImg} alt="" />
        </div>
      </div>
    );
};

export default Navbar;
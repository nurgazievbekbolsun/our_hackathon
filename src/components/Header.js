import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div id="header">
      <div className="container">
        <div className="header">
         <div className="">
         <div className="">
         <a href="">ТУРИСТИЧЕСКИЙ ПУТЕВОДИТЕЛЬ ПО КЫРГЫЗСТАНУ</a>
          <a href="">Контакты</a>
          <select>
            <option value="">English</option>
            <option value="">rusian</option>
          </select>
         </div>
         <div className="">
          
         </div>
         </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

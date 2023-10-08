import React from "react";
import { useDispatch } from "react-redux";
import { openModal } from "../../store/modalSlice";

const Header = () => {
  const disp = useDispatch();
  return (
    <div className="header">
      <ul className="header-right">
        <li>Home</li>
        <li>About us</li>
        <li>Contact us</li>
      </ul>
      <ul className="header-left">
        <li onClick={() => disp(openModal("login"))}>Login</li>
        <li onClick={() => disp(openModal("register"))}>Register</li>
      </ul>
    </div>
  );
};

export default Header;

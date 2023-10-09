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
        <li
          onClick={() =>
            disp(
              openModal({
                name: "login",
                childrenProps: {
                  name: "khalifeh",
                  email: "khalifeh@hotmail.com",
                },
              })
            )
          }
        >
          Login
        </li>
        <li
          onClick={() =>
            disp(openModal({ name: "register", position: "bottom" }))
          }
        >
          Register
        </li>
      </ul>
    </div>
  );
};

export default Header;

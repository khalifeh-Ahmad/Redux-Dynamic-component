import React, { Fragment } from "react";
import CloseSVG from "../../../assets/close.svg";
import "./modal.css";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../../store/modalSlice";
import Login from "../../forms/Login";
import Register from "../../forms/Register";
import LoginRegister from "../../forms/LoginRegister";

const Modal = () => {
  const modlState = useSelector((state) => state.modal);
  //const { isOpen, compName } = useSelector((state) => state.modal);
  //console.log(modlState);
  const disp = useDispatch();
  const closeModalHandler = () => disp(closeModal());

  const compsLookUp = {
    login: Login,
    register: Register,
    LogReg: LoginRegister,
  };
  let renderComp;

  if (modlState.compName) {
    const SlctedComp = compsLookUp[modlState.compName];
    //  console.log(typeof slctedComp);
    if (SlctedComp) {
      renderComp = <SlctedComp />;
    }
  }

  return (
    <Fragment>
      <div
        className={`modal-backDrop ${
          modlState.isOpen ? "modal-show" : "modal-hide"
        }`}
        onClick={closeModalHandler}
      ></div>
      <div
        className={`modal-container ${
          modlState.isOpen ? "modal-show" : "modal-hide"
        }`}
      >
        <div className="modal-close">
          <img
            src={CloseSVG}
            className="modal-close-img"
            alt="close-modal"
            onClick={closeModalHandler}
          />
        </div>
        <div className="modal-content">{renderComp}</div>
      </div>
    </Fragment>
  );
};

export default Modal;

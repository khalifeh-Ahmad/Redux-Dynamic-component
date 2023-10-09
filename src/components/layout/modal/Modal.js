import React, { Fragment } from "react";
import CloseSVG from "../../../assets/close.svg";
import "./modal.css";

const Modal = ({ children, isOpen, closeMdlHandler, mdlChildPst }) => {
  return (
    <Fragment>
      <div
        className={`modal-backDrop ${isOpen ? "modal-show" : "modal-hide"}`}
        onClick={closeMdlHandler}
      ></div>
      <div
        className={`modal-container ${isOpen ? "modal-show" : "modal-hide"}`}
      >
        <div className="modal-close">
          <img
            src={CloseSVG}
            className="modal-close-img"
            alt="close-modal"
            onClick={closeMdlHandler}
          />
        </div>
        <div className={`modal-content ${mdlChildPst}`}>{children}</div>
      </div>
    </Fragment>
  );
};

export default Modal;

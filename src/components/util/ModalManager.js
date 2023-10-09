import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../store/modalSlice";
import Login from "../forms/Login";
import Register from "../forms/Register";
import LoginRegister from "../forms/LoginRegister";
import Modal from "../layout/modal/Modal";

const ModalManager = () => {
  //const modlState = useSelector((state) => state.modal);
  const { isOpen, compName, mdlChildPst, childrenProps } = useSelector(
    (state) => state.modal
  );
  //console.log(modlState);
  const disp = useDispatch();
  const closeModalHandler = () => disp(closeModal());

  const compsLookUp = {
    login: Login,
    register: Register,
    LogReg: LoginRegister,
  };
  let renderComp;

  if (compName) {
    const SlctedComp = compsLookUp[compName];
    //  console.log(typeof slctedComp);
    if (SlctedComp) {
      renderComp = <SlctedComp {...childrenProps} />;
    }
  }
  return (
    <Modal isOpen={isOpen} closeMdlHandler={closeModalHandler} mdlChildPst={mdlChildPst}>
      {renderComp}
    </Modal>
  );
};

export default ModalManager;

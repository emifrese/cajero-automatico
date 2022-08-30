import ReactDOM from "react-dom";
import React from "react";

const Backdrop = (props) => {
  return (
    <div
      className="fixed top-0 left-0 w-full z-20 h-screen bg-black/75"
      onClick={props.onClose}
    />
  );
};

const ModalOverlay = (props) => {
  return (
    <div className="flex justify-center items-center max-w-full">
      <div className="animate-slideDown border-[14px] bg-white fixed top-12 p-4 w-11/12 z-30 text-center max-w-[inherit] max-h-[85%]">
        <>{props.children}</>
      </div>
    </div>
  );
};

const portalElement = document.getElementById('overlays')

const Modal = (props) => {
    return (
        <>
          {ReactDOM.createPortal(
            <Backdrop onClose={props.Toggle} />,
            portalElement
          )}
          {ReactDOM.createPortal(
            <ModalOverlay>{props.children}</ModalOverlay>,
            portalElement
          )}
        </>
      );
};

export default Modal;

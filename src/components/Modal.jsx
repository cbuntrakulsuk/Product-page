import React from "react";
import Gallery from "./Gallery";
import { ReactComponent as Close } from "../images/icon-close.svg";

function Modal(props) {
  function close() {
    props.setState(false);
  }
  return (
    <div>
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        <div className="scale-125">
          <div
            onClick={close}
            className="mb-5 flex w-[440px] cursor-pointer justify-end fill-white"
          >
            <Close />
          </div>
          <Gallery imageArray={props.imageArray} />
        </div>
      </div>
      <div className="fixed inset-0 z-40 bg-black opacity-70"></div>
    </div>
  );
}

export default Modal;

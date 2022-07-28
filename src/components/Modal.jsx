import React from "react";
import { ReactComponent as Close } from "../images/icon-close.svg";

function Modal(props) {
  function close() {
    props.setState(false);
  }
  return (
    <div>
      <div className="absolute top-40 z-[999] float-right flex h-auto w-[550px] justify-end">
        <Close
          className="scale-[2] cursor-pointer fill-white"
          onClick={close}
        />
      </div>
      <div className="absolute top-0 left-0 h-full w-full bg-black opacity-60"></div>
      <img
        src={props.mainIMG}
        alt="mainIMG"
        className="absolute z-50 h-[550px] w-[550px] rounded-xl"
      />
    </div>
  );
}

export default Modal;

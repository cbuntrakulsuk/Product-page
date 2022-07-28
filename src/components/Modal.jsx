import React from "react";
import { ReactComponent as Close } from "../images/icon-close.svg";

function Modal(props) {
  function close() {
    props.setState(false);
  }
  return (
    <div>
      <div className="absolute inset-0 h-full w-full bg-black opacity-80"></div>
      <div className="absolute top-0 left-0 z-50 h-full w-full">
        <div className="z-50 mx-auto mt-40 h-[550px] w-[550px]">
          <div className="mr-4 flex justify-end pb-7">
            <Close
              className="scale-[2] cursor-pointer fill-white"
              onClick={close}
            />
          </div>
          <img src={props.mainIMG} alt="mainIMG" className="rounded-3xl" />
        </div>
      </div>
    </div>
  );
}

export default Modal;

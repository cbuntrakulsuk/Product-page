import React from "react";
import Gallery from "./Gallery";
import { ReactComponent as Close } from "../images/icon-close.svg";
import { ReactComponent as Next } from "../images/icon-next.svg";
import { ReactComponent as Previous } from "../images/icon-previous.svg";

function Modal(props) {
  function close() {
    props.setState(false);
  }

  function nextSlide() {
    const isLastSlide = props.index === props.imageArray.length - 1;
    props.setMainImg(
      isLastSlide ? props.imageArray[0] : props.imageArray[props.index + 1]
    );
    props.setIndex((prevIndex) => {
      return isLastSlide ? 0 : prevIndex + 1;
    });
  }

  function previousSlide() {
    const isFirstSlide = props.index === 0;
    props.setMainImg(
      isFirstSlide
        ? props.imageArray[props.imageArray.length - 1]
        : props.imageArray[props.index - 1]
    );
    props.setIndex((prevIndex) => {
      return isFirstSlide ? props.imageArray.length - 1 : prevIndex - 1;
    });
  }

  return (
    <div className="select-none">
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        <div className="z-50 h-16 w-16 cursor-pointer rounded-full bg-white">
          <div
            className="z-50 flex h-16 w-16 scale-150 items-center justify-center pr-1"
            onClick={previousSlide}
          >
            <Previous />
          </div>
        </div>
        <div className="mx-5 scale-125">
          <div
            onClick={close}
            className="mb-5 flex w-[440px] cursor-pointer justify-end fill-white"
          >
            <Close />
          </div>
          <Gallery
            mainImg={props.mainImg}
            setMainImg={props.setMainImg}
            setIndex={props.setIndex}
            index={props.index}
            imageArray={props.imageArray}
          />
        </div>
        <div
          className="z-40 h-16 w-16 cursor-pointer rounded-full bg-white"
          onClick={nextSlide}
        >
          <div className="z-50 flex h-16 w-16 scale-150 items-center justify-center pl-1">
            <Next />
          </div>
        </div>
      </div>
      <div className="pointer-events-none fixed inset-0 z-40 bg-black opacity-70"></div>
    </div>
  );
}

export default Modal;

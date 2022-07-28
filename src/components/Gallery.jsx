import React, { useState } from "react";
import Modal from "./Modal";

function Gallery(props) {
  const [mainImg, setMainImg] = useState(props.imageArray[0]);
  const [activeImg, setActiveImg] = useState();
  const [isModalOpen, setisModalOpen] = useState(false);

  const activeColor = {
    outline: "solid hsl(26, 100%, 55%)",
    opacity: "60%",
  };

  function setGallery(event) {
    setMainImg(event.target.src);
    setActiveImg(event.target.id);
  }

  function openModal() {
    setisModalOpen(true);
  }

  return (
    <div>
      <div className="lg:mr-[125px] lg:flex lg:justify-center">
        <div className="hidden h-[565px] w-[445px] grid-cols-4 gap-5 lg:grid">
          {/* Main Image */}
          <img
            className="col-span-4 cursor-zoom-in rounded-3xl"
            src={mainImg}
            alt="Shoes"
            onClick={openModal}
          />
          {/* thumbnail */}
          <div>
            <img
              id="1"
              className="light-box-thumbnail"
              src={props.imageArray[0]}
              alt="Shoes1"
              onClick={setGallery}
              style={activeImg === "1" ? activeColor : null}
            />
          </div>
          <div>
            <img
              id="2"
              className="light-box-thumbnail"
              src={props.imageArray[1]}
              alt="Shoes2"
              onClick={setGallery}
              style={activeImg === "2" ? activeColor : null}
            />
          </div>
          <div>
            <img
              id="3"
              className="light-box-thumbnail"
              src={props.imageArray[2]}
              alt="Shoes3"
              onClick={setGallery}
              style={activeImg === "3" ? activeColor : null}
            />
          </div>
          <div>
            <img
              id="4"
              className="light-box-thumbnail"
              src={props.imageArray[3]}
              alt="Shoes4"
              onClick={setGallery}
              style={activeImg === "4" ? activeColor : null}
            />
          </div>
        </div>
      </div>

      {/* MODAL */}
      <div>
        {isModalOpen ? (
          <Modal mainIMG={mainImg} setState={setisModalOpen} />
        ) : null}
      </div>
    </div>
  );
}

export default Gallery;

import React, { useState } from "react";
import Slider from "react-slick";
import Modal from "./Modal";
import P1 from "../images/image-product-1.jpg";
import P2 from "../images/image-product-2.jpg";
import P3 from "../images/image-product-3.jpg";
import P4 from "../images/image-product-4.jpg";

function Hero() {
  const [mainImg, setMainImg] = useState(P1);
  const [activeImg, setActiveImg] = useState();
  const [isModalOpen, setisModalOpen] = useState(false);

  const activeColor = {
    outline: "solid hsl(26, 100%, 55%)",
    opacity: "60%",
  };

  var settings = {
    infinite: true,
    speed: 500,
    arrows: true,
    slidesToShow: 1,
  };

  function setGallery(event) {
    setMainImg(event.target.src);
    setActiveImg(event.target.id);
  }

  function openModal() {
    setisModalOpen(true);
  }

  return (
    <div className="lg:mr-[125px] lg:flex lg:justify-center">
      {/* Mobile Slider */}
      <Slider {...settings} className="lg:hidden">
        <div>
          <img className="mobile-slide" src={P1} alt="Shoes" id="1" />
        </div>
        <div>
          <img className="mobile-slide" src={P2} alt="Shoes" id="2" />
        </div>
        <div>
          <img className="mobile-slide" src={P3} alt="Shoes" id="3" />
        </div>
        <div>
          <img className="mobile-slide" src={P4} alt="Shoes" id="4" />
        </div>
      </Slider>

      {/* Desktop Hero image */}
      {isModalOpen ? (
        <Modal mainIMG={mainImg} setState={setisModalOpen} />
      ) : null}
      <div
        className="hidden h-[565px] w-[445px] grid-cols-4 gap-5 lg:grid"
        role="group"
      >
        {/* Main Image */}
        <img
          className="col-span-4 cursor-zoom-in rounded-xl"
          src={mainImg}
          alt="Shoes"
          onClick={openModal}
        />
        {/* thumbnail */}
        <div>
          <img
            id="1"
            className="light-box-thumbnail"
            src={P1}
            alt="Shoes1"
            onClick={setGallery}
            style={activeImg === "1" ? activeColor : null}
          />
        </div>
        <div>
          <img
            id="2"
            className="light-box-thumbnail"
            src={P2}
            alt="Shoes2"
            onClick={setGallery}
            style={activeImg === "2" ? activeColor : null}
          />
        </div>
        <div>
          <img
            id="3"
            className="light-box-thumbnail"
            src={P3}
            alt="Shoes3"
            onClick={setGallery}
            style={activeImg === "3" ? activeColor : null}
          />
        </div>
        <div>
          <img
            id="4"
            className="light-box-thumbnail"
            src={P4}
            alt="Shoes4"
            onClick={setGallery}
            style={activeImg === "4" ? activeColor : null}
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;

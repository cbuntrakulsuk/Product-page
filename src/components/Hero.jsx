import React, { useState } from "react";
import Slider from "react-slick";
import Gallery from "./Gallery";
import Modal from "./Modal";
import P1 from "../images/image-product-1.jpg";
import P2 from "../images/image-product-2.jpg";
import P3 from "../images/image-product-3.jpg";
import P4 from "../images/image-product-4.jpg";

function Hero() {
  const [isModalOpen, setisModalOpen] = useState(false);
  const images = [P1, P2, P3, P4];

  var settings = {
    infinite: true,
    speed: 500,
    arrows: true,
    slidesToShow: 1,
  };

  function openModal() {
    setisModalOpen(true);
  }

  return (
    <div>
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

      <Gallery openModal={openModal} imageArray={images} />

      {/* MODAL */}
      <div>
        {isModalOpen ? (
          <Modal imageArray={images} setState={setisModalOpen} />
        ) : null}
      </div>
    </div>
  );
}

export default Hero;

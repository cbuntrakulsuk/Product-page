import React from "react";
import Slider from "react-slick";
import P1 from "../images/image-product-1.jpg";
import P2 from "../images/image-product-2.jpg";
import P3 from "../images/image-product-3.jpg";
import P4 from "../images/image-product-4.jpg";

function Hero() {
  var settings = {
    infinite: true,
    speed: 500,
    arrows: true,
    slidesToShow: 1,
  };
  return (
    <Slider {...settings}>
      <div>
        <img
          className="h-80 w-full object-cover object-top"
          src={P1}
          alt="Shoes"
        />
      </div>
      <div>
        <img
          className="h-80 w-full object-cover object-top"
          src={P2}
          alt="Shoes"
        />
      </div>
      <div>
        <img
          className="h-80 w-full object-cover object-top"
          src={P3}
          alt="Shoes"
        />
      </div>
      <div>
        <img
          className="h-80 w-full object-cover object-top"
          src={P4}
          alt="Shoes"
        />
      </div>
    </Slider>
  );
}

export default Hero;

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
    <div className="lg:flex lg:justify-center lg:mr-[125px]">
      {/* Mobile Slider */}
      <Slider {...settings} className="lg:hidden">
        <div>
          <img className="mobile-slide" src={P1} alt="Shoes" />
        </div>
        <div>
          <img className="mobile-slide" src={P2} alt="Shoes" />
        </div>
        <div>
          <img className="mobile-slide" src={P3} alt="Shoes" />
        </div>
        <div>
          <img className="mobile-slide" src={P4} alt="Shoes" />
        </div>
      </Slider>

      {/* Desktop Hero image */}
      <div className="hidden lg:grid grid-cols-4 h-[565px] w-[445px] gap-5">
        <img className="rounded-xl col-span-4" src={P1} alt="Shoes" />
        <div>
          <img className=" rounded-md cursor-pointer" src={P1} alt="Shoes" />
        </div>
        <div>
          <img className="rounded-md cursor-pointer" src={P2} alt="Shoes" />
        </div>
        <div>
          <img className="rounded-md cursor-pointer" src={P3} alt="Shoes" />
        </div>
        <div>
          <img className="rounded-md cursor-pointer" src={P4} alt="Shoes" />
        </div>
      </div>
    </div>
  );
}

export default Hero;

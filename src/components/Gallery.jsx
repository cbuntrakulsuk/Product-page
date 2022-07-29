import React, { useState } from "react";

function Gallery(props) {
  const [mainImg, setMainImg] = useState(() => {
    if (props.imageArray[props.index - 1] >= 0) {
      return props.imageArray[props.index - 1];
    }
    return props.imageArray[0];
  });

  const [activeImg, setActiveImg] = useState();

  const activeColor = {
    outline: "solid hsl(26, 100%, 55%)",
    opacity: "60%",
  };

  function setGallery(event) {
    setMainImg(event.target.src);
    setActiveImg(event.target.id);
    props.setIndex(event.target.id);
  }

  return (
    <div>
      <div className="lg:flex lg:justify-center">
        {/*lg:mr-[125px] */}
        <div className="hidden h-[565px] w-[445px] grid-cols-4 gap-5 lg:grid">
          {/* Main Image */}
          <img
            className="col-span-4 rounded-3xl"
            src={mainImg}
            alt="Shoes"
            onClick={props.openModal}
          />
          {/* thumbnail */}
          <div className="h-[95px] w-[95px] rounded-xl bg-white">
            <img
              id="1"
              className="light-box-thumbnail"
              src={props.imageArray[0]}
              alt="Shoes1"
              onClick={setGallery}
              style={activeImg === "1" ? activeColor : null}
            />
          </div>
          <div className="h-[95px] w-[95px] rounded-xl bg-white">
            <img
              id="2"
              className="light-box-thumbnail"
              src={props.imageArray[1]}
              alt="Shoes2"
              onClick={setGallery}
              style={activeImg === "2" ? activeColor : null}
            />
          </div>
          <div className="h-[95px] w-[95px] rounded-xl bg-white">
            <img
              id="3"
              className="light-box-thumbnail"
              src={props.imageArray[2]}
              alt="Shoes3"
              onClick={setGallery}
              style={activeImg === "3" ? activeColor : null}
            />
          </div>
          <div className="h-[95px] w-[95px] rounded-xl bg-white">
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
    </div>
  );
}

export default Gallery;

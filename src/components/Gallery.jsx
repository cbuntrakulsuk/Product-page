import React from "react";

function Gallery(props) {
  const activeColor = {
    outline: "solid hsl(26, 100%, 55%)",
    opacity: "60%",
  };

  return (
    <div>
      <div className="hidden h-[565px] w-[445px] grid-cols-4 gap-5 lg:grid">
        <img
          className="col-span-4 rounded-3xl"
          src={props.mainImg}
          alt="Shoes"
          onClick={props.openModal}
        />
        {props.imageArray.map((img, index) => {
          return (
            <div className="h-[95px] w-[95px] rounded-xl bg-white" key={index}>
              <img
                className="light-box-thumbnail"
                src={img}
                alt="Shoes"
                onClick={() => {
                  props.setMainImg(img);
                  props.setIndex(index);
                }}
                style={props.mainImg === img ? activeColor : null}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Gallery;

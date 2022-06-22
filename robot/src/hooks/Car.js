import React from "react";
import Carousel from "./Carousel";
import img2 from "../img/1.jpg";

const Car = () => {
  const imagesList = [{ img2 }, { img2 }, { img2 }];

  return (
    <div className="App">
      <Carousel images={imagesList} />
    </div>
  );
};

export default Car;

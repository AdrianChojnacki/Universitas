import React, { useState } from "react";
import { SliderData } from "./SliderData";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";

const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  if (!Array.isArray(slides) || slides.lenght <= 0) {
    return null;
  }

  return (
    <div className="slider">
      <div className="slider__arrows">
        <div className="container">
          <FaArrowAltCircleLeft className="slider__prev" onClick={prevSlide} />
          <FaArrowAltCircleRight className="slider__next" onClick={nextSlide} />
        </div>
      </div>
      {SliderData.map((slide, index) => (
        <div
          className={index === current ? "slider__slide slider__slide--active" : "slider__slide"}
          key={index}
        >
          {index === current && <img src={slide.image} alt={index} className="slider__image" />}
        </div>
      ))}
    </div>
  );
};

export default ImageSlider;

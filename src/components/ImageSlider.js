import React, { useState } from "react";
import { SliderData } from "./SliderData";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import arrowLeft from "../img/arrow-left-yellow.svg";
import arrowLeftHover from "../img/arrow-left-white.svg";
import arrowRight from "../img/arrow-right-white.svg";
import arrowRightHover from "../img/arrow-right-yellow.svg";

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
          {/* <FaArrowAltCircleLeft className="slider__prev" onClick={prevSlide} />
          <FaArrowAltCircleRight className="slider__next" onClick={nextSlide} /> */}
          <div className="slider__prev" onClick={prevSlide}>
            <img src={arrowLeft} alt="arrow-left" />
            <img className="slider__hover-arrow" src={arrowLeftHover} alt="arrow-left-hover" />
          </div>
          <div className="slider__next" onClick={nextSlide}>
            <img src={arrowRight} alt="arrow-right" />
            <img className="slider__hover-arrow" src={arrowRightHover} alt="arrow-right-hover" />
          </div>
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

import React, { useState } from "react";
import arrowLeft from "../img/arrow-left-yellow.svg";
import arrowLeftHover from "../img/arrow-left-white.svg";
import arrowRight from "../img/arrow-right-white.svg";
import arrowRightHover from "../img/arrow-right-yellow.svg";

const Slider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const bulletSlide = (index) => {
    setCurrent(index);
  };

  if (!Array.isArray(slides) || slides.lenght <= 0) {
    return null;
  }

  return (
    <div className="slider">
      <div className="slider__arrows">
        <div className="container">
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
      <div className="slider__pagination">
        {slides.map((slide, index) => (
          <div
            className={
              current === index
                ? "slider__pagination-bullet slider__pagination-bullet--active"
                : "slider__pagination-bullet"
            }
            onClick={bulletSlide.bind(null, index)}
            key={index}
          ></div>
        ))}
      </div>
      {slides.map((slide, index) => (
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

export default Slider;

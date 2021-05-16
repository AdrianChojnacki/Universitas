import React from "react";
import ImageSlider from "./ImageSlider";
import { SliderData } from "./SliderData";

function Start(props) {
  const { header1, header2, btn1, btn2 } = props;

  return (
    <section className="start">
      <ImageSlider slides={SliderData} />
      <div class="start__text-box">
        <div className="container">
          <h1 className="start__header">
            {header1}
            <br />
            <span className="start__text-blue">{header2}</span>
          </h1>
          <a className="start__first-btn btn" href="#">
            {btn1}
          </a>
          <a className="btn btn--outline" href="#">
            {btn2}
          </a>
        </div>
      </div>
    </section>
  );
}

export default Start;

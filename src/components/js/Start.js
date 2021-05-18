import React from "react";
import Slider from "./Slider";
import { SliderData } from "./SliderData";

function Start(props) {
  const { header1, header2, btn1, btn2 } = props;

  return (
    <section className="start">
      <Slider slides={SliderData} />
      <div className="start__text-box">
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

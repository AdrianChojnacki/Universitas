import React from "react";
import ImageSlider from "./ImageSlider";
import { SliderData } from "./SliderData";

function Start() {
  return (
    <div className="start">
      <ImageSlider slides={SliderData} />
      <div class="start__text-box">
        <div className="container">
          <h1 className="start__header">
            Będziesz się uczyć z ciekawością.
            <br />
            <span className="start__text-blue">Obiecujemy.</span>
          </h1>
          <a className="start__first-btn btn" href="#">
            ZOBACZ WIĘCEJ
          </a>
          <a className="btn btn--outline" href="#">
            UMÓW SIĘ Z ANIOŁEM
          </a>
        </div>
      </div>
    </div>
  );
}

export default Start;

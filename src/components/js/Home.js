import React from "react";
import ImageSlider from "./ImageSlider";
import { SliderData } from "./SliderData";

function Home() {
  return (
    <div className="home">
      <ImageSlider slides={SliderData} />
      <div class="home__text-box">
        <div className="container">
          <h1 className="home__header">
            Będziesz się uczyć z ciekawością.
            <br />
            <span className="home__text-blue">Obiecujemy.</span>
          </h1>
          <a className="home__first-btn btn" href="#">
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

export default Home;

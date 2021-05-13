import React from "react";
import ImageSlider from "./ImageSlider";
import { SliderData } from "./SliderData";

function Home() {
  return <ImageSlider slides={SliderData} />;
}

export default Home;

import React, { Component } from "react";
import axios from "axios";
import Slider from "./Slider";
// import { SliderData } from "./SliderData";

class Start extends Component {
  state = {
    content: {},
  };

  async componentWillMount() {
    const dataURL = "sliderData.json";
    const response = await axios.get(dataURL);
    const { data } = response;

    this.setState({
      content: data,
    });
  }

  render() {
    const { header1, header2, btn1, btn2 } = this.props;
    return (
      <section className="start">
        <Slider slides={this.state.content} />
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
}

export default Start;

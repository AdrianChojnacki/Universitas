import React, { Component } from "react";
import axios from "axios";
import Start from "./Start";
import Article from "./Article";
import Form from "./Form";

class Home extends Component {
  state = {
    content: {},
  };

  async componentWillMount() {
    const dataURL = "data.json";
    const response = await axios.get(dataURL);
    const { data } = response;

    this.setState({
      content: data,
    });
  }

  render() {
    return (
      <>
        <Start
          header1={this.state.content?.start?.header1}
          header2={this.state.content?.start?.header2}
          btn1={this.state.content?.start?.btn1}
          btn2={this.state.content?.start?.btn2}
        />
        <Article
          header={this.state.content?.section1?.header}
          text1={this.state.content?.section1?.text1}
          text2={this.state.content?.section1?.text2}
          linkText={this.state.content?.section1?.linkText}
          linkHref={this.state.content?.section1?.linkHref}
          listHeader={this.state.content?.section1?.listHeader}
          list={this.state.content?.section1?.list}
          img={this.state.content?.section1?.img}
        />
        <Article
          header={this.state.content?.section2?.header}
          text1={this.state.content?.section2?.text1}
          img={this.state.content?.section2?.img}
          reverse={true}
        />
        <Article
          header={this.state.content?.section3?.header}
          text1={this.state.content?.section3?.text1}
          text2={this.state.content?.section3?.text2}
          img={this.state.content?.section3?.img}
          video={this.state.content?.section3?.video}
        />
        <Form
          header1={this.state.content?.form?.header1}
          header2={this.state.content?.form?.header2}
          placeholder1={this.state.content?.form?.placeholder1}
          placeholder2={this.state.content?.form?.placeholder2}
          placeholder3={this.state.content?.form?.placeholder3}
          placeholder4={this.state.content?.form?.placeholder4}
          rodo={this.state.content?.form?.rodo}
          btn={this.state.content?.form?.btn}
        />
      </>
    );
  }
}

export default Home;

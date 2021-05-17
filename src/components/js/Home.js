import React from "react";
import provider from "./provider";
import Start from "./Start";
import Article from "./Article";
import Form from "./Form";

function Home() {
  return (
    <>
      <Start
        header1={provider.start.header1}
        header2={provider.start.header2}
        btn1={provider.start.btn1}
        btn2={provider.start.btn2}
      />
      <Article
        header={provider.section1.header}
        text1={provider.section1.text1}
        text2={provider.section1.text2}
        listHeader={provider.section1.listHeader}
        list={provider.section1.list}
        img={provider.section1.img}
      />
      <Article
        header={provider.section2.header}
        text1={provider.section2.text1}
        img={provider.section2.img}
        reverse={true}
      />
      <Article
        header={provider.section3.header}
        text1={provider.section3.text1}
        text2={provider.section3.text2}
        img={provider.section3.img}
        video={provider.section3.video}
      />
      <Form
        header1={provider.form.header1}
        header2={provider.form.header2}
        placeholder1={provider.form.placeholder1}
        placeholder2={provider.form.placeholder2}
        placeholder3={provider.form.placeholder3}
        placeholder4={provider.form.placeholder4}
        rodo={provider.form.rodo}
        btn={provider.form.btn}
      />
    </>
  );
}

export default Home;

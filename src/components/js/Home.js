import React from "react";
import content from "./content";
import Start from "./Start";
import Article from "./Article";
import Form from "./Form";

function Home() {
  return (
    <>
      <Start
        header1={content.start.header1}
        header2={content.start.header2}
        btn1={content.start.btn1}
        btn2={content.start.btn2}
      />
      <Article
        header={content.section1.header}
        text1={content.section1.text1}
        text2={content.section1.text2}
        listHeader={content.section1.listHeader}
        list={content.section1.list}
        img={content.section1.img}
      />
      <Article
        header={content.section2.header}
        text1={content.section2.text1}
        img={content.section2.img}
        reverse={true}
      />
      <Article
        header={content.section3.header}
        text1={content.section3.text1}
        text2={content.section3.text2}
        img={content.section3.img}
        video={content.section3.video}
      />
      <Form
        header1={content.form.header1}
        header2={content.form.header2}
        placeholder1={content.form.placeholder1}
        placeholder2={content.form.placeholder2}
        placeholder3={content.form.placeholder3}
        placeholder4={content.form.placeholder4}
        rodo={content.form.rodo}
        btn={content.form.btn}
      />
    </>
  );
}

export default Home;

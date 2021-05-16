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
        video="https://www.youtube.com/embed/u02tycroA30"
      />
      <Form />
    </>
  );
}

export default Home;

import React from "react";
import Start from "./Start";
import Article from "./Article";
import content from "./content";

function Home() {
  return (
    <>
      <Start />
      <Article
        header={content.section1.header}
        text={content.section1.text}
        list={content.section1.list}
        img={content.section1.img}
      />
      <Article
        header={content.section2.header}
        text={content.section2.text}
        img={content.section2.img}
        reverse={true}
      />
      <Article
        header={content.section3.header}
        text={content.section3.text}
        img={content.section3.img}
      />
    </>
  );
}

export default Home;

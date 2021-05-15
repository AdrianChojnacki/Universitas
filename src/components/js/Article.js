import React from "react";
import "../App.scss";

function Article(props) {
  const { header, text, list, img, reverse } = props;

  return (
    <div className="article">
      <div className="article__container container">
        <div className="article__box">
          <div className={`article__text ${reverse ? "article__text--reverse" : ""}`}>
            {header ? header : null}
            {text ? text : null}
            {list ? list : null}
          </div>
          <div className="article__img">
            <img src={img} alt="article" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Article;

import React from "react";
import Popup from "./Popup";
import { useState } from "react";
import videoPlay from "../img/video-play.svg";

function Article(props) {
  const { header, text, list, img, reverse, video } = props;

  const [popup, setPopup] = useState(false);

  return (
    <div className="article">
      <div className="article__container container">
        <div className="article__box">
          <div
            className={
              reverse ? "article__text-col article__text-col--reverse" : "article__text-col"
            }
          >
            {header ? header : null}
            {text ? text : null}
            {list ? list : null}
          </div>
          <div className="article__img-col">
            <div
              className={video ? "article__img-box article__img-box--video" : "article__img-box"}
              onClick={() => setPopup(true)}
            >
              <img className="article__img" src={img} alt="article" />
              {video ? (
                <img src={videoPlay} className="article__video-play" alt="video-play" />
              ) : null}
            </div>
          </div>
        </div>
      </div>
      {video ? (
        <Popup trigger={popup} setTrigger={setPopup}>
          <iframe
            width="560"
            height="315"
            src={video}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </Popup>
      ) : null}
    </div>
  );
}

export default Article;

import React from "react";
import Popup from "./Popup";
import { useState } from "react";
import videoPlay from "../img/video-play.svg";

function Article(props) {
  const { header, text1, text2, listHeader, list, img, reverse, video } = props;

  const [popup, setPopup] = useState(false);

  return (
    <section className="article">
      <div className="article__container container">
        <div className="article__box">
          <div
            className={
              reverse ? "article__text-col article__text-col--reverse" : "article__text-col"
            }
          >
            {header ? <h2 className="article__header">{header}</h2> : null}
            {text1 ? <p className="article__paragraph">{text1}</p> : null}
            {text2 ? <p className="article__paragraph">{text2}</p> : null}
            {listHeader ? <h6 className="article__list-header">{listHeader}</h6> : null}
            {list ? (
              <ul className="article__list">
                {list.map((item, index) => (
                  <li key={index} className="article__list-item">
                    {item}
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
          <div className="article__img-col">
            <div
              className={video ? "article__img-box article__img-box--video" : "article__img-box"}
              onClick={() => setPopup(true)}
            >
              <img className="article__img" src={img} alt="article" />
              {video ? (
                <>
                  <img src={videoPlay} className="article__video-play" alt="video-play" />
                  <div className="article__video-shadow"></div>
                </>
              ) : null}
            </div>
          </div>
        </div>
      </div>
      {video ? (
        <Popup trigger={popup} setTrigger={setPopup}>
          <iframe
            className="popup__video"
            src={video}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </Popup>
      ) : null}
    </section>
  );
}

export default Article;

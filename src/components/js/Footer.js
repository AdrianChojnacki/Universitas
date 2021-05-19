import React, { Component } from "react";
// import map from "../img/map.jpg";
import GoogleMap from "./GoogleMap";

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="footer__container container">
          <div>
            <div className="footer__address-box">
              <p className="footer__address">ul. Głogowska 10</p>
              <p className="footer__address">61-719 Poznań</p>
              <a className="footer__address" href="tel:612711000">
                tel. 61 27 11 000
              </a>
            </div>
            {/* <img src={map} alt="map" /> */}
            <GoogleMap />
          </div>
          <div>
            <h6 className="footer__header">O nas</h6>
            <a className="footer__link" href="#">
              Dlaczego CDV
            </a>
            <a className="footer__link" href="#">
              Kadra naukowa
            </a>
            <a className="footer__link" href="#">
              Dla mediów
            </a>
            <a className="footer__link" href="#">
              Kontakt
            </a>
          </div>
          <div>
            <h6 className="footer__header">Dla kandydata</h6>
            <a className="footer__link" href="#">
              Poradnik maturzysty
            </a>
            <a className="footer__link" href="#">
              Rekrutacja
            </a>
            <a className="footer__link" href="#">
              Kredyt studencki
            </a>
            <a className="footer__link" href="#">
              Studia dla cudzoziemców
            </a>
          </div>
          <div>
            <h6 className="footer__header">Dla studenta</h6>
            <a className="footer__link" href="#">
              Wirtualna Uczelnia
            </a>
            <a className="footer__link" href="#">
              Stypendia
            </a>
            <a className="footer__link" href="#">
              Biuro Karier
            </a>
            <a className="footer__link" href="#">
              Studiuj dalej
            </a>
          </div>
          <div>
            <h6 className="footer__header">Dla biznesu</h6>
            <a className="footer__link" href="#">
              Współpraca z biznesem
            </a>
            <a className="footer__link" href="#">
              EmotionsLAB
            </a>
            <a className="footer__link" href="#">
              Wynajem sal
            </a>
            <a className="footer__link" href="#">
              Znajdź pracownika
            </a>
          </div>
          <div>
            <h6 className="footer__header">Na skróty</h6>
            <a className="footer__link" href="#">
              Aktualności
            </a>
            <a className="footer__link" href="#">
              Wydarzenia
            </a>
            <a className="footer__link" href="#">
              WKonferencje
            </a>
            <a className="footer__link" href="#">
              Blog
            </a>
          </div>
          <p className="footer__realization">Projekt i realizacja: Crafton</p>
        </div>
      </footer>
    );
  }
}

export default Footer;

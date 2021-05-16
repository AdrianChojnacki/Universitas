import React from "react";
import map from "../img/map.jpg";

function Footer(props) {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <div>
          <p>ul. Głogowska 10</p>
          <p>61-719 Poznań</p>
          <p>tel. 61 27 11 000</p>
          <img src={map} alt="map" />
        </div>
        <div>
          <h6>O nas</h6>
          <p>Dlaczego CDV</p>
          <p>Kadra naukowa</p>
          <p>Dla mediów</p>
          <p>Kontakt</p>
        </div>
        <div>
          <h6>Dla kandydata</h6>
          <p>Poradnik maturzysty</p>
          <p>Rekrutacja</p>
          <p>Kredyt studencki</p>
          <p>Studia dla cudzoziemców</p>
        </div>
        <div>
          <h6>Dla studenta</h6>
          <p>Wirtualna Uczelnia</p>
          <p>Stypendia</p>
          <p>Biuro Karier</p>
          <p>Studiuj dalej</p>
        </div>
        <div>
          <h6>Dla biznesu</h6>
          <p>Współpraca z biznesem</p>
          <p>EmotionsLAB</p>
          <p>Wynajem sal</p>
          <p>Znajdź pracownika</p>
        </div>
        <div>
          <h6>Na skróty</h6>
          <p>Aktualności</p>
          <p>Wydarzenia</p>
          <p>WKonferencje</p>
          <p>Blog</p>
        </div>
        <p class="footer__realization">Projekt i realizacja: asdzxc</p>
      </div>
    </footer>
  );
}

export default Footer;

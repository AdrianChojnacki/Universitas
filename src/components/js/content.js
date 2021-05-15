import img1 from "../img/photo-1.jpg";
import img2 from "../img/photo-2.jpg";
import img3 from "../img/photo-3.jpg";

const content = {
  section1: {
    header: <h2>Dla kogo?</h2>,
    text: (
      <div>
        <p>
          Dedykowane nauczycielom posiadającym przygotowanie pedagogiczne, którzy chcą uzyskać
          merytoryczne i metodyczne przygotowanie do nauczania kolejnego przedmiotu - Geografii.
        </p>
        <p>
          Studia adresowane są do osób legitymujących się wyższym wykształceniem na poziomie studiów
          licencjackim o specjalnościach nadających kwalifikacje nauczycielskie i przygotowanie
          pedagogiczne, lub słuchaczy legitymujących się wyższym wykształceniem na poziomie studiów
          magisterskich nadających kwalifikacje nauczycielskie i przygotowanie pedagogiczne, zgodnie
          z Rozporządzeniem Ministra Edukacji Narodowej z dnia 1 sierpnia 2017 r. w sprawie
          szczegółowych kwalifikacji wymaganych od nauczycieli (Dz.U. 2017 poz. 1575).
        </p>
      </div>
    ),
    list: (
      <div>
        <h6>Wymagane od kandydata:</h6>
        <ul>
          <li>Ukończone studia wyższe</li>
          <li>Przygotowanie pedagogiczne</li>
        </ul>
      </div>
    ),
    img: img1,
  },
  section2: {
    header: <h2>Po co?</h2>,
    text: (
      <p>
        UW wie co zrobić, by programy proponowanych kierunków studiów były jak najbardziej
        atrakcyjne z biznesowego punktu widzenia. Do współpracy zapraszamy przedsiębiorców,
        trenerów, doświadczonych praktyków. Dbamy o to, żeby nasi studenci korzystali z
        doświadczenia i wiedzy osób, które odniosły w życiu zawodowy sukces. Dążymy do tego, by
        wybierający naszą uczelnię już w trakcie studiów mieli kontakt z jak największą liczbą
        pracodawców i praktyków biznesu ponieważ wiemy, że pomoże to im w zdobyciu wielu potrzebnych
        kwalifikacji oraz umiejętności, które zaprocentują w każdym miejscu pracy a także
        zainspiruje do poszerzania swoich kompetencji.
      </p>
    ),
    img: img2,
  },
  section3: {
    header: <h2>Z kim?</h2>,
    text: (
      <div>
        <p>
          Ciekawość jest najpotężniejszą cechą ludzką, która popycha ludzi do ciągłego rozwoju. CDV
          to miejsce, w którym studenci z zainteresowaniem i z przyjemnością zdobywają wiedzę.
          Zarówno studenci, absolwenci, jak i pracownicy to osoby nie tylko ciekawe świata, ale
          także pełne pasji w odkrywaniu nowych rzeczy i w pozytywny sposób wpływające na swoje
          otoczenie.
        </p>
        <p>
          Nasze kierunki studiów są interesujące i innowacyjne, tworzone we współpracy z
          pracodawcami oraz na podstawie trendów w światowej gospodarce i kierunku zmian na
          dynamicznym rynku pracy. Nasi absolwenci znajdują pracę zgodną ze swoimi zainteresowaniami
          i wykształceniem.
        </p>
      </div>
    ),
    img: img3,
  },
};

export default content;

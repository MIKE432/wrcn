import { FC } from 'react';
import Image from 'next/image';

export const MainPage: FC = () => {
  return (
    <>
      <div className="home-banner width-max">
        <div className="cnt">
          <img
            className="logo"
            src="assets/logo/numido/favicon-96x96.png"
            alt="Logo firmy Numido - Sudio numizmatyczne"
          />
        </div>
        <div className="cnt width-small">
          <h1 className="app-title">
            Numido <span className="dot">Studio Numizmatyczne</span>
          </h1>
          <h2 className="app-headline">
            <span className="asterisk">Doradztwo</span>{' '}
            <span className="asterisk">Pośrednictwo</span>{' '}
            <span className="asterisk">Sprzedaż</span>{' '}
            <span className="asterisk">Zakup</span>
          </h2>
          <p>
            Zastanawiają się <b>Państwo</b>, czy posiadane przez Was monety mają
            wartość kolekcjonerską? Cena pojedyńczej monety nie zawsze zależy od
            wieku czy kruszcu, z którego została wykonana. Na wartość monety
            składa się wiele czynników: po pierwsze od rzadkości występowania
            monety, po drugie od jej stanu zachowania oraz oczywiście od rodzaju
            kruszcu i jego ilości.
          </p>
        </div>
      </div>
      <div className="content width-normal">
        <p>
          Moja firma powstała z pasji. Sam jestem kolekcjonerem i numizmatyką
          zajmuję się od kiedy pamiętam. Szczególnie interesuję się....
          <br></br>
          Chętnie doradzę, zakupię lub wymienię, sprzedam lub pomogę w
          pośrednictwie sprzedaży czy gradingu monet.
          <br></br>
          Znajdziesz mnie w moim studio we Wrocławiu.
          <iframe
            style={{ width: '100%', height: '50vh' }}
            frameBorder="0"
            scrolling="no"
            marginHeight={0}
            marginWidth={0}
            src="https://maps.google.com/maps?q=Krucza 2A, 53-411 Wrocław&amp;t=m&amp;z=15&amp;output=embed&amp;iwloc=near&amp;hl=pl"
            title="Numido - Studio numizmatyczne, Krucza 2A, 53-411 Wrocław"
            aria-label="Numido - Studio numizmatyczne, Krucza 2A, 53-411 Wrocław"
          />
        </p>
        <h2 className="">
          <span className="material-icons">&#xea4a</span> Doradztwo
        </h2>
        <p>
          Posiadasz monety? Chcesz wiedzieć, ile są warte? Potrafimy uczciwie,
          wiarygodnie i rzetelenie wycenić Twoją kolekcję. Zapewniamy dyskresję.
          Znamy się na tym (warto napisać coś co w oczach klienta uwiarygodni).
          Uczciwe wyceny kolekcjonerskie a nie lombardowe.
        </p>
        <h2>
          <span className="material-icons">&#xEBCB</span> Pośrednictwo
        </h2>
        <p>
          Posiadamy odpowiednie kontakty w przypadku jeśli chcesz sprzedać
          niekoniecznie u nas. Potrafimy znaleźć nabywcę i pomóc ci w wykonaniu
          transakcji. Wsparcie przy transakcji/sprzedaży.
        </p>
        <p>Kompleksowe pośrednictwo w procesie gradingu monet.</p>
        <h2>
          <span className="material-icons">&#xE8CC</span> Zakup
        </h2>
        <p>
          Jeśli posiadają Państwo stare monety, nasza firma chętnie dokona
          wyceny i je od Ciebie wykupi! Bezproblemowy dojazd w umówione miejsce
          lub w naszym studio numizmatycznym. Płatność gotówką od ręki.
          Wiarygodnym i rzetelnym płatnikiem. Nie zalegamy z naszymi
          należnościami. monety srebrne, złote, miedziane z Polski i innych
          państw, talary, dukaty, orty, szóstaki, trojaki, grosze, półtoraki,
          szelągi, denary, obole, ruble i kopiejki, złotówki i grosze, dolary i
          franki, guldeny, korony, krajcary i inne
        </p>
        <h2>
          <span className="material-icons">&#xEf63</span> Sprzedaż
        </h2>
        <p>
          W swojej kolekcji mamy wiele ciekawych okazów. Jeśli jakiegoś nie
          posiadamy, potrafimy znaleźć dla Ciebie poszukiwany przedmiot.
        </p>
        <h2>
          <span className="material-icons">&#xE0BE</span> Kontakt
        </h2>
        <label>
          E-mail: <input type="email" />
        </label>
        <br />
        <label>
          Temat: <input type="text" />
        </label>
      </div>
      <div className="status">
        <a href="/">Numido</a>
        <br />
        Dane adresowe itp.
        <ul style={{ columns: 2 }}>
          NBP
          <li>
            <a
              target="_BLANK"
              href="https://www.nbp.pl/home.aspx?f=/banknoty_i_monety/monety_okolicznosciowe/sprzedaz.html"
              rel="noreferrer"
            >
              NBP - Banknoty i monety
            </a>
          </li>
          <li>
            <a
              target="_BLANK"
              href="https://www.nbp.pl/home.aspx?f=/banknoty_i_monety/abc_kolekcjonera/numizmatyka.html"
              rel="noreferrer"
            >
              NBP - ABC kolekcjonera
            </a>
          </li>
          <br></br>
          Sklepy numizmatyczne
          <li>
            <a
              target="_BLANK"
              href="https://www.e-kolekcjoner.pl/"
              rel="noreferrer"
            >
              e-kolekcjoner.pl
            </a>
          </li>
          <li>
            <a
              target="_BLANK"
              href="https://numizmatyczny.com/"
              rel="noreferrer"
            >
              Numizmatyczny.com
            </a>
          </li>
          <li>
            <a target="_BLANK" href="https://azaurum.pl/" rel="noreferrer">
              AZ Aurum - Adam Zieliński
            </a>
          </li>
          <li>
            <a target="_BLANK" href="https://azaurum.pl/" rel="noreferrer">
              AZ Aurum - Adam Zieliński
            </a>
          </li>
          <li>
            <a target="_BLANK" href="https://numimarket.pl/" rel="noreferrer">
              Numimarket
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

import Image from "next/image";
import GoldZuruckGarantie from "/public/assets/img/homepage/gold_zuruck_garantie.png";
import KostenloserVersand from "/public/assets/img/homepage/kostenloser_versand.png";

const GoldankaufOnine = () => {
  return (
    <section className="goldankauf-onine-wrapper">
      <div className="container d-flex flex-column">
        <div className="row">
          <div className="col-12 col-md-12 col-lg-6 mb-4">
            <div className="goldankauf-onine">
              <h2>
                Goldankauf online <br /> mit Gold-zurück-Garantie
              </h2>
              <Image src={GoldZuruckGarantie} alt="" width={160} height={160} />
              <p>
                Wenn Sie Ihr Gold, Silber oder andere Edelmetalle zu Geld machen
                möchten, haben Sie bei moneyGold.de jetzt die Möglichkeit dazu.
                Ist es Ihr großer Wunsch, für nicht mehr benötigte
                Wertgegenstände einen hohen Preis zu erzielen, sollten Sie sich
                näher mit unserem bewährten Ankaufsverfahren befassen. Wir
                bieten Ihnen einen bequemen und unverbindlichen online
                Goldankauf an. Die Abwicklung des Goldankaufs erfolgt per Post
                und wir sichern Ihnen eine schnelle Abwicklung sowie einen
                überaus fairen Auszahlungsbetrag zu.
              </p>
            </div>
          </div>
          <div className="col-12 col-md-12 col-lg-6">
            <div className="goldankauf-onine">
              <h2>
                Ankauf von Goldbarren, Schmuck, <br />
                Zahngold und mehr!
              </h2>
              <Image src={KostenloserVersand} alt="" width={160} height={160} />
              <p>
                Ob Sie nun Goldbarren, Goldmünzen oder Zahngold verkaufen wollen
                – fordern Sie von uns eine sichere und kostenlose Versandtasche
                an und senden Sie uns Ihre Wertgegenstände. Unser kompletter
                Service bringt für Sie keinerlei Kosten mit sich! Für eine
                Versicherungshöhe bis maximal 1,5 Millionen Euro haben Sie die
                Möglichkeit, eine kostenlose Abholung Ihrer Wertsendung zu
                buchen. Sollten Sie zum genauen Ablauf weitere Fragen haben,
                scheuen Sie sich bitte nicht mit uns in Kontakt zu treten.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GoldankaufOnine;

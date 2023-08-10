import Image from "next/image";
import KitcoGoldTab from "../shared/KitcoGoldTab";
import Ntv from "/public/assets/img/homepage/hero-ntv.png";

const GoldankaufKotenloser = () => {
  return (
    <section className="goldenfauf_wrapper">
      <div className="wrapper text content">
        <div className="container">
          <div className="row GoldankaufKotenloser_">
            <div className="col-12 col-md-8 ">
              <h2 className="text-left GoldankaufKotenloser-heading">
                Goldankauf - kostenloser &amp; versicherter Versand
              </h2>
              <div className="d-flex flex-sm-column flex-lg-row GoldankaufKotenloser-img">
                <Image
                  src={Ntv}
                  alt="Goldankauf bei moneyGold.de"
                  title="Goldankauf bei moneyGold.de"
                />
                <p className="text-left Goldankauf_para1_">
                  Bevor Sie von unserem attraktiven Ankaufspreis beim Goldankauf
                  profitieren können, steht Ihnen auf unserer Website ein
                  Edelmetall-/Goldrechner zur Verfügung, der die aktuellen Werte
                  Ihrer Schmuckstücke online berechnet. So können Sie bereits im
                  Vorfeld in Erfahrung bringen, was Ihre eingereichten Werte
                  einbringen können. Der aktuelle Goldpreis wird bei jedem
                  Ankauf transparent dargestellt. Selbstverständlich orientieren
                  wir uns mit unseren Ankaufspreisen für Edelmetallen, an den
                  aktuellen Entwicklungen der Edelmetallkurse an den Weltbörsen.
                </p>
              </div>
              <h2 className="GoldankaufKotenloser-heading2">
                Bereits über 150.000 zufriedene Kunden
              </h2>
              <p className="text-left Goldankauf_para2_">
                Über 150.000 zufriedene Kunden können nicht irren! Lassen Sie
                uns einfach Ihr Zahngold, Ihre Silber- und Goldbarren sowie
                Goldmünzen zukommen und wir werden Ihre Wertgegenstände
                kostenlos prüfen und bewerten. Spätestens 48 Stunden nach
                Eingang der Sendung unterbreiten wir Ihnen per E-Mail ein
                unverbindliches Angebot zu tagesaktuellen
                Edelmetall-/Goldpreisen. Sollte Ihnen unser Angebot wider
                Erwarten nicht zusagen, ist eine hundertprozentige
                Gold-zurück-Garantie ohne weitere Kosten eine
                Selbstverständlichkeit.
              </p>
            </div>
            <div className="col-12 col-md-12 col-lg-4 Kitco_gold">
              <KitcoGoldTab />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GoldankaufKotenloser;

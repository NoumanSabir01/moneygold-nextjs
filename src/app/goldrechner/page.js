"use client";
import EtrusredShop from "@/components/shared/EtrusredShop";
import GoldCard2 from "@/components/shared/GoldCard2";
import PriceValueForm from "@/components/shared/PriceValueForm";
import Clock from "@/components/shared/clock/Clock";
import Pricing from "@/components/shared/pricing/Pricing";
const page = () => {
  const pricingParagraph = `
    Erfahren Sie, wie viel Geld Sie für Ihre Edelmetalle aktuell erhalten.
    Mit dem Edelmetall-Rechner können Sie die Ankaufspreise für Gold, Silber,
    Platin, Palladium und Zahngold auf Grundlage der aktuellen Börsenkurse berechnen.
    <sup>1,2</sup>
  `;
  return (
    <section className="goldrechner_wrapper">
      <div className="goldrechner_clock">
        <div className="goldrechner_clock_analog">
          <div>
            <Clock timeZone="London" />
            <p className="text-center">LONDON</p>
          </div>
          <div>
            <Clock timeZone="FRANKFURT" />
            <p className="text-center">FRANKFURT</p>
          </div>
          <div>
            <Clock timeZone="New York" />
            <p className="text-center">NEW YORK</p>
          </div>
        </div>
        <div className="goldrechner_clock_upper_div">
          <div className="container">
            <div className="goldrechner_clock_upper_div_wrap">
              <p className="goldrechner_clock_upper_div_para1">
                <strong>Goldkurs aktualisierung</strong> <br />
                Live alle 5 minuten
              </p>
              <p className="goldrechner_clock_upper_div_para2">
                <strong>Handelszeiten: Mo BIS FR </strong> <br />
                VON 09:00 BIS 18:00 UHR
              </p>
            </div>
          </div>
        </div>
        <div className="goldrechner_clock_analog_mobile">
          <div>
            <Clock timeZone="London" />
            <p className="text-center">LONDON</p>
          </div>
          <div>
            <Clock timeZone="FRANKFURT" />
            <p className="text-center">FRANKFURT</p>
          </div>
          <div>
            <Clock timeZone="New York" />
            <p className="text-center">NEW YORK</p>
          </div>
        </div>
        <div className="goldrechner_clock_lower_div">
          <div className="container">
            <div className="goldrechner_clock_lower_div_wrap">
              <p className="goldrechner_clock_lower_div_para1">
                <strong>Aktualisierung in</strong> <br />
                15 Minuten 43 Sekunden
              </p>
              <p className="goldrechner_clock_lower_div_para2">
                EdelmetalL
                <br />
                Handelsplatz (Börse)
                <br />
                Geschlossen
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="pricing">
        <Pricing
          priceHeading="Berechnen Sie den börsenaktuellen Wert Ihrer Edelmetalle"
          paragraph={pricingParagraph}
          textAlign="left"
          goldrechner
        />
        <div className="d-flex justify-content-center align-items-center">
          <button className=" text-white pricing-btn">
            JETZT wert berechnen
          </button>
        </div>
      </div>
      <section className="values-form">
        <div className="container current-value">
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <div className="current-value-left">
                <div className="d-flex flex-column justify-content-center align-items-center">
                  <h2 className="text-center mb-2">
                    Aktueller Wert Ihrer Edelmetalle
                  </h2>
                  <h4 className="fw-normal mb-0 sie">
                    Sie erhalten abzugsfrei von uns:
                  </h4>
                  <div className="current-price">3.438,40 €</div>
                </div>
                <div className="d-flex justify-content-center align-items-center flex-lg-row flex-column">
                  <div className="calc-table flex-fill">
                    <h5 className="text-center p-2 mt-3">
                      Ihre Berechnung im Detail:
                    </h5>
                    <table className="table">
                      <tbody>
                        <tr className="">
                          <td>20 Gramm</td>
                          <td className="text-center">999er Feingold</td>
                          <td className="text-end">zu 1.158,40 €</td>
                        </tr>
                        <tr className="">
                          <td>40 Gramm</td>
                          <td className="text-center">986er Gold</td>
                          <td className="text-end">zu 2.280,40 €</td>
                        </tr>
                        <tr className="brdr-btm">
                          <td colSpan="2" className="fw-bold">
                            Ihr Auszahlungsbetrag
                          </td>
                          <td className="fw-bold text-end">3.438,40 €</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="triangle-right"></div>
                  <div className="triangle-down"></div>
                </div>
              </div>
            </div>
            <div className="col-md-12 col-lg-4 kostenlos-wrapper">
              <PriceValueForm />
            </div>
          </div>
        </div>
      </section>
      <section className="container">
        <div className="row goldrechner_heading_paras_row">
          <div className="col-12 col-md-12 col-lg-8">
            <div className="goldrechner_heading_paras">
              <h2 className="goldrechner_heading_1">
                Goldankauf Preise ermitteln
              </h2>
              <p className="goldrechner_heading_para1">
                Wählen Sie die passende Legierung im Altgold Rechner aus und
                tragen Sie dort das Gewicht Ihrer Schmuckstücke und
                Wertgegenstände ein. Automatisch erscheint im Feld darunter der
                aktuelle Wert Ihrer Edelmetalle. Für die Berechnung stehen Ihnen
                verschiedene Legierungen von Gold, Silber, Platin und Palladium
                zur Verfügung. Neben reinem Gold besteht die Möglichkeit
                Zahngold in zwei Legierungen zu berechnen. Oft befinden sich
                noch Zahn- oder Keramikreste am Zahngold, welche den
                tatsächlichen Wert beeinflussen. Unser Rechner zieht
                durchschnittliche Werte ab, um Ihnen möglichst genaue Zahngold
                Preise zu ermitteln. Bitte beachten Sie, dass auch der
                tatsächliche Wert von anderen Wertgegenständen aufgrund von
                Steinbesatz oder ähnlichem vom hier ermittelten Wert abweichen
                kann.
              </p>
              <p className="goldrechner_heading_paras_link">
                Wie wird der Goldwert berechnet?
              </p>
              <h2 className="goldrechner_heading_2">Die nächsten Schritte</h2>
              <p className="goldrechner_heading_para2">
                Möchten Sie Schmuckstücke, Zahngold oder andere Wertgegenstände
                aus Edelmetall verkaufen, folgen Sie einfach den nächsten
                Schritten auf unserer Seite. Nach Berechnung des ungefähren
                Wertes Ihrer Gegenstände, haben Sie die Möglichkeit durch Klick
                auf „Ankauf unverbindlich starten“ eine Versandart zu wählen
                oder ab einem Wert von über 1000 Euro eine kostenlose Abholung
                zu buchen. Sobald das Gold bei uns eingetroffen ist, ermitteln
                wir den Wert. Dafür steht uns ein modern eingerichtetes Labor
                mit hochwertigen Analyseinstrumenten zur Verfügung. Wenn die
                Laboruntersuchung abgeschlossen ist, aber spätestens nach 48
                Stunden, erhalten Sie von uns ein konkretes Angebot mit einer
                detaillierten Preisangabe.
              </p>
              <h2 className="goldrechner_heading_3">
                Unser Goldpreisrechner pro Gramm in Euro
              </h2>
              <p className="goldrechner_heading_para3">
                Viele unserer Kunden haben bereits unseren live Goldpreisrechner
                genutzt, um den aktuellen Goldwert für Ihre Gegenstände
                eigenständig berechnen zu können. Hierbei können Sie sich auf
                die Realtime Goldankauf Preise in unserem Rechner verlassen. Wir
                führen regelmäßig einen Abgleich mit dem Live Goldkurs durch und
                bieten Ihnen damit einen sehr attraktiven Preis je Gramm Gold.
                Die Bedingung des Kurs Rechners ist intuitiv und sollte Ihnen
                sehr leicht fallen.
              </p>
              <p className="goldrechner_heading_para3">
                Gerne erklären wir Ihnen die Handhabung aber auch in einem
                Telefonat oder per E-Mail. Es kann durchaus sein, dass im
                Goldpreis Rechner nicht alle Goldlegierungen hinterlegt sind,
                aufgrund der Vielzahl an unterschiedlichen Legierungen haben wir
                uns auf die wesentlichen beschränkt. Dies gilt ebenfalls für die
                weiteren Edelmetalle Silber, Platin, Palladium und den
                Sonderfall Zahngold. Auch wenn die von Ihnen gesuchte Legierung
                nicht hinterlegt sein sollte, bedeutet dies nicht, dass wir
                Ihnen nicht den Ankauf anbieten können. In solchen Fällen kommt
                unser Team aus der Analyse auf Sie zurück und teil Ihnen den
                möglichen Ankaufspreis mit.
              </p>
              <p className="goldrechner_heading_para3">
                Durch den Sachverhalt, dass Sie die Preise für Gold je Gramm in
                Euro berechnen können, können Sie in aller Regel einen sehr
                exakten Goldankauf Preis mit dem Rechner bestimmen. So gewinnen
                Sie vorab schon einen Überblick darüber, wie viel Ihr Gold
                aktuell in Euro wert ist. Denken Sie auch daran, dass wir Ihnen
                die Gold-zurück-Garantie anbieten, sodass Sie ohne Angabe von
                Gründen vom Ankauf zurücktreten können. Für diesen Fall findet
                eine versicherte Rücksendung Ihrer Edelmetalle statt.
              </p>
              <p className="goldrechner_last_para">
                1) Ankaufspreise: Unsere Ankaufspreise sind mit dem aktuellen
                Börsenkurs des entsprechenden Edelmetalls gekoppelt. Diese
                ändern sich daher mehrmals täglich. Entscheidend für den
                eigentlichen Ankaufspreis (sofern über den Postweg) gilt der
                Preis zum Zeitpunkt der Auswertung Ihrer Edelmetalle. Die
                Auswertung erfolgt innerhalb von 48 Stunden nach Eingang in
                unseren Geschäftsräumen.
              </p>
              <p className="goldrechner_last_para">
                2) Gewichtsermittlung: Wir weisen darauf hin, dass das exakte
                Edelmetallgewicht vieler Schmuckstücke und Wertgegenstände, wie
                z. B. Ringe mit Steinbesatz, Zahngold mit Zahn- und/oder
                Keramikresten, befüllte Armreifen und Manschettenknöpfe nur
                durch Beschädigung bzw. Zerstörung des Gegenstandes ermittelt
                werden könnte. Im Gegensatz zu manchen Mitbewerbern, die häufig
                ungefragt Gegenstände beschädigen oder gar zerstören, schätzen
                wir das Edelmetallgewicht in diesem Fall fachmännisch ab. Dies
                geschieht in Ihrem Interesse, um Ihre Schmuckstücke und
                sonstigen Gegenstände nicht zerstören zu müssen. Nach Schätzung
                bieten wir Ihnen unseren Ankaufpreis, basierend auf dem von uns
                geschätzten Edelmetallgewicht, an. Sollten Sie mit dem Angebot
                nicht einverstanden sein, erhalten Sie Ihre unzerstörten
                Gegenstände selbstverständlich kostenfrei zurück.
              </p>
            </div>
          </div>
          <div className="col-12 col-md-12 col-lg-4 gold_and_etrustedshpw_wrapper">
            <div className="abgeschlossen_wertsendung_rightside">
              <EtrusredShop />
              <GoldCard2 />
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default page;

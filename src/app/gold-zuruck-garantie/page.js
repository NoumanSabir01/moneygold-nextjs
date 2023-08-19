"use client";
import EtrusredShop from "@/components/shared/EtrusredShop";
import KitcoGoldTab from "@/components/shared/KitcoGoldTab";
import PriceValueForm from "@/components/shared/PriceValueForm";
import Button from "@/components/shared/button/Button";
import { gold_zuruck_garantieVideoArray } from "@/public/static/HomepageStatic";
import Image from "next/image";
import GoldZuruck from "/public/assets/img/homepage/nur_noch_gold_zuruck.png";
const page = () => {
  const VorteileArray = [
    {
      tickIcon: <i class="fa fa-check" aria-hidden="true"></i>,
      listText: "transparente und schnelle Abwicklung",
    },
    {
      tickIcon: <i class="fa fa-check" aria-hidden="true"></i>,
      listText: "MoneyGold zahlt hohe Ankaufspreise",
    },
    {
      tickIcon: <i class="fa fa-check" aria-hidden="true"></i>,
      listText: "keine Gebühren und Abzüge",
    },
    {
      tickIcon: <i class="fa fa-check" aria-hidden="true"></i>,
      listText: "über 150.000 zufriedene Kunden",
    },
    {
      tickIcon: <i class="fa fa-check" aria-hidden="true"></i>,
      listText: "kostenloser Versandservice",
    },
  ];
  return (
    <section className="gold_zuruck_garantie_wrapper">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-12 d-lg-none">
            <div className="gold_zuruck_garantie_pricing">
              <PriceValueForm />
            </div>
          </div>
          <div className="col-12 col-md-12 col-lg-8">
            <h2 className="gold_zuruck_garantie_wrapper_heading1">
              Goldankauf online mit Gold-zurück-Garantie
            </h2>
            <div className="gold_zuruck_garantie_unverbindlich">
              <Image
                src={GoldZuruck}
                alt="gold zuruck"
                width={174}
                height={174}
              />
              <div className="gold_zuruck_garantie_unverbindlich_paras">
                <p className="gold_zuruck_garantie_unverbindlich_para1">
                  Mit unserer
                  <strong>100% Zufriedenheit oder Gold-Zurück-Garantie</strong>
                  gehen Sie beim Verkauf Ihrer Edelmetalle absolut kein Risiko
                  mehr ein.
                </p>
                <p className="gold_zuruck_garantie_unverbindlich_para2 d-none d-md-block d-lg-block">
                  Wir analysieren und werten Ihre Sendung innerhalb von 48
                  Stunden nach Eingang in unsere Geschäftsräume aus. In dieser
                  Zeit erhalten Sie das Analyse- Ergebnis per eMail mitgeteilt.
                  Erst nach Ihrer Freigabe veranlassen wir die Auszahlung per
                  Banküberweisung. Sollten Sie mit der Auswertung nicht
                  zufrieden sein, schicken wir Ihnen Ihre Edelmetalle umgehend
                  kostenfrei und versichert zurück.
                </p>
                <Button
                  btnText="Ankauf unverbindlich starten"
                  className="gold_zuruck_garantie_unverbindlich_btn d-none d-md-block d-lg-block"
                  width="397px"
                  borderRadius="10px"
                  margin="15px 0px"
                />
              </div>
            </div>
            <p className="gold_zuruck_garantie_unverbindlich_para2 d-md-none d-lg-none">
              Wir analysieren und werten Ihre Sendung innerhalb von 48 Stunden
              nach Eingang in unsere Geschäftsräume aus. In dieser Zeit erhalten
              Sie das Analyse- Ergebnis per eMail mitgeteilt. Erst nach Ihrer
              Freigabe veranlassen wir die Auszahlung per Banküberweisung.
              Sollten Sie mit der Auswertung nicht zufrieden sein, schicken wir
              Ihnen Ihre Edelmetalle umgehend kostenfrei und versichert zurück.
            </p>
            <Button
              btnText="Ankauf unverbindlich starten"
              className="gold_zuruck_garantie_unverbindlich_btn d-md-none d-lg-none"
              width="397px"
              borderRadius="10px"
              margin="15px 0px"
            />
            <div className="gold_zuruck_garantie_row2_col1">
              <h2 className="gold_zuruck_garantie_row2_col1_heading">
                Ihre Vorteile bei moneyGold.de
              </h2>
              <ul>
                {VorteileArray.map((item, index) => {
                  return (
                    <li>
                      <div className="gold_zuruck_garantie_row2_col1_item">
                        <div className="gold_zuruck_garantie_row2_col1_icon">
                          {item.tickIcon}
                        </div>

                        <p className="gold_zuruck_garantie_row2_col1_li_para">
                          {item.listText}
                        </p>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div>
              <p className="gold_zuruck_garantie_row2_col1_para2">
                Dank der Garantie können Sie ganz entspannt einem Goldankauf mit
                moneyGold entgegensehen. Sie gehen kein Risiko ein, da Sie zu
                jeder Zeit Ihr Gold zurückverlangen können. Dies hat für Sie
                erhebliche Vorteile und sollte dementsprechend auch von Ihnen
                genutzt werden. Wir sind sehr bemüht unseren Kunden immer ein
                faires Ankaufsangebot zu unterbreiten. Nutzen Sie vor der
                Einsendung Ihrer Edelmetalle unseren Goldrechner und erfassen
                den möglichen Ankaufspreis. Sollten Sie Probleme bei der
                Bestimmung der einzelnen Legierungen haben, hilft Ihnen mit
                Sicherheit ein Blick in unser Lexikon.
              </p>
              <p className="gold_zuruck_garantie_row2_col1_para3">
                Mehr als 150.000 Kunden in den letzten Jahren sprechen eine
                klare Sprache und dokumentieren unser seriöses Angebot. Lassen
                Sie sich unseren komfortablen Service nicht entgehen, welcher
                Ihnen neben der kostenlosen und bereits vorfrankierten
                Versandtasche, auch eine Abwicklung innerhalb von wenigen
                Werktagen garantiert.
              </p>
            </div>
            <div>
              <h2 className="gold_zuruck_garantie_row2_col1_heading2">
                Das sagen unsere Kunden über moneyGold.de
              </h2>
              <div className="row ">
                {gold_zuruck_garantieVideoArray.map((item, index) => {
                  return (
                    <div className="col-12 col-md-6 col-lg-6 ">
                      <div
                        className={`gold_zuruck_garantie_vedio_card${index}`}
                      >
                        <iframe
                          width={item.width}
                          height={item.height}
                          src={item.src}
                          title={item.title}
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowFullScreen
                        ></iframe>
                        <p>{item.text}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
              <p className="gold_zuruck_garantie_vedio_para1">
                Sollten Sie noch nicht ganz sicher sein, ob der online
                Goldankauf für Sie die richtige Wahl ist, dann wenden Sie sich
                bitte vertrauensvoll an unseren Kundenservice, welcher Ihnen
                gerne bei Ihren Fragen weiterhilft oder werfen Sie alternativ
                einen Blick auf unsere Verkaufsanleitung.
              </p>
              <p className="gold_zuruck_garantie_vedio_para2">
                Mehr als 6.500 positive Kundenbewertungen auf dem unabhängigen
                Bewertungsportal eKomi können nicht irren. Auch die vielen
                Stammkunden, welche in regelmäßigen Abständen an unser
                Unternehmen verkaufen. Bestellen Sie jetzt unverbindlich eine
                Versandtasche und haben trotzdem immer die Möglichkeit vom
                Ankauf aufgrund der Gold-zurück-Garantie zurückzutreten.
              </p>
            </div>
          </div>
          <div className="col-12 col-md-12 col-lg-4">
            <div className="gold_zuruck_garantie_right_side">
              <div className="gold_zuruck_garantie_pricing d-none d-lg-block">
                <PriceValueForm />
              </div>
              <div className="gold_zuruck_garantie_kitco_gold_tab">
                <KitcoGoldTab />
              </div>
              <div className="gold_zuruck_garantie_kitco_gold_tab">
                <EtrusredShop />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;

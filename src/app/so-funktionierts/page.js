import BtnArrow from "@/components/home/BtnArrow";
import BtnArrowMobile from "@/components/home/BtnArrowMobile";
import EtrusredShop2 from "@/components/shared/EtrusredShop2";
import PriceValueForm from "@/components/shared/PriceValueForm";
import ValueCalc from "@/components/shared/ValueCalc";
import Breadcrumbs from "@/components/shared/breadcrumb/BreadcrumbsComponent";
import Button from "@/components/shared/button/Button";
import Image from "next/image";
import Link from "next/link";
import Auswahlen from "/public/assets/img/funktionierts_auswahlen.png";
import GoldschmuckWir from "/public/assets/img/homepage/wir_ankaufen_goldshmuck.png";
import LuxuryWir from "/public/assets/img/homepage/wir_ankaufen_luxusuhren_mg.png";
import Silber from "/public/assets/img/homepage/wir_ankaufun_silber.png";
import Zahngold from "/public/assets/img/homepage/wir_ankaufun_zahngold.png";

const page = () => {
  return (
    <section className="funktionierts_wrapper">
      <div className="container">
        <Breadcrumbs />
        <div className="d-lg-none funktionierts_price_form">
          <PriceValueForm />
        </div>
        <div className="row">
          <div className="col-12 col-lg-8">
            <div>
              <h2 className="funktionierts_wrapper_heading1">
                Verkaufen Sie Ihr Gold in nur 4 einfachen Schritten
              </h2>
              <p className="funktionierts_wrapper_para1">
                Unser Service ist für Sie zu 100% kostenlos, börsenaktuell und
                unverbindlich.
              </p>
              <div className="funktionierts_wrapper_video">
                <iframe
                  width="620"
                  height="348"
                  src="https://www.youtube.com/embed/hb8pfJURd7w"
                  title="So funktioniert moneyGold.de - online Goldankauf einfach erklärt!"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            <div className="funktionierts_wrapper_auswahlen">
              <div className="funktionierts_wrapper_auswahlen1">
                <Image src={Auswahlen} alt="auswahlen" />
                <div className="auswahlen_line1"></div>
                <div className="funktionierts_wrapper_auswahlen1_heading_paras">
                  <h3 className="funktionierts_wrapper_auswahlen_heading1">
                    Versicherte Versandart auswählen
                  </h3>
                  <p className="funktionierts_wrapper_auswahlen_para1">
                    Wir bieten Ihnen 3 kostenlose Versandarten aus:
                  </p>
                  <Link
                    className="versandtasche_link"
                    href="/versandtasche-bestellen"
                    passHref
                  >
                    1. Versandtasche
                  </Link>
                  <p className="funktionierts_wrapper_auswahlen_para2">
                    Bei einem Wert von bis zu 1.000 Euro können Sie das
                    Bestellformular für unsere kostenlose Versandtasche
                    ausfüllen und Sie erhalten Ihre persönliche
                    Versandunterlagen in wenigen Tagen per Post zugeschickt.
                  </p>
                  <Link
                    className="versandtasche_link2"
                    href="/eigenes-versandmaterial"
                    passHref
                  >
                    2. Eigenes Versandmaterial
                  </Link>
                  <p className="funktionierts_wrapper_auswahlen_para3">
                    Bei einem Wert von unter 1.000 Euro können Sie auch Ihren
                    eigenen Versandkarton nutzen und die Versandunterlagen
                    ausdrucken.
                  </p>
                  <Link
                    className="versandtasche_link3"
                    href="/wertsendung"
                    passHref
                  >
                    3. Abholung per Wertkurier
                  </Link>
                  <p className="funktionierts_wrapper_auswahlen_para4">
                    Bei größeren Edelmetall-Werten ab 1.000 Euro - 100.000 Euro
                    nutzen Sie bitte unseren kostenlosen Wertkurier.
                  </p>
                </div>
              </div>
              <div className="funktionierts_wrapper_auswahlen2">
                <Image
                  src={Auswahlen}
                  alt="auswahlen"
                  className="auswahlen_img2"
                />
                <div className="auswahlen_line2"></div>
                <div className="funktionierts_wrapper_auswahlen2_heading_paras">
                  <h3 className="funktionierts_wrapper_auswahlen2_heading1">
                    Edelmetalle versenden
                  </h3>
                  <p className="funktionierts_wrapper_auswahlen2_para1">
                    Füllen Sie die{" "}
                    <Link
                      className="versandtasche_link"
                      href="/versandtasche-bestellen"
                      passHref
                    >
                      Versandtasche
                    </Link>{" "}
                    oder Ihren{" "}
                    <Link
                      className="versandtasche_link2"
                      href="/eigenes-versandmaterial"
                      passHref
                    >
                      eigenen Versandkarten
                    </Link>{" "}
                    mit den zu verkaufenden Schmuckstücken und geben diesen bei
                    der Deutschen Post kostenlos ab. Die Sendung ist automatisch
                    bis 1.000 Euro versichert.
                  </p>
                  <p className="funktionierts_wrapper_auswahlen2_para2">
                    Bei einem Wert ab 1.000 Euro holt ein{" "}
                    <Link
                      className="versandtasche_link3"
                      href="/wertsendung"
                      passHref
                    >
                      Wertkurier
                    </Link>{" "}
                    ihre Edelmetalle kostenlos ab.
                  </p>
                </div>
              </div>
              <div className="funktionierts_wrapper_auswahlen2">
                <Image
                  src={Auswahlen}
                  alt="auswahlen"
                  className="auswahlen_img3"
                />
                <div className="auswahlen_line3"></div>
                <div className="funktionierts_wrapper_auswahlen2_heading_paras">
                  <h3 className="funktionierts_wrapper_auswahlen2_heading1">
                    Angebot erhalten
                  </h3>
                  <p className="funktionierts_wrapper_auswahlen2_para1">
                    Unser Labor wertert Ihre Sendung dank modernster
                    Analyse-Verfahren (Spektrometer, elektronische
                    Präzisionswaagen...) innerhalb von nur 48 Stunden nach
                    Eingang in unsere Geschäftsräume aus. Sie erhalten das
                    Ankaufsangebot per eMail übersendet.
                  </p>
                </div>
              </div>
              <div className="funktionierts_wrapper_auswahlen2">
                <Image
                  src={Auswahlen}
                  alt="auswahlen"
                  className="auswahlen_img3"
                />
                <div className="auswahlen_line4"></div>
                <div className="funktionierts_wrapper_auswahlen2_heading_paras">
                  <h3 className="funktionierts_wrapper_auswahlen2_heading1">
                    Zahlung erhalten
                  </h3>
                  <p className="funktionierts_wrapper_auswahlen2_para1">
                    Nach Bestätigung Ihrerseits erfolgt die Auszahlung umgehend
                    und ohne Abzüge per Banküberweisung.
                  </p>
                  <p className="funktionierts_wrapper_auswahlen2_para2">
                    Sollten Sie mit dem Angebot nicht zufrieden sein, greift
                    automatisch unsere 100% Zufriedenheit oder Gold- Zurück-
                    Garantie. Wir senden Ihnen Ihre Wertgegenstände unverzüglich
                    kostenlos zurück.
                  </p>
                  <Button
                    btnText="Jetzt Edelmetalle verkaufen!"
                    borderRadius="10px"
                    width="397px"
                    margin="15px 0px"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-4">
            <div className="d-none d-lg-block">
              <PriceValueForm />
            </div>
            <div className="d-none d-lg-block">
              <EtrusredShop2 />
            </div>
          </div>
        </div>
        <div className="funktionierts_wrapper_form">
          <ValueCalc />
        </div>
        <div className="funktionierts_wrapper_wir_ankaufen">
          <h2 className="funktionierts_wrapper_wir_ankaufen_heading1">
            Hier sehen Sie eine Übersicht der Edelmetalle und Wertsachen, die
            wir ankaufen
          </h2>
          <p className="funktionierts_wrapper_wir_ankaufen_para1">
            moneyGold.de ist ihr zuverlässiger Partner, wenn es um den Verkauf
            von Gold und Altgold geht. Darüber hinaus kaufen wir andere
            Edelmetalle (Silber, Platin, Palladium), Industriemetalle, Schmuck,
            Luxusuhren und Diamanten.
          </p>
          <div className="row">
            <div className="col-6 col-md-4">
              <div className="wir_ankaufun_card">
                <div className="d-flex justify-content-center align-items-center wir_ankaufun_card_img">
                  <Image src={GoldschmuckWir} alt="Goldschmuck" />
                  <div className="text_list_container">
                    <ul>
                      <li>Goldbarren</li>
                      <li>Feingoldbarren</li>
                      <li>Goldbarren</li>
                      <li>Goldbarren</li>
                      <li>Feingoldbarren</li>
                      <li>Goldbarren</li>
                    </ul>
                  </div>
                </div>
                <div className="wir_verkaufer">
                  <div>
                    <p className="wir_verkaufer_name">Goldschmuck</p>
                    <p className="wir_verkaufer_text">verkaufen</p>
                  </div>
                  <div className="wir_verkaufer_btn">
                    <div className="wir_verkaufer_btn_arrow">
                      <BtnArrowMobile />
                      <BtnArrow />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6 col-md-4">
              <div className="wir_ankaufun_card">
                <div className="d-flex justify-content-center align-items-center wir_ankaufun_card_img">
                  <Image src={Silber} alt="Silber" />
                  <div className="text_list_container">
                    <ul>
                      <li>Goldbarren</li>
                      <li>Feingoldbarren</li>
                      <li>Goldbarren</li>
                      <li>Goldbarren</li>
                      <li>Feingoldbarren</li>
                      <li>Goldbarren</li>
                    </ul>
                  </div>
                </div>
                <div className="wir_verkaufer">
                  <div>
                    <p className="wir_verkaufer_name">Silber</p>
                    <p className="wir_verkaufer_text">verkaufen</p>
                  </div>
                  <div className="wir_verkaufer_btn">
                    <div className="wir_verkaufer_btn_arrow">
                      <BtnArrowMobile />
                      <BtnArrow />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6 col-md-4">
              <div className="wir_ankaufun_card">
                <div className="d-flex justify-content-center align-items-center wir_ankaufun_card_img">
                  <Image src={Zahngold} alt="Zahngold" />
                  <div className="text_list_container">
                    <ul>
                      <li>Goldbarren</li>
                      <li>Feingoldbarren</li>
                      <li>Goldbarren</li>
                      <li>Goldbarren</li>
                      <li>Feingoldbarren</li>
                      <li>Goldbarren</li>
                    </ul>
                  </div>
                </div>
                <div className="wir_verkaufer">
                  <div>
                    <p className="wir_verkaufer_name">Zahngold</p>
                    <p className="wir_verkaufer_text">verkaufen</p>
                  </div>
                  <div className="wir_verkaufer_btn">
                    <div className="wir_verkaufer_btn_arrow">
                      <BtnArrowMobile />
                      <BtnArrow />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6 d-md-none d-lg-none">
              <div className="wir_ankaufun_card">
                <div className="d-flex justify-content-center align-items-center wir_ankaufun_card_img">
                  <Image src={LuxuryWir} alt="Luxusuhren" />
                  <div className="text_list_container">
                    <ul>
                      <li>Goldbarren</li>
                      <li>Feingoldbarren</li>
                      <li>Goldbarren</li>
                      <li>Goldbarren</li>
                      <li>Feingoldbarren</li>
                      <li>Goldbarren</li>
                    </ul>
                  </div>
                </div>
                <div className="wir_verkaufer">
                  <div>
                    <p className="wir_verkaufer_name">Luxusuhren</p>
                    <p className="wir_verkaufer_text">verkaufen</p>
                  </div>
                  <div className="wir_verkaufer_btn">
                    <div className="wir_verkaufer_btn_arrow">
                      <BtnArrowMobile />
                      <BtnArrow />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="d-lg-none etrusted2_mobile">
          <EtrusredShop2 />
        </div>
      </div>
    </section>
  );
};

export default page;

"use client";
import Arrow2Svg from "@/components/home/Arrow2Svg";
import BietenSieForm from "@/components/shared/BietenSieForm";
import StepCard from "@/components/shared/StepCard";
import Breadcrumbs from "@/components/shared/breadcrumb/BreadcrumbsComponent";
import {
  DiamantenUberBlickArray,
  review2CardArray,
  review2StarArray,
  stepCardDiamantenArray,
} from "@/public/static/HomepageStatic";
import Image from "next/image";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Asscher from "/public/assets/img/asscher.png";
import Brilliant from "/public/assets/img/brilliant.png";
import Cushion from "/public/assets/img/cushion.png";
import DiamantenImg from "/public/assets/img/diamanten.png";
import DiamondCheck from "/public/assets/img/diamond_check.png";
import DiamondMicroscope from "/public/assets/img/diamond_microscope.png";
import DiamondOnPaper from "/public/assets/img/diamond_paper.png";
import Emerald from "/public/assets/img/emerald.png";
import TrustedShopsLogo from "/public/assets/img/homepage/trusted-shops-logo.png";
import Logo from "/public/assets/img/logo.png";
import TrustedShop from "/public/assets/img/trusted-shops.png";

import "swiper/css";
import "swiper/css/navigation";

const Diamanten = () => {
  return (
    <section className="luxusuhren_wrapper">
      <div className="container">
        <Breadcrumbs />
        <div className="row d-block  d-lg-none ">
          <div className="col-12  ">
            <h2 className="luxusuhren_wrapper_heading1">
              Diamanten Ankauf Sicherer Diamanten-Ankauf
            </h2>
          </div>
          <div className="col-12  ">
            <Image
              src={DiamantenImg}
              alt="Diamanten"
              className="d-block  d-lg-none luxusuhren_wrapper_main_img"
            />
            <div className="luxusuhren_wrapper_paras">
              <p className="luxusuhren_wrapper_para1">
                Als erfahrener und kompetenter Edelmetallhändler bieten wir
                Ihnen einen komfortablen und vor allem sicheren
                Diamanten-Ankauf. Die Experten von MoneyGold stehen Ihnen
                jederzeit gerne zur Verfügung, wenn Sie Ihre Diamanten zu einem
                attraktiven Preis verkaufen möchten.
              </p>
              <p className="luxusuhren_wrapper_para3">
                Wenn Sie Rohdiamanten, geschliffene Steine und gefasste
                Diamanten zu Geld machen möchten, können Sie auf uns zählen. Und
                da wir auch Altgold, Zahngold, Palladium, Platin und andere
                Edelmetalle ankaufen, können Sie auf diese Weise Ihre gesamten
                ungeliebten Schmuckstücke bei uns einreichen und von unserem
                Ankauf profitieren.
              </p>
            </div>
          </div>
        </div>
        <div className="row d-none d-lg-flex mt-4">
          <div className="col-md-8 col-lg-9">
            <h2 className="luxusuhren_wrapper_heading1">
              Diamanten Ankauf Sicherer Diamanten-Ankauf
            </h2>
            <div className="luxusuhren_wrapper_paras">
              <p className="luxusuhren_wrapper_para1">
                Als erfahrener und kompetenter Edelmetallhändler bieten wir
                Ihnen einen komfortablen und vor allem sicheren
                Diamanten-Ankauf. Die Experten von MoneyGold stehen Ihnen
                jederzeit gerne zur Verfügung, wenn Sie Ihre Diamanten zu einem
                attraktiven Preis verkaufen möchten.
              </p>
              <p className="luxusuhren_wrapper_para2">
                Wenn Sie Rohdiamanten, geschliffene Steine und gefasste
                Diamanten zu Geld machen möchten, können Sie auf uns zählen. Und
                da wir auch Altgold, Zahngold, Palladium, Platin und andere
                Edelmetalle ankaufen, können Sie auf diese Weise Ihre gesamten
                ungeliebten Schmuckstücke bei uns einreichen und von unserem
                Ankauf profitieren.
              </p>
            </div>
          </div>
          <div className="col-md-4 col-lg-3">
            <Image
              src={DiamantenImg}
              alt="Diamanten"
              width={263}
              className="luxusuhren_wrapper_img1"
            />
          </div>
        </div>
        <div className="stepcard_wrapper_main">
          {stepCardDiamantenArray?.map((item, index) => {
            return (
              <div className=" stepcard_wrapper" key={index}>
                <StepCard
                  src={item.src}
                  heading={item.heading}
                  para={item.para}
                  marginTop="20px"
                />

                <div className="luxushrn_right_trianle"></div>
                <div className="luxushrn_down_trianle"></div>
              </div>
            );
          })}
        </div>
        <BietenSieForm
          heading="Bieten Sie uns lhre Diamanten an!"
          diamanten
          textareaHeading={"Anmerkung"}
          termsLabel="Ich akzeptiere die AGB. Die Datenschutzerklärung habe ich gelesen und zur Kenntnis genommen. Ich stimme zu, dass meine Daten zur Beantwortung meiner Anfrage elektronisch gespeichert werden."
          className="bieten_sie_form_checkbox_diamanten"
        />
        <div className="diamanten_middle_section">
          <h2 className="diamanten_expert_heading">
            moneyGold übernimmt Ihre Diamanten
          </h2>
          <p className="diamanten_middle_section_para1">
            Wir sind seit vielen Jahren auf diesem Gebiet tätig und bieten Ihnen
            neben einem professionellen Diamanten-Ankauf auch in puncto Gold-
            und Silberankauf sowie Uhren-Ankauf einen umfassenden
            Rundum-Service. Gleichgültig, welchen Schmuck Sie an uns abtreten
            wollen, wir möchten, dass Sie sich bei uns wohlfühlen und einen
            Preis für Ihre Edelmetalle erzielen, der Ihren Erwartungen
            entspricht oder diese gar übertrifft.
          </p>
          <div className="row">
            <div className="col-4 col-lg-4">
              <div className="diamanten_expert_images">
                <Image src={DiamondCheck} alt="diamond class" />
              </div>
            </div>
            <div className="col-4 col-lg-4">
              <div className="diamanten_expert_images">
                <Image src={DiamondOnPaper} alt="diamond class" />
              </div>
            </div>
            <div className="col-4 col-lg-4">
              <div className="diamanten_expert_images">
                <Image src={DiamondMicroscope} />
              </div>
            </div>
          </div>
          <h2 className="diamanten_expert_heading">
            Experten prüfen Ihre Schmuckstücke beim Diamanten-Ankauf
          </h2>
          <p className="diamanten_expert_para">
            Probieren Sie unseren Diamanten-Ankauf doch einfach aus. Sobald Ihre
            Edelmetalle, Diamanten und Brillanten bei uns eingetroffen sind,
            werden sie von qualifizierten Gutachtern eingehend untersucht. Nach
            der umfangreichen Prüfung lassen wir Ihnen dann ein individuelles
            Angebot für Ihren Schmuck zukommen. Wenn Sie mit der Offerte
            einverstanden sind, erhalten Sie den Erlös innerhalb weniger
            Werktage auf das von Ihnen angegebene Konto eingezahlt.
          </p>
          <h2 className="diamanten_expert_heading1">Schliff</h2>
          <p className="diamanten_expert_para">
            Ein Diamant mit rundem Schliff ist ein Brillant und mit einem
            Grad-Schliff ein Smaragd. Die wesentlichen Formen des
            Diamantschliffs sind Brillant, Smaragd, Princess, Marquise und Co.,
            doch es gibt auch diverse weitere Schliffarten. Wenn Sie sich für
            die einzelnen Formen interessieren, können Sie sich gerne jederzeit
            an uns wenden.
          </p>
          <h2 className="diamanten_expert_heading1">Zertifikat</h2>
          <p className="diamanten_expert_para">
            Sollten Ihnen Zertifikate zu Ihren Diamanten vorliegen, können Sie
            diese gerne ebenfalls bei uns einreichen. Ein solches Zertifikat
            beziehungsweise Diamantgutachten wird von einem anerkannten,
            unabhängigen Institut erstellt. Qualifizierte Gemmologen von
            unabhängigen Instituten wie GIA, HRD, AGS und IGI nehmen mithilfe
            von Absorptions-Spektroskopen, Mikroskopen und Lupen eine
            vollständige Bewertung anhand der Kriterien Karat, Form, Reinheit,
            Farbe und Schliff vor.
          </p>
          <h2 className="diamanten_expert_heading1">Karat</h2>
          <p className="diamanten_expert_para">
            Der Begriff Karat stellt das Gewicht eines Diamanten dar. Wie viel
            ein Diamant letztlich wert ist, hängt eng damit zusammen, wie schwer
            er ist. Bei der Wertermittlung spielen zwar mehrere Parameter eine
            Rolle, das Karat-Gewicht aber ist einer der entscheidenden Faktoren.
            <span className="">
              {">"} mehr über Karat – das Diamant-Gewicht
            </span>
          </p>
          <h2 className="diamanten_expert_heading1">Form</h2>
          <p className="diamanten_expert_para">
            Diamanten sind in unterschiedlicher Form erhältlich. Die
            bekanntesten Formen sind zweifelsohne die runden Diamanten: die
            Brillanten. Ein Brillant erzielt zudem den höchsten Preis pro Karat.
            Weitere bekannte und weniger bekannte Formen für Diamanten sind
            unter anderem Smaragde, Asscher, Princess, Tropfen und Oval
            Diamanten.
          </p>
        </div>
      </div>
      <section className="diamanten_uberblick">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-md-12 col-lg-4">
              <Image src={Logo} alt="logo" />
            </div>
            <div className="col-12 col-md-12 col-lg-4">
              <h2 className="diamanten_uberblick_heading">
                Ihre Vorteile im Überblick
              </h2>
              <ul>
                {DiamantenUberBlickArray.map((item, index) => {
                  return (
                    <li key={index}>
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
          </div>
        </div>
      </section>
      <section className="diamanten_type">
        <div className="container">
          <div className="row">
            <div className="col-6 col-md-6 col-lg-3">
              <div className="diamanten_type_asscher">
                <Image src={Asscher} alt="Asscher" />
                <p>Asscher</p>
              </div>
            </div>
            <div className="col-6 col-md-6 col-lg-3">
              <div className="diamanten_type_asscher">
                <Image src={Brilliant} alt="Brilliant" />
                <p>Brilliant (rund)</p>
              </div>
            </div>
            <div className="col-6 col-md-6 col-lg-3">
              <div className="diamanten_type_asscher">
                <Image src={Cushion} alt="Cushion" />
                <p>Cushion</p>
              </div>
            </div>
            <div className="col-6 col-md-6 col-lg-3">
              <div className="diamanten_type_asscher">
                <Image src={Emerald} alt="Emerald" />
                <p>Emerald (Smaragt)</p>
              </div>
            </div>
          </div>
          <div className="ablauf_info">
            <div className="row">
              <div className="col-12 col-md-12 col-lg-4">
                <h2>Reinheit</h2>
                <p>
                  Die Reinheit eines Diamanten ist ein weiterer Indikator dafür,
                  um den Wert eines Steins zu bestimmen. Hier gibt es die
                  Unterteilungen
                </p>
                <ul className="ablauf_info_list">
                  <li>» FL (perfekt lupenrein),</li>
                  <li>» IF (lupenrein),</li>
                  <li>» VVS1 und VVS2 (sehr sehr kleine Einschlüsse),</li>
                  <li>» VS1 und VS2 (sehr kleine Einschlüsse),</li>
                  <li>» SI1 und SI2 (kleine Einschlüsse).</li>
                </ul>
              </div>
              <div className="col-12 col-md-6 col-lg-4">
                <h2>Farbe</h2>
                <p>
                  Um einen Diamanten professionell bewerten zu können, spielt
                  auch die Farbe eine wichtige Rolle. Wenn ein Diamant auf einem
                  weißen Blatt Papier verschwindet, wird er in der Farbskala
                  unter dem Buchstaben D geführt. “D“ ist das Zeichen für
                  hochfeines Weiß plus – der beste Grad für einen Diamanten. E
                  steht dann für hochfeines Weiß, F für feines Weiß plus … und
                  so weiter. Die Farben M bis Z haben die stärkste Tönung, wobei
                  Z die schlechteste Färbung (Gelb) innehat.
                </p>
              </div>
              <div className="col-12 col-md-6 col-lg-4">
                <h2>Ablauf-Informationen</h2>
                <p>
                  Haben Sie noch Fragen zu unserem Diamanten-Ankauf? Gerne
                  können Sie unseren Live-Chat auf der Website aktivieren oder
                  uns einfach unter der Telefonnummer 040 / 76 11 85 01 anrufen.
                  Wir sind für Sie da und erklären Ihnen den Verkaufsablauf,
                  falls wir Ihre Diamanten ankaufen sollen!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="customer_review_section2_wrapper">
        <div className="container">
          <h2>100% echte und vertrauenswürdige Kundenbewertungen</h2>
          <div className="row ">
            <div className="col-12 col-md-5 customer_review2_column1">
              <div className="d-flex align-items-center customer_review2_text">
                <div>
                  <Arrow2Svg />
                </div>
                <p>4.000 Trusted Shops Bewertungen </p>
              </div>
              <div className="d-flex align-items-center customer_review2_text">
                <div>
                  <Arrow2Svg />
                </div>
                <p>Hohe Ankaufspreise</p>
              </div>
              <div className="d-flex align-items-center customer_review2_text">
                <div>
                  <Arrow2Svg />
                </div>
                <p>Sichere und seriöse Abwicklung</p>
              </div>
              <div className="d-flex align-items-center customer_review2_text">
                <div>
                  <Arrow2Svg />
                </div>
                <p>Keine Versandkosten</p>
              </div>
            </div>
            <div className="col-12 col-md-7 customer_review2_column2">
              <div className="d-flex align-items-center customer_review2_trusted_shops">
                <Image
                  src={TrustedShop}
                  alt=""
                  width={153}
                  height={153}
                  className="trusted_img"
                />
                <div className="ekomi_trusted_shops">
                  <ul>
                    <li> • Echte Kundenbewertungen </li>
                    <li> • Unabhangig & transparent</li>
                  </ul>
                  <div className="review2_trusted_shops">
                    <Image
                      src={TrustedShopsLogo}
                      alt=""
                      width={139}
                      height={37}
                      className="trusted_img_logo"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row review2_slider2_row">
            <div className="col-6 col-md-6 col-lg-9 review2_slider_col">
              <div className="review_slider2_column">
                <div className="review2_heading2">
                  <div className="review2_heading2_line" />
                  <p>KUNDENBEWERTUNGEN</p>
                  <div className="review2_heading2_line" />
                </div>

                <Swiper
                  className="review2_slider2_slides"
                  modules={[Navigation]}
                  slidesPerView={3}
                  breakpoints={{
                    320: {
                      slidesPerView: 1,
                      spaceBetween: 10,
                    },
                    480: {
                      slidesPerView: 1,
                      spaceBetween: 10,
                    },
                    768: {
                      slidesPerView: 2,
                      spaceBetween: 30,
                    },
                    993: {
                      slidesPerView: 3,
                      spaceBetween: 30,
                    },
                  }}
                  navigation
                  onSlideChange={() => console.log("slide change")}
                  onSwiper={(swiper) => console.log(swiper)}
                >
                  {review2CardArray.map((item, index) => {
                    return (
                      <SwiperSlide>
                        <div className="review2_slider2_card" key={index}>
                          <div className="d-flex justify-content-between align-items-center">
                            <p className="reviewStar2">{item.reviewStar}</p>{" "}
                            <p className="reviewDate2">{item.reviewDate}</p>
                            <div className="review2_triangle_down"></div>
                          </div>
                          <div className="review2_para d-flex justify-content-center align-items-center">
                            <p className="">
                              Abwicklung und Zahlung hat alles prima geklappt!
                              Man kann sich auf Euch verlassen. Gerne weiter so!
                            </p>
                          </div>
                        </div>
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              </div>
            </div>
            <div className="col-6 col-md-6 col-lg-3 review2_card_column">
              <div className="review2_card">
                <div className="d-flex align-items-center Bewertung2">
                  <h2>5.00</h2>
                  <p>Durchschnittliche Bewertung</p>
                </div>
                <div className="review2">
                  <i className="fa fa-star" style={{ fontSize: "30px" }}></i>
                  <i className="fa fa-star" style={{ fontSize: "30px" }}></i>
                  <i className="fa fa-star" style={{ fontSize: "30px" }}></i>
                  <i className="fa fa-star" style={{ fontSize: "30px" }}></i>
                  <i className="fa fa-star" style={{ fontSize: "30px" }}></i>
                </div>
                {review2StarArray.map((item, index) => {
                  return (
                    <div
                      className="d-flex align-items-center justify-content-between"
                      key={index}
                    >
                      <div className="positive">
                        {item.starNum}{" "}
                        <i
                          className="fa fa-star"
                          style={{ fontSize: "9px" }}
                        ></i>
                      </div>
                      <div className="percentage2-bar">
                        <div
                          className="review2_fill"
                          style={{ width: item.percentage }}
                        ></div>
                      </div>

                      <div className="review2_percentage">
                        {item.starNum == 3 || item.starNum == 2
                          ? `< ${item.percentage}`
                          : item.percentage}
                      </div>
                    </div>
                  );
                })}

                <div>
                  <p className="text-center review2_gut">SEHR GUT</p>
                  <p className="text-center review2_uber">
                    Basierend aus uber 4.000 Bewertungen
                  </p>
                  <p className="text-center review2_date">Stand 01.06.2023</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Diamanten;

"use client";
import CustomerReview2 from "@/components/home/CustomerReview2";
import BietenSieForm from "@/components/shared/BietenSieForm";
import StepCard from "@/components/shared/StepCard";
import Breadcrumbs from "@/components/shared/breadcrumb/BreadcrumbsComponent";
import { stepCardArray } from "@/public/static/HomepageStatic";
import Image from "next/image";
import Rolex from "/public/assets/img/Luxury_watch1.png";
import Breitling from "/public/assets/img/Luxury_watch2.png";
import IWC from "/public/assets/img/Luxury_watch3.png";
import LuxusuhrenImg from "/public/assets/img/luxusuhren_mg.png";

const Luxusuhren = () => {
  return (
    <section className="luxusuhren_wrapper">
      <div className="container">
        <Breadcrumbs />
        <div className="row d-block d-md-none d-lg-none ">
          <div className="col-12  ">
            <h2 className="luxusuhren_wrapper_heading1">
              Faire Preise beim Uhren-Ankauf
            </h2>
          </div>
          <div className="col-12  ">
            <Image
              src={LuxusuhrenImg}
              alt="Luxushren watch"
              className="d-block d-md-none d-lg-none"
            />
            <div className="luxusuhren_wrapper_paras">
              <p className="luxusuhren_wrapper_para1">
                Beim Thema Uhren-Ankauf können Sie auf uns zählen! Wenn Sie Ihre
                Luxusuhr ab einem Marktwert von 1.000 Euro verkaufen möchten,
              </p>
              <p className="luxusuhren_wrapper_para2">
                sollten wir ins Gespräch kommen.
              </p>
              <p className="luxusuhren_wrapper_para3">
                Das Prozedere beim Ankauf von edlen Zeitmessern ist bei
                moneyGold ganz einfach: Nehmen Sie gerne unseren kostenlosen
                Sicherheitskurier-Abholservice in Anspruch und lassen Sie den
                Wert Ihrer Luxusuhr von unseren Experten bestimmen.
              </p>
              <p className="luxusuhren_wrapper_para4">
                Alternativ ist auch eine schnelle und unkomplizierte
                <span>Online-Wertermittlung</span> Ihrer Markenuhr möglich.
                Hierzu müssten Sie nur noch den Uhrenrechner auf unserer Website
                betätigen.
              </p>
            </div>
          </div>
        </div>
        <div className="row d-none d-md-flex d-lg-flex mt-4">
          <div className="col-md-8 col-lg-9">
            <h2 className="luxusuhren_wrapper_heading1">
              Faire Preise beim Uhren-Ankauf
            </h2>
            <div className="luxusuhren_wrapper_paras">
              <p className="luxusuhren_wrapper_para1">
                Beim Thema Uhren-Ankauf können Sie auf uns zählen! Wenn Sie Ihre
                Luxusuhr ab einem Marktwert von 1.000 Euro verkaufen möchten,
              </p>
              <p className="luxusuhren_wrapper_para2">
                sollten wir ins Gespräch kommen.
              </p>
              <p className="luxusuhren_wrapper_para3">
                Das Prozedere beim Ankauf von edlen Zeitmessern ist bei
                moneyGold ganz einfach: Nehmen Sie gerne unseren kostenlosen
                Sicherheitskurier-Abholservice in Anspruch und lassen Sie den
                Wert Ihrer Luxusuhr von unseren Experten bestimmen.
              </p>
              <p className="luxusuhren_wrapper_para4">
                Alternativ ist auch eine schnelle und unkomplizierte{" "}
                <span>Online-Wertermittlung</span> Ihrer Markenuhr möglich.
                Hierzu müssten Sie nur noch den Uhrenrechner auf unserer Website
                betätigen.
              </p>
            </div>
          </div>
          <div className="col-md-4 col-lg-3">
            <Image
              src={LuxusuhrenImg}
              alt="Luxushren watch"
              width={263}
              className="luxusuhren_wrapper_img1"
            />
          </div>
        </div>
        <div className="stepcard_wrapper_main">
          {stepCardArray?.map((item, index) => {
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
          heading="Bieten Sie uns lhre Uhr an!"
          luxusehren
          textareaHeading="lhre Nachricht an uns"
          termsLabel="Ich habe die Datenschutzbestimmungen zur Kenntnis genommen."
          className="bieten_sie_form_checkbox_luxusuhren"
        />
        <section className="rolex_section">
          <h2 className="rolex_section_heading1">
            Rolex Uhr verkaufen - Luxusuhren beim Experten zu Geld machen
          </h2>
          <div className="row">
            <div className="col-12 col-md-6 col-lg-8">
              <p className="rolex_section_para1">
                Luxusuhren sind nicht nur herausragende Zeitmesser, sie sind
                auch Ausdruck eines besonderen Lebensgefühls und gleichzeitig
                Statussymbol mit hohem Wiederverkaufswert. Bei unserem
                Uhren-Ankauf erzielen klassische und wertbeständige Luxusuhren
                die aktuell besten Marktpreise. Wenn Sie also unter anderem Ihre
                getragene und gut erhaltene Rolex-Uhr verkaufen möchten, sollten
                Sie keine Zeit verlieren und uns Ihre Edeluhr zukommen lassen.
                Sollten Sie von unserem Angebot nicht überzeugt sein, senden wir
                Ihre Wertgegenstände natürlich kostenfrei zurück.
              </p>
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <ul className="ablauf_info_list luxusehrun_watch_name">
                <li>» Rolex</li>
                <li>» Breitling</li>
                <li>» IWC</li>
                <li>» Rolex</li>
                <li>» Breitling</li>
                <li>» IWC</li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-4">
              <div className="luxury_watch_img">
                <Image src={Rolex} alt="luxury watch" />
              </div>
            </div>
            <div className="col-4">
              <div className="luxury_watch_img">
                <Image src={Breitling} alt="luxury watch" />
              </div>
            </div>
            <div className="col-4">
              <div className="luxury_watch_img">
                <Image src={IWC} alt="luxury watch" />
              </div>
            </div>
          </div>
          <div className="rolex_section_heading_paras">
            <h2 className="rolex_section_heading2">
              Profitieren Sie vom Uhren-Ankauf bei moneyGold.de
            </h2>
            <p className="rolex_section_para2">
              Selbstverständlich interessieren wir uns auch für fantastische
              Modelle der Marken Omega, Cartier, Chopard, Piaget, A.
              Lange&Söhne, Breguet, Glashütte Original, Chronoswiss, Tag Heuer,
              Sinn, Panerei, Tudor und Corum. Oder möchten Sie uns eine edle Uhr
              aus dem Premium-Segment anbieten, die wir derzeit nicht aufgeführt
              haben? Kein Problem! Unsere Experten prüfen umgehend, ob ein
              Uhren-Ankauf in Ihrem Fall infrage kommt.
            </p>
            <h2 className="rolex_section_heading3">
              Uhren-Ankauf – faire und marktgerechte Preise
            </h2>
            <p className="rolex_section_para3">
              Jede Luxusuhr ist einzigartig und bedarf daher einer eingehenden
              und detaillierten Bewertung. Der Uhren-Ankauf wird letztlich wie
              der Goldankauf beziehungsweise Silberankauf abgewickelt.
            </p>
            <p className="rolex_section_para4">
              Jeder Vorgang ist transparent und kann vom designierten Verkäufer
              leicht nachvollzogen werden. Bei den Luxusuhren nur mit dem
              Unterschied, dass zur Wertermittlung das Kaufjahr und der aktuelle
              Zustand herangezogen wird.
            </p>
            <p className="rolex_section_para5">
              Um den tatsächlichen Wert einer luxuriösen Markenuhr bestimmen zu
              können, müssen unsere Spezialisten außerdem wissen, wann die
              letzte Revision war und ob bei einer Reparatur ausschließlich
              Original-Ersatzteile vom Hersteller verwendet wurden. Hilfreich
              ist zudem die Bereitstellung von Kaufbelegen und authentischen
              Zertifikaten.
            </p>
            <h2 className="rolex_section_heading4">Ablauf-Information</h2>
            <p className="rolex_section_para6">
              Dank unseres internationalen Händlernetzwerks können wir mit sehr
              hoher Wahrscheinlichkeit auch für Ihre Uhr den besten Preis beim
              Uhren-Ankauf erzielen.
            </p>
            <p className="rolex_section_para7">
              Haben Sie noch Fragen zum Ablauf? Unter der Telefonnummer 040 / 76
              11 85 01 sind wir von Montag bis Freitag in der Zeit von 10 bis 18
              Uhr für Sie da und beraten Sie ausführlich.
            </p>
          </div>
        </section>
      </div>

      <CustomerReview2 />
    </section>
  );
};

export default Luxusuhren;

"use client";
import BietenSieForm from "@/components/shared/BietenSieForm";
import StepCard from "@/components/shared/StepCard";
import { stepCardArray } from "@/public/static/HomepageStatic";
import Image from "next/image";
import LuxusuhrenImg from "/public/assets/img/luxusuhren_mg.png";

const Luxusuhren = () => {
  return (
    <section className="luxusuhren_wrapper">
      <div className="container">
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
        <div className="row">
          {stepCardArray.map((item, index) => {
            return (
              <div className="col-6 col-md-6 col-lg-3" key={index}>
                <StepCard
                  src={item.src}
                  heading={item.heading}
                  para={item.para}
                  marginTop="20px"
                  marginBottom="32px"
                />
              </div>
            );
          })}
        </div>
        <BietenSieForm heading="Bieten Sie uns lhre Uhr an!" />
      </div>
    </section>
  );
};

export default Luxusuhren;

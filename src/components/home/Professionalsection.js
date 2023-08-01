import Image from "next/image";
import FacebookPost from "/public/assets/img/homepage/professional_facebook_post.png";

const Professionalsection = () => {
  return (
    <section className="professional_section_wrapper">
      <div className="container">
        <h2>Professioneller Platin-, Silber- und Goldankauf</h2>
        <div className="d-flex professional_section">
          <div className="professional_section_img">
            <Image src={FacebookPost} alt="" />
          </div>
          <div className="">
            <p>
              Der Goldankauf wird bei uns sicher und schnell abgewickelt. Sie
              haben jederzeit Zugriff auf unsere Gold, Silber, Platin,
              Palladium- und Zahngold Ankaufspreise. Die genannten Ankaufspreise
              finden Sie in unseren Goldrechner und diese werden zu
              Börsenpreisen alle 5 Minuten aktualisiert. Vertrauen Sie beim
              Goldankauf auf moneyGold.de.
            </p>
            <p>
              Kontaktieren Sie uns, wenn Sie weitere Fragen zum Ankauf oder
              allgemein zur Abwicklung haben. Der Platin-, Silber- und
              Goldankauf wird online schnell, diskret und professionell
              abgewickelt. Rufen Sie die Servicenummer 040 / 76 11 85 01 an und
              lassen Sie sich von ausgewiesenen Experten umfassend beraten. Wir
              sind Montags bis Freitags von 10 bis 18 Uhr für Sie da. Sollten
              Sie auch hier die Online-Variante bevorzugen, steht Ihnen auf
              unserer Website der praktische Live-Chat zur Verfügung.
            </p>
            <p>* Stand 01.04.2022</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Professionalsection;

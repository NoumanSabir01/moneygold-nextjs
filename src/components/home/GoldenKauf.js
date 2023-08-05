import Image from "next/image";
import PriceValueForm from "../shared/PriceValueForm";
import GoldenKauf1 from "/public/assets/img/homepage/gold-kauf-circle1.png";
import GoldenKaufMobile from "/public/assets/img/homepage/gold-kauf-circle2-mobile.png";
import GoldenKauf2 from "/public/assets/img/homepage/gold-kauf-circle2.png";
import GoldenKauf3 from "/public/assets/img/homepage/gold-kauf-circle3.png";
import GoldenKauf4 from "/public/assets/img/homepage/gold-kauf-circle4.png";

const GoldenKauf = () => {
  return (
    <div className="golden-fauf-wrapper">
      <div className="container">
        <div class="golden_fauf_wrapper_pricing">
          <PriceValueForm />
        </div>
        <div className="golden-fauf">
          <h2 className="text-center">
            Goldankauf in <span className="color-gold"> nur 4 Schritten</span>
          </h2>
          <p className="para text-center">
            Detaillierte Informationen finden Sie{" "}
            <span className="color-gold">hier</span>
          </p>
        </div>
        <div className=" row">
          <div className="col-6 col-lg-3">
            <div className="golden-kauf-img">
              <Image src={GoldenKauf1} alt="" />
              <p className="color-gold">
                Versandtasche <br />
                Bestellen
              </p>
            </div>
          </div>
          <div className="d-none d-lg-block col-lg-3">
            <div className="golden-kauf-img">
              <Image src={GoldenKauf2} alt="" />
              <p className="color-gold">
                Gold <br />
                versenden
              </p>
            </div>
          </div>
          <div className="d-block col-6 d-lg-none">
            <div className="golden-kauf-img">
              <Image src={GoldenKaufMobile} alt="" />
              <p className="color-gold">
                Gold <br />
                versenden
              </p>
            </div>
          </div>
          <div className="col-6 col-lg-3">
            <div className="golden-kauf-img">
              <Image src={GoldenKauf3} alt="" />
              <p className="color-gold">
                Angebot <br /> erhalten
              </p>
            </div>
          </div>
          <div className="col-6 col-lg-3">
            <div className="golden-kauf-img">
              <Image src={GoldenKauf4} alt="" />
              <p className="color-gold">
                Zahlung <br />
                erhalten
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoldenKauf;

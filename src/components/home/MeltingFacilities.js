import Image from "next/image";
import GoldSchmelzen1 from "/public/assets/img/homepage/gold_schmelzen1.png";
import GoldSchmelzen2 from "/public/assets/img/homepage/gold_schmelzen2.png";
import GoldSchmelzen3 from "/public/assets/img/homepage/gold_schmelzen3.png";
import GoldSchmelzen4 from "/public/assets/img/homepage/gold_schmelzen4.png";

const MeltingFacilities = () => {
  return (
    <section className="melting-facilities-wrapper">
      <div className="container">
        <div className="text-center">
          <h2>Wir verfügen über modernste Labor- und Schmelzanlagen</h2>
          <div className="row">
            <div className="col-6 col-md-6 col-lg-3">
              <div className="melting-facilities-img">
                <Image src={GoldSchmelzen1} alt="" />
              </div>
            </div>
            <div className="col-6 col-md-6 col-lg-3">
              <div className="melting-facilities-img">
                <Image src={GoldSchmelzen2} alt="" />
              </div>
            </div>
            <div className="col-6 col-md-6 col-lg-3">
              <div className="melting-facilities-img">
                <Image src={GoldSchmelzen3} alt="" />
              </div>
            </div>
            <div className="col-6 col-md-6 col-lg-3">
              <div className="melting-facilities-img">
                <Image src={GoldSchmelzen4} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeltingFacilities;

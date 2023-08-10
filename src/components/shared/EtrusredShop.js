import Image from "next/image";
import PowerByTrustedShops from "/public/assets/img/homepage/powered_by_trusted_logo.png";
import TrustedShops from "/public/assets/img/trusted-shops.png";

const EtrusredShop = ({ marginTop = "20px" }) => {
  return (
    <div className="e_trusted_shops_card mb-3" style={{ marginTop: marginTop }}>
      <div className="d-flex align-items-center">
        <Image
          src={TrustedShops}
          alt=""
          width={82}
          height={82}
          className="e_trusted_shops_card_img"
        />
        <div className="e_trusted_shops_card_list">
          <ul>
            <li>• Echte Kundenbewertungen</li>
            <li>• Unabhangig & transparent</li>
          </ul>
        </div>
      </div>
      <div className="e_trusted_shops_card_subcard">
        <div className="e_trusted_shops_card_subcard_innercard">
          <div className="d-flex justify-content-between align-items-center">
            <p className="e_trusted_shops_card_subcard_innercard_star">
              {
                <>
                  <i className="fa fa-star" style={{ fontSize: "11px" }}></i>
                  <i className="fa fa-star" style={{ fontSize: "11px" }}></i>
                  <i className="fa fa-star" style={{ fontSize: "11px" }}></i>
                  <i className="fa fa-star" style={{ fontSize: "11px" }}></i>
                  <i className="fa fa-star" style={{ fontSize: "11px" }}></i>
                </>
              }
            </p>
            <div className="d-flex align-items-center">
              <p className="e_trusted_shops_card_subcard_innercard_para">
                19.04.2023
              </p>

              <i className="fa fa-caret-down" style={{ fontSize: "13px" }}></i>
            </div>
          </div>
          <div className="review2_para d-flex justify-content-center align-items-center">
            <p className="e_trusted_shops_card_subcard_innercard_para2">
              Abwicklung und Zahlung hat alles prima geklappt! Man kann sich auf
              Euch verlassen. Gerne weiter so!
            </p>
          </div>
        </div>
        <div className="d-flex align-items-center justify-content-center text-center">
          <p className="e_trusted_shop_value">5.00</p>
          <p className="e_trusted_shop_text">Durchschnittliche Bewertung</p>
        </div>
        <div className="d-flex justify-content-center align-items-center">
          <p className="e_trusted_shops_card_subcard_innercard_star2">
            {
              <>
                <i className="fa fa-star" style={{ fontSize: "15px" }}></i>
                <i className="fa fa-star" style={{ fontSize: "15px" }}></i>
                <i className="fa fa-star" style={{ fontSize: "15px" }}></i>
                <i className="fa fa-star" style={{ fontSize: "15px" }}></i>
                <i className="fa fa-star" style={{ fontSize: "15px" }}></i>
              </>
            }
          </p>
        </div>
        <div>
          <p className="text-center e_trusted_shop_uber">
            Basierend aus uber 8.000 Bewertungen
          </p>
          <p className="text-center e_trusted_shop_date">Stand 01.06.2023</p>
        </div>
      </div>
      <div className="d-flex justify-content-center mt-3">
        <Image src={PowerByTrustedShops} alt="" width={115} height={48} />
      </div>
    </div>
  );
};

export default EtrusredShop;

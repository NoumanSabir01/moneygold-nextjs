"use client";
import { review2StarArray } from "@/public/static/HomepageStatic";
import Image from "next/image";
import Arrow3Svg from "../home/Arrow3svg";
import PowerByTrustedShops from "/public/assets/img/homepage/powered_by_trusted_logo.png";
import TrustedShops from "/public/assets/img/trusted-shops.png";

const EtrusredShop2 = ({ marginTop = "20px" }) => {
  return (
    <div
      className="e_trusted_shops_card e_trusted_shops_card2 mb-3"
      style={{ marginTop: marginTop }}
    >
      <div>
        <h4 className="e_trusted_shops_card_heading1">
          100% echte und vertrauenswürdige Kundenbewertungen
        </h4>
        <div className="etrustedshop2_paras">
          <div className="d-flex align-items-center etrustedshop2_text">
            <div>
              <Arrow3Svg />
            </div>
            <p>4.000 Trusted Shops Bewertungen </p>
          </div>
          <div className="d-flex align-items-center etrustedshop2_text">
            <div>
              <Arrow3Svg />
            </div>
            <p>Hohe Ankaufspreise</p>
          </div>
          <div className="d-flex align-items-center etrustedshop2_text">
            <div>
              <Arrow3Svg />
            </div>
            <p>Sichere und seriöse Abwicklung</p>
          </div>
          <div className="d-flex align-items-center etrustedshop2_text">
            <div>
              <Arrow3Svg />
            </div>
            <p>Keine Versandkosten</p>
          </div>
        </div>
      </div>

      <div className="d-flex align-items-center etrustedlogo2">
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
      <div className="e_trusted_shops_card_subcard e_trusted_shops2_card_subcard">
        <div className="d-flex align-items-center  e_trusted_shops2_main_heading">
          <p className="e_trusted_shop_value">5.00</p>
          <p className="e_trusted_shop_text">Durchschnittliche Bewertung</p>
        </div>
        <div className="d-flex align-items-center">
          <p className="e_trusted_shops_card_subcard_innercard_star2">
            {
              <>
                <i className="fa fa-star" style={{ fontSize: "19px" }}></i>
                <i className="fa fa-star" style={{ fontSize: "19px" }}></i>
                <i className="fa fa-star" style={{ fontSize: "19px" }}></i>
                <i className="fa fa-star" style={{ fontSize: "19px" }}></i>
                <i className="fa fa-star" style={{ fontSize: "19px" }}></i>
              </>
            }
          </p>
        </div>
        <div className="row">
          <div className="col-7 col-7 col-lg-7">
            <div className="etrusted_shop2_percentages">
              {review2StarArray.map((item, index) => {
                return (
                  <div className="d-flex align-items-center" key={index}>
                    <div className="positive">
                      {item.starNum}{" "}
                      <i
                        className="fa fa-star"
                        style={{ fontSize: "14px" }}
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
            </div>
          </div>
          <div className="col-5 col-5 col-lg-5">
            <h4 className="etrusted_shop2_right_heading">SEHR GUT</h4>
            <p className="text-center e_trusted_shop_uber">
              Basierend aus uber 4.000 Bewertungen
            </p>
            <p className="text-center e_trusted_shop_date">Stand 01.06.2023</p>
          </div>
        </div>
        <div className="etrusted_shop2_heading2">
          <div className="etrusted_heading2_line" />
          <p>KUNDENBEWERTUNGEN</p>
          <div className="etrusted_heading2_line" />
        </div>
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
      </div>
      <div className="d-flex justify-content-center mt-3">
        <Image src={PowerByTrustedShops} alt="" width={115} height={48} />
      </div>
    </div>
  );
};

export default EtrusredShop2;

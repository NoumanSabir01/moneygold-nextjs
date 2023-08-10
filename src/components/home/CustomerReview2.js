import {
  review2CardArray,
  review2StarArray,
} from "@/public/static/HomepageStatic";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Arrow2Svg from "./Arrow2Svg";
import TrustedShopsLogo from "/public/assets/img/homepage/trusted-shops-logo.png";
import TrustedShop from "/public/assets/img/trusted-shops.png";

const CustomerReview2 = () => {
  return (
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
                            Abwicklung und Zahlung hat alles prima geklappt! Man
                            kann sich auf Euch verlassen. Gerne weiter so!
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
                      <i className="fa fa-star" style={{ fontSize: "9px" }}></i>
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
  );
};

export default CustomerReview2;

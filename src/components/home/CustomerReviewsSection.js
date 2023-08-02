import { reviewCardArray } from "@/public/static/HomepageStatic";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ArrowSvg from "./ArrowSvg";
import EkomiVector from "/public/assets/img/ekomi-vektor.png";
import PowerBy from "/public/assets/img/homepage/ekomi_feedback_logo.png";
import Negative from "/public/assets/img/homepage/review_negative_icon.png";
import Neutral from "/public/assets/img/homepage/review_neutral_icon.png";
import Positive from "/public/assets/img/homepage/review_positive_icon.png";

const CustomerReviewsSection = () => {
  return (
    <section className="customer_review_section_wrapper">
      <div className="container">
        <h2>100% Sicherheit durch echte Kundenbewertungen</h2>
        <div className="row ">
          <div className="col-12 col-md-5">
            <div className="d-flex align-items-center customer_review_text">
              <div>
                <ArrowSvg />
              </div>
              <p>Bereits über 150.000 Kunden </p>
            </div>
            <div className="d-flex align-items-center customer_review_text">
              <div>
                <ArrowSvg />
              </div>
              <p>über 8.000 eKomi Bewertungen</p>
            </div>
            <div className="d-flex align-items-center customer_review_text">
              <div>
                <ArrowSvg />
              </div>
              <p>Keine Gebühren und Abzüge</p>
            </div>
            <div className="d-flex align-items-center customer_review_text">
              <div>
                <ArrowSvg />
              </div>
              <p>Keine Versandkosten</p>
            </div>
          </div>
          <div className="col-12 col-md-7">
            <div className="d-flex align-items-center customer_review_ekomi_powered_by">
              <Image src={EkomiVector} alt="" width={165} height={165} />
              <div className="ekomi_powered_by">
                <ul>
                  <li> • eKomi Siegel Gold</li>
                  <li> • Unabhängig & transparent</li>
                </ul>
                <div className="pwered_by">
                  <div>
                    <p>Powered by</p>
                    <Image src={PowerBy} alt="" width={139} height={37} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row review_slider_row">
          <div className="col-6 col-md-6 col-lg-3 ">
            <div className="review_card">
              <div className="d-flex align-items-center Bewertung">
                <h2>4.9</h2>
                <p>Durchschnittliche Bewertung</p>
              </div>
              <div class="review">
                <i class="fa fa-star" style={{ fontSize: "30px" }}></i>
                <i class="fa fa-star" style={{ fontSize: "30px" }}></i>
                <i class="fa fa-star" style={{ fontSize: "30px" }}></i>
                <i class="fa fa-star" style={{ fontSize: "30px" }}></i>
                <i class="fa fa-star" style={{ fontSize: "30px" }}></i>
              </div>
              <div className="p2">
                <p>Basierend aus über 8.000 Bewertungen</p>
              </div>
              <div className="d-flex align-items-center justify-content-between">
                <div className="positive">Positive</div>
                <div className="">
                  <Image src={Positive} alt="" />
                </div>
                <div className="percentage-bar">
                  <div className="fill" style={{ width: "92.2%" }}></div>
                </div>

                <div className="review_percentage">99.2%</div>
              </div>
              <div className="d-flex align-items-center justify-content-between">
                <div className="positive">Neutral</div>
                <div className="">
                  <Image src={Neutral} alt="" />
                </div>
                <div className="percentage-bar">
                  <div className="fill" style={{ width: "10.35%" }}></div>
                </div>
                <div className="review_percentage">0.35%</div>
              </div>
              <div className="d-flex align-items-center justify-content-between">
                <div className="positive">Negativ</div>
                <div className="">
                  <Image src={Negative} alt="" />
                </div>
                <div className="percentage-bar">
                  <div className="fill" style={{ width: "12.45%" }}></div>
                </div>
                <div className="review_percentage">0.45%</div>
              </div>
              <div>
                <p className="text-center review_date">Stand 01.06.2023</p>
              </div>
            </div>
          </div>
          <div className="col-6 col-md-6 col-lg-9 review_slider_col">
            <div className="review_slider_column">
              <div className="review_heading2">
                <p>KUNDENBEWERTUNGEN</p>
              </div>
              <Swiper
                className="review_slider_slides pt-md-4"
                modules={[Navigation]}
                slidesPerView={3}
                breakpoints={{
                  320: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                  },
                  480: {
                    slidesPerView: 1,
                    spaceBetween: 30,
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
                {reviewCardArray.map((item, index) => {
                  return (
                    <SwiperSlide>
                      <div className="review_slider_card">
                        <div className="d-flex justify-content-between align-items-center">
                          <p className="reviewNum">{item.reviewNum}</p>{" "}
                          <p className="reviewStar">{item.reviewStar}</p>{" "}
                          <p className="reviewDate">{item.reviewDate}</p>
                        </div>
                        <div className="review_para d-flex justify-content-center align-items-center">
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
        </div>
      </div>
    </section>
  );
};

export default CustomerReviewsSection;

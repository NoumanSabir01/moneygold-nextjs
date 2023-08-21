"use client";
import { WirAnkafunArray } from "@/public/static/HomepageStatic";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import BtnArrow from "./BtnArrow";
import BtnArrowMobile from "./BtnArrowMobile";

const WirAnkafun = () => {
  return (
    <Swiper
      className="wir_ankaufun_swiper_wrapper"
      modules={[Pagination]}
      slidesPerView={1}
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        400: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 1,
          spaceBetween: 30,
        },
        993: {
          slidesPerView: 1,
          spaceBetween: 30,
        },
      }}
      pagination={{ clickable: true }}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <section className="wir_ankaufun_wrapper">
          <div className="container">
            <h2 className="wir_ankaufun_h2">
              Hier sehen Sie eine Übersicht der Edelmetalle, die wir ankaufen
            </h2>
            <h3 className="wir_ankaufun_h3">
              Detaillierte Informationen finden Sie{" "}
              <span className="wir_ankaufun_link">hier</span>
            </h3>
            <div className="row">
              {WirAnkafunArray.map((item, index) => {
                return (
                  <div
                    className="col-6 col-md-6 col-lg-4 wir_ankaufun_card_column"
                    key={index}
                  >
                    <div className="wir_ankaufun_card">
                      <div className="d-flex justify-content-center align-items-center wir_ankaufun_card_img">
                        <Image src={item.src} alt="" />
                        <div className="text_list_container">
                          <ul>
                            <li>Goldbarren</li>
                            <li>Feingoldbarren</li>
                            <li>Goldbarren</li>
                            <li>Goldbarren</li>
                            <li>Feingoldbarren</li>
                            <li>Goldbarren</li>
                          </ul>
                        </div>
                      </div>
                      <div className="wir_verkaufer">
                        <div>
                          <p className="wir_verkaufer_name">{item.name}</p>
                          <p className="wir_verkaufer_text">{item.text}</p>
                        </div>
                        <div className="wir_verkaufer_btn">
                          <div className="wir_verkaufer_btn_arrow">
                            <BtnArrowMobile />
                            <BtnArrow />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </SwiperSlide>
      <SwiperSlide>
        <section className="wir_ankaufun_wrapper">
          <div className="container">
            <h2 className="wir_ankaufun_h2">
              Hier sehen Sie eine Übersicht der Edelmetalle, die wir ankaufen
            </h2>
            <h3 className="wir_ankaufun_h3">
              Detaillierte Informationen finden Sie{" "}
              <span className="wir_ankaufun_link">hier</span>
            </h3>
            <div className="row">
              {WirAnkafunArray.map((item, index) => {
                return (
                  <div
                    className="col-6 col-md-6 col-lg-4 wir_ankaufun_card_column"
                    key={index}
                  >
                    <div className="wir_ankaufun_card">
                      <div className="d-flex justify-content-center align-items-center wir_ankaufun_card_img">
                        <Image src={item.src} alt="" />
                        <div className="text_list_container">
                          <ul>
                            <li>Goldbarren</li>
                            <li>Feingoldbarren</li>
                            <li>Goldbarren</li>
                            <li>Goldbarren</li>
                            <li>Feingoldbarren</li>
                            <li>Goldbarren</li>
                          </ul>
                        </div>
                      </div>
                      <div className="wir_verkaufer">
                        <div>
                          <p className="wir_verkaufer_name">{item.name}</p>
                          <p className="wir_verkaufer_text">{item.text}</p>
                        </div>
                        <div className="wir_verkaufer_btn">
                          <div className="wir_verkaufer_btn_arrow">
                            <BtnArrowMobile />
                            <BtnArrow />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </SwiperSlide>
    </Swiper>
  );
};

export default WirAnkafun;

import { WirAnkafunArray } from "@/public/static/HomepageStatic";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import BtnArrow from "./BtnArrow";

const WirAnkafun = () => {
  return (
    <section className="wir_ankaufun_wrapper">
      <div className="container">
        <h2 className="wir_ankaufun_h2">
          Hier sehen Sie eine Übersicht der Edelmetalle, die wir ankaufen
        </h2>
        <h3 className="wir_ankaufun_h3">
          Detaillierte Informationen finden Sie{" "}
          <span className="wir_ankaufun_link">hier</span>
        </h3>
        <div className="wir_ankaufun_slider">
          <Swiper
            modules={[Pagination]}
            slidesPerView={1}
            pagination={{ clickable: true }}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <SwiperSlide>
              <div className="row">
                {WirAnkafunArray.map((item, index) => {
                  return (
                    <div className="col-12 col-md-6 col-lg-4" key={index}>
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
                            <BtnArrow />
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="row">
                {WirAnkafunArray.map((item, index) => {
                  return (
                    <div className="col-12 col-md-6 col-lg-4" key={index}>
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
                            <BtnArrow />
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default WirAnkafun;

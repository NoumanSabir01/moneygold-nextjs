"use client";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import PriceValueForm from "../shared/PriceValueForm";
import FourNine from "/public/assets/img/homepage/4-9.png";
import GoldShmchk from "/public/assets/img/homepage/GOLDSCHMUCK.png";
import Arrow from "/public/assets/img/homepage/hero-arrow.png";
import HeroNtv from "/public/assets/img/homepage/hero-ntv.png";
import TrustAmi from "/public/assets/img/homepage/hero-trustami.png";
import Diamond from "/public/assets/img/homepage/slider2_diamond.png";
import GoldBar from "/public/assets/img/homepage/slider2_goldbar.png";
import Goldmunzen from "/public/assets/img/homepage/slider2_goldmunzen.png";
import Luxury from "/public/assets/img/homepage/slider2_luxury.png";
import TafelSilber from "/public/assets/img/homepage/slider2_tafelsilber.png";
import Zahngold from "/public/assets/img/homepage/slider2_zahngold.png";
import Silber from "/public/assets/img/homepage/slider2silber.png";
import Slider3Tick from "/public/assets/img/homepage/slider3_tick.png";
import TopDienstleister from "/public/assets/img/homepage/top-dienstleister.png";
import TopEmpfehlung from "/public/assets/img/homepage/top-empfehlung.png";
import ProvenExpert from "/public/assets/img/proven-expert.png";
import TrustedShops from "/public/assets/img/trusted-shops.png";

const Herosection = () => {
  return (
    <Swiper
      modules={[Pagination]}
      slidesPerView={1}
      pagination={{ clickable: true }}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <div className="herobg1">
          <div className="container">
            <div className="row slide1-row">
              <div className="col-md-12 col-lg-8">
                <div className="slider1-left">
                  <h2 className="slide1-h2">Ihr altes Gold zu Geld machen</h2>
                  <h2 className="slide1-Warum">Warum moneyGold?</h2>
                  <div className="d-flex align-items-center slide1-text">
                    <div>
                      <i class="fa fa-check" aria-hidden="true"></i>
                    </div>

                    <p>Schnelle Online-Abwicklung</p>
                  </div>
                  <div className="d-flex align-items-center slide1-text">
                    <div>
                      <i class="fa fa-check" aria-hidden="true"></i>
                    </div>
                    <p>Kostenloser & versicherter Versand</p>
                  </div>
                  <div className="d-flex align-items-center slide1-text">
                    <div>
                      <i class="fa fa-check" aria-hidden="true"></i>
                    </div>
                    <p>Sehr hohe Ankaufspreise</p>
                  </div>
                  <div className="d-flex align-items-center slide1-text">
                    <div>
                      <i class="fa fa-check" aria-hidden="true"></i>
                    </div>
                    <p>Gold-zurück-Garantie</p>
                  </div>
                  <div className="d-flex align-items-center">
                    <div className="hero-ntv">
                      <Image
                        src={HeroNtv}
                        alt="ntv"
                        className="hero-ntv-img"
                        width={176}
                        height={176}
                      />
                    </div>
                    <div className="position-relative ">
                      <div className="slide1-Verkaufen">Verkaufen Sie Ihre</div>
                      <div className="slide1-Edelmetalle">Edelmetalle</div>
                      <div className="slide1-Verkaufen">beim Testsieger</div>
                      <div className="hero-arrowimg">
                        <Image src={Arrow} alt="arrow" />
                      </div>
                    </div>
                  </div>
                  <div className="slider1-garanty">
                    <div className="d-flex justify-content-center">
                      <p>Garantierte Sicherheit:</p>
                    </div>
                    <div className="d-flex justify-content-evenly  border-2 gap-1 pt-4 garanty-img">
                      <Image src={TrustAmi} alt="" />
                      <Image src={TrustedShops} alt="" />
                      <Image src={FourNine} alt="" />
                      <Image
                        src={ProvenExpert}
                        alt=""
                        className="hero-proven"
                      />
                      <Image src={TopDienstleister} alt="" />
                      <Image src={TopEmpfehlung} alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 hero_slider1 kostenlos-wrapper">
                <PriceValueForm />
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="herobg2">
          <div className="container">
            <div className="hero_slide2">
              <h2 className="slide2_ankauf">Ankauf von</h2>
              <h2 className="slide2_h2_mehr">Gold, Silber und mehr</h2>
              <div className="card_img ">
                <Image src={GoldShmchk} alt="" />

                <Image src={Silber} alt="" />

                <Image src={TafelSilber} alt="" />

                <Image src={Zahngold} alt="" />

                <Image src={Diamond} alt="" />

                <Image src={Luxury} alt="" />

                <Image src={GoldBar} alt="" />

                <Image src={Goldmunzen} alt="" />

                <Image src={Silber} alt="" />

                <Image src={Silber} alt="" />

                <Image src={Silber} alt="" />

                <Image src={Silber} alt="" />
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="herobg3">
          <div className="container">
            <div className="hero_slide3">
              <h2 className="slide3_ankauf">Ankauf von</h2>
              <h2 className="slide3_h2_mehr">Zahngold und Dentalgold</h2>
              <div className="d-flex align-items-center">
                <div>
                  <Image src={Slider3Tick} alt="" className="slide3_tick_img" />
                </div>
                <div className="slider3_text">
                  Zahngold gelb-und silberfarbig
                </div>
              </div>
              <div className="d-flex align-items-center">
                <div>
                  <Image src={Slider3Tick} alt="" className="slide3_tick_img" />
                </div>
                <div className="slider3_text">
                  Dental - sowie Gusslegierungen
                </div>
              </div>
              <div className="d-flex align-items-center">
                <div>
                  <Image src={Slider3Tick} alt="" className="slide3_tick_img" />
                </div>
                <div className="slider3_text">
                  Zahngold auch mit Zahn - und Zementresten
                </div>
              </div>
              <div className="d-flex align-items-center">
                <div>
                  <Image src={Slider3Tick} alt="" className="slide3_tick_img" />
                </div>
                <div className="slider3_text">
                  Zahnkronen, Inlays,Brücken und Prothesen
                </div>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Herosection;

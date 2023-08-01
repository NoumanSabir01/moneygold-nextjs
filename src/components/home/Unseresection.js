import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import EkomiVector from "/public/assets/img/ekomi-vektor.png";
import Ntv from "/public/assets/img/homepage/hero-ntv.png";
import TopDienstleiester from "/public/assets/img/homepage/top-dienstleister.png";
import ProvenExperts from "/public/assets/img/proven-expert.png";
import TrustedShops from "/public/assets/img/trusted-shops.png";

const Unseresection = () => {
  return (
    <section className="unsere_section_wrapper">
      <div className="container">
        <h2 className="text-center">
          Unsere Auszeichnungen - Vertrauen ist uns wichtig
        </h2>

        <Swiper
          modules={[Navigation]}
          slidesPerView={window.innerWidth <= 992 ? 3 : 5}
          navigation
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <div className="d-flex align-items-center justify-content-center unsere_section_slide1_img">
              <Image src={EkomiVector} alt="" width={166} height={166} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="d-flex align-items-center justify-content-center unsere_section_slide1_img">
              <Image src={TrustedShops} alt="" width={166} height={166} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="d-flex align-items-center justify-content-center unsere_section_slide1_img">
              <Image src={ProvenExperts} alt="" width={166} height={166} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="d-flex align-items-center justify-content-center unsere_section_slide1_img">
              <Image src={TopDienstleiester} alt="" width={166} height={166} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="d-flex align-items-center justify-content-center unsere_section_slide1_img">
              <Image src={Ntv} alt="" width={166} height={166} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="d-flex align-items-center justify-content-center unsere_section_slide1_img">
              <Image src={EkomiVector} alt="" width={166} height={166} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="d-flex align-items-center justify-content-center unsere_section_slide1_img">
              <Image src={TrustedShops} alt="" width={166} height={166} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="d-flex align-items-center justify-content-center unsere_section_slide1_img">
              <Image src={ProvenExperts} alt="" width={166} height={166} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="d-flex align-items-center justify-content-center unsere_section_slide1_img">
              <Image src={TopDienstleiester} alt="" width={166} height={166} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="d-flex align-items-center justify-content-center unsere_section_slide1_img">
              <Image src={Ntv} alt="" width={166} height={166} />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Unseresection;
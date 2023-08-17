"use client";
import "swiper/css";
import ValueCalc from "../shared/ValueCalc";
import Pricing from "../shared/pricing/Pricing";
import CustomerReview2 from "./CustomerReview2";
import CustomerReviewsSection from "./CustomerReviewsSection";
import GoldankaufKotenloser from "./GoldankaufKotenloser";
import GoldankaufOnine from "./GoldankaufOnine";
import GoldenKauf from "./GoldenKauf";
import Herosection from "./Herosection";
import HomeVideoSection from "./HomeVideoSection";
import MeltingFacilities from "./MeltingFacilities";
import Professionalsection from "./Professionalsection";
import Ubersection from "./Ubersection";
import Unseresection from "./Unseresection";
import Versandarten from "./Versandarten";
import WirAnkafun from "./WirAnkafun";

const MainPage = () => {
  return (
    <div className="site_home_page">
      <Herosection />
      <GoldenKauf />
      <ValueCalc />
      <GoldankaufKotenloser />
      <CustomerReviewsSection />
      <WirAnkafun />
      <GoldankaufOnine />
      <HomeVideoSection />
      <CustomerReview2 />
      <Ubersection />
      <Professionalsection />
      <Unseresection />
      <section className="pricing">
        <Pricing />
        <div className="d-flex justify-content-center align-items-center">
          <button className=" text-white pricing-btn">
            JETZT wert berechnen
          </button>
        </div>
      </section>
      <Versandarten />
      <MeltingFacilities />
    </div>
  );
};

export default MainPage;

import Image from "next/image";
import EkomiVektor from "/public/assets/img/ekomi-vektor.png";
import TrustedShops from "/public/assets/img/trusted-shops.png";
const PriceValueForm = () => {
  return (
    <div class="position-relative overflow-hidden form-column kostenlos">
      <a class="sold_out" href="#" tabindex="0">
        Kostenlos
      </a>
      <h5 class="color-gold Kostenlos-heading">
        Versandtasche anfordern <br />
        <strong class="text-gold">Kostenlos &amp; Unverbindlich</strong>
      </h5>
      <form>
        <div class="d-flex py-2">
          <input
            type="text"
            class="form-control w-50 me-2"
            id="Vorname"
            placeholder="Vorname*"
            tabindex="0"
          />
          <input
            type="text"
            class="form-control w-50"
            id="Nachname"
            placeholder="Nachname*"
            tabindex="0"
          />
        </div>
        <div class="d-flex py-2">
          <input
            type="text"
            class="form-control w-75 me-2"
            id="Straße"
            placeholder="Straße*"
            tabindex="0"
          />
          <input
            type="text"
            class="form-control w-25"
            id="Nr."
            placeholder="Nr.*"
            tabindex="0"
          />
        </div>
        <div class="d-flex pt-2">
          <input
            type="text"
            class="form-control w-25 me-2"
            id="PLZ"
            placeholder="PLZ*"
            tabindex="0"
          />
          <input
            type="text"
            class="form-control w-75"
            id="Wohnort"
            placeholder="Wohnort*"
            tabindex="0"
          />
        </div>
        <input
          type="text"
          class="form-control my-3"
          id="Telefon"
          placeholder="Telefon*"
          tabindex="0"
        />
        <input
          type="text"
          class="form-control my-3"
          id="E-Mail"
          placeholder="E-Mail*"
          tabindex="0"
        />
        <button
          type="submit"
          class="btn-bg w-100 rounded-pill fw-bold"
          tabindex="0"
        >
          Versandtasche kostenlos anforden
        </button>
      </form>
      <div class="position-relative pt-3 pb-1">
        <p class="garantierte w-75 mx-auto text-center color-gold">
          <span class="fw-bold">Über 150.000</span> zufriedene Kunden
        </p>
        <div class="d-flex justify-content-evenly border-top border-2 gap-1 pt-4 trusted-shops">
          <Image
            class="trusted"
            src={EkomiVektor}
            alt=""
            width="90"
            height="90"
          />
          <Image
            class="trusted"
            src={TrustedShops}
            alt=""
            width="90"
            height="90"
          />
          <div class="text-center">
            <h5 class="text-white text-uppercase px-2">Trusted Shops</h5>
            <div class="ratings star-clr">
              <i class="fa fa-star rating-color"></i>
              <i class="fa fa-star rating-color"></i>
              <i class="fa fa-star rating-color"></i>
              <i class="fa fa-star rating-color"></i>
              <i class="fa fa-star rating-color"></i>
            </div>
            <h6 class="font-normal text-white">Sehr Gut</h6>
          </div>
        </div>
      </div>
      <p class="text-center text-white ">
        Mit Klick auf "Versandtasche kostenlos anfordern" stimme ich den{" "}
        <u>AGB</u> zu und habe die
        <u> Datenschutzerklärung</u> zur Kenntnis genommen.
      </p>
    </div>
  );
};

export default PriceValueForm;

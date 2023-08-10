import Image from "next/image";
import EkomiVektor from "/public/assets/img/ekomi-vektor.png";
import TrustedShops from "/public/assets/img/trusted-shops.png";

export const PriceValueForm2 = ({
  topHeading = "DHL Paketschein anfordern",
}) => {
  return (
    <div class="position-relative overflow-hidden form-column price_value_form2">
      <a class="sold_out" href="#" tabindex="0">
        Kostenlos
      </a>
      <h5 class="color-gold price_value_form2-heading">
        <strong>{topHeading}</strong>
        <br /> Kostenlos & Unverbindlich
      </h5>
      <div className="row">
        <div className="col-12 col-md-6 col-lg-6">
          <form>
            <div class="d-flex mb-3">
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
            <div class="d-flex mb-3">
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
            <div class="d-flex mb-3">
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
          </form>
        </div>
        <div className="col-12 col-md-6 col-lg-6">
          <div className="price_value2_textarea">
            <textarea
              class="form-control "
              id="comment"
              rows="6"
              placeholder="Wenn Sie mögen können Sie hier Ihre zu verkaufende Schmuckstücke oder den Wert Ihrer Edelmetalle auflisten."
            ></textarea>
          </div>
          <div class="position-relative pt-2 pb-1">
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
                <div class="ratings star-clr price_value_form2_rating">
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
        </div>
      </div>
      <div className="price_value_form2_submit_btn">
        <button type="submit" class="btn-bg" tabindex="0">
          Paketschein kostenlos anfordern
        </button>
      </div>
    </div>
  );
};

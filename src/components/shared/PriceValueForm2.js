import Image from "next/image";
import EkomiVektor from "/public/assets/img/ekomi-vektor.png";
import TrustedShops from "/public/assets/img/trusted-shops.png";

export const PriceValueForm2 = ({
  bestellen = false,
  topHeading = "DHL Paketschein anfordern",
}) => {
  return (
    <div className="position-relative overflow-hidden form-column price_value_form2">
      <a className="sold_out" href="#">
        Kostenlos
      </a>
      <h5 className="color-gold price_value_form2-heading">
        <strong>{topHeading}</strong>
        <br /> Kostenlos & Unverbindlich
      </h5>
      <div className="row">
        <div className="col-12 col-md-6 col-lg-6">
          <form>
            <div className="d-flex mb-3">
              <input
                type="text"
                className="form-control w-50 me-2"
                id="Vorname"
                placeholder="Vorname*"
              />
              <input
                type="text"
                className="form-control w-50"
                id="Nachname"
                placeholder="Nachname*"
              />
            </div>
            <div className="d-flex mb-3">
              <input
                type="text"
                className="form-control w-75 me-2"
                id="Straße"
                placeholder="Straße*"
              />
              <input
                type="text"
                className="form-control w-25"
                id="Nr."
                placeholder="Nr.*"
              />
            </div>
            <div className="d-flex mb-3">
              <input
                type="text"
                className="form-control w-25 me-2"
                id="PLZ"
                placeholder="PLZ*"
              />
              <input
                type="text"
                className="form-control w-75"
                id="Wohnort"
                placeholder="Wohnort*"
              />
            </div>
            <input
              type="text"
              className="form-control my-3"
              id="Telefon"
              placeholder="Telefon*"
            />
            <input
              type="text"
              className="form-control my-3"
              id="E-Mail"
              placeholder="E-Mail*"
            />
            {bestellen && (
              <select
                className="bestellen_select form-select  my-3"
                aria-label="Default select"
              >
                <option selected>1 Versandtaschen</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            )}
          </form>
        </div>
        <div className="col-12 col-md-6 col-lg-6">
          <div className="price_value2_textarea">
            <textarea
              className="form-control "
              id="comment"
              rows="6"
              placeholder="Wenn Sie mögen können Sie hier Ihre zu verkaufende Schmuckstücke oder den Wert Ihrer Edelmetalle auflisten."
            ></textarea>
          </div>
          <div className="position-relative pt-2 pb-1">
            <p className="garantierte w-75 mx-auto text-center color-gold">
              <span className="fw-bold">Über 150.000</span> zufriedene Kunden
            </p>
            <div className="d-flex justify-content-evenly border-top border-2 gap-1 pt-4 trusted-shops">
              <Image
                className="trusted"
                src={EkomiVektor}
                alt=""
                width="90"
                height="90"
              />
              <Image
                className="trusted"
                src={TrustedShops}
                alt=""
                width="90"
                height="90"
              />
              <div className="text-center">
                <h5 className="text-white text-uppercase px-2">
                  Trusted Shops
                </h5>
                <div className="ratings star-clr price_value_form2_rating">
                  <i className="fa fa-star rating-color"></i>
                  <i className="fa fa-star rating-color"></i>
                  <i className="fa fa-star rating-color"></i>
                  <i className="fa fa-star rating-color"></i>
                  <i className="fa fa-star rating-color"></i>
                </div>
                <h6 className="font-normal text-white">Sehr Gut</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="price_value_form2_submit_btn">
        <button type="submit" className="btn-bg">
          Paketschein kostenlos anfordern
        </button>
      </div>
    </div>
  );
};

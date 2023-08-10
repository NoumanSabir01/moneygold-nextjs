import Image from "next/image";
import EkomiVektor from "/public/assets/img/ekomi-vektor.png";
import TrustedShops from "/public/assets/img/trusted-shops.png";
const PriceValueForm = () => {
  return (
    <div className="position-relative overflow-hidden form-column kostenlos">
      <a className="sold_out" href="#">
        Kostenlos
      </a>
      <h5 className="color-gold Kostenlos-heading">
        Versandtasche anfordern <br />
        <strong className="text-gold">Kostenlos &amp; Unverbindlich</strong>
      </h5>
      <form>
        <div className="d-flex py-2">
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
        <div className="d-flex py-2">
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
        <div className="d-flex pt-2">
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
        <button type="submit" className="btn-bg w-100 rounded-pill fw-bold">
          Versandtasche kostenlos anforden
        </button>
      </form>
      <div className="position-relative pt-3 pb-1">
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
            <h5 className="text-white text-uppercase px-2">Trusted Shops</h5>
            <div className="ratings star-clr">
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
      <p className="text-center text-white ">
        Mit Klick auf "Versandtasche kostenlos anfordern" stimme ich den{" "}
        <u>AGB</u> zu und habe die
        <u> Datenschutzerklärung</u> zur Kenntnis genommen.
      </p>
    </div>
  );
};

export default PriceValueForm;

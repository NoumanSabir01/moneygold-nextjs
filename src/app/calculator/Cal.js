import PriceValueForm from "@/components/shared/PriceValueForm";
import ValueCalc from "@/components/shared/ValueCalc";
import Pricing from "@/components/shared/pricing/Pricing";

const Cal = () => {
  return (
    <div>
      <ValueCalc />
      <section className="current-metal-values">
        <div className="container">
          <div className="d-flex flex-column justify-content-center align-items-center">
            <h2 className="text-center">Aktueller Wert lhrer Edelmetalle:</h2>
            <div className="value">3.438,40 €</div>
            <div className="btn-values">Ankauf unverbindlich starten</div>
            <p className="text-center">
              Der endgültige Auszahlungsbetrag wird anhand der Ankaufskurse bei
              Sendungseingang ermittelt.
            </p>
          </div>
        </div>
      </section>
      <section className="pricing">
        <Pricing />
      </section>
      <section className="values-form">
        <div className="container current-value">
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <div className="current-value-left">
                <div className="d-flex flex-column justify-content-center align-items-center">
                  <h2 className="text-center mb-2">
                    Aktueller Wert Ihrer Edelmetalle
                  </h2>
                  <h4 className="fw-normal mb-0 sie">
                    Sie erhalten abzugsfrei von uns:
                  </h4>
                  <div className="current-price">3.438,40 €</div>
                </div>
                <div className="d-flex justify-content-center align-items-center flex-lg-row flex-column">
                  <div className="calc-table flex-fill">
                    <h5 className="text-center p-2 mt-3">
                      Ihre Berechnung im Detail:
                    </h5>
                    <table className="table">
                      <tbody>
                        <tr className="">
                          <td>20 Gramm</td>
                          <td className="text-center">999er Feingold</td>
                          <td className="text-end">zu 1.158,40 €</td>
                        </tr>
                        <tr className="">
                          <td>40 Gramm</td>
                          <td className="text-center">986er Gold</td>
                          <td className="text-end">zu 2.280,40 €</td>
                        </tr>
                        <tr className="brdr-btm">
                          <td colSpan="2" className="fw-bold">
                            Ihr Auszahlungsbetrag
                          </td>
                          <td className="fw-bold text-end">3.438,40 €</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="triangle-right"></div>
                  <div className="triangle-down"></div>
                </div>
              </div>
            </div>
            <div className="col-md-12 col-lg-4 kostenlos-wrapper">
              <PriceValueForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cal;

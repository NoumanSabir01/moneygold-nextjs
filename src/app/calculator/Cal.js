import PriceValueForm from "@/components/shared/PriceValueForm";
import ValueCalc from "@/components/shared/ValueCalc";
import Pricing from "@/components/shared/pricing/Pricing";

const Cal = () => {
  return (
    <div>
      <ValueCalc />
      <section class="current-metal-values">
        <div class="container">
          <div class="d-flex flex-column justify-content-center align-items-center">
            <h2 class="text-center">Aktueller Wert lhrer Edelmetalle:</h2>
            <div class="value">3.438,40 €</div>
            <div class="btn-values">Ankauf unverbindlich starten</div>
            <p class="text-center">
              Der endgültige Auszahlungsbetrag wird anhand der Ankaufskurse bei
              Sendungseingang ermittelt.
            </p>
          </div>
        </div>
      </section>
      <section className="pricing">
        <Pricing />
      </section>
      <section class="values-form">
        <div class="container current-value">
          <div class="row">
            <div class="col-lg-8 col-md-12">
              <div class="current-value-left">
                <div class="d-flex flex-column justify-content-center align-items-center">
                  <h2 class="text-center mb-2">
                    Aktueller Wert Ihrer Edelmetalle
                  </h2>
                  <h4 class="fw-normal mb-0 sie">
                    Sie erhalten abzugsfrei von uns:
                  </h4>
                  <div class="current-price">3.438,40 €</div>
                </div>
                <div class="d-flex justify-content-center align-items-center flex-lg-row flex-column">
                  <div class="calc-table flex-fill">
                    <h5 class="text-center p-2 mt-3">
                      Ihre Berechnung im Detail:
                    </h5>
                    <table class="table">
                      <tbody>
                        <tr class="">
                          <td>20 Gramm</td>
                          <td class="text-center">999er Feingold</td>
                          <td class="text-end">zu 1.158,40 €</td>
                        </tr>
                        <tr class="">
                          <td>40 Gramm</td>
                          <td class="text-center">986er Gold</td>
                          <td class="text-end">zu 2.280,40 €</td>
                        </tr>
                        <tr class="brdr-btm">
                          <td colspan="2" class="fw-bold">
                            Ihr Auszahlungsbetrag
                          </td>
                          <td class="fw-bold text-end">3.438,40 €</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div class="triangle-right"></div>
                  <div class="triangle-down"></div>
                </div>
              </div>
            </div>
            <div class="col-md-12 col-lg-4 kostenlos-wrapper">
              <PriceValueForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cal;

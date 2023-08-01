const ValueCalc = () => {
  return (
    <section className="value-calculate">
      <div className="container">
        <h3 className="text-center mb-3 fw-bold">
          Berechnen Sie den Wert Ihrer Edelmetalle
        </h3>
        <div className="row">
          <form action="">
            <div className="row">
              <div className="col-md-4 text-center">
                <div className="d-flex align-items-center value-calculate-input">
                  <label className="lbl" for="">
                    Gramm
                  </label>
                  <input className="px-2" name="gramm" type="text" />
                </div>
              </div>
              <div className="col-md-4 col-lg-5 text-center">
                <div className="d-flex align-items-center justify-content-center position-relative">
                  <label className="lbl" for="">
                    Karat
                  </label>
                  <select className="form-select mb-0">
                    <option selected="">Bitte auswählen</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                  <div className="select-line"></div>
                </div>
              </div>
              <div className="col-md-4 col-lg-3 text-center mt-3 mt-md-0">
                <button className="btn px-4 text-white btn-calculate">
                  Jetzt Wert berechnen
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ValueCalc;

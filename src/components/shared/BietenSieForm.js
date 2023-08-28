import Button from "./button/Button";

const BietenSieForm = ({
  heading = "",
  luxusehren = false,
  diamanten = false,
  textareaHeading = "",
  termsLabel = "",
  className = "",
}) => {
  return (
    <div className="bieten_sie_form position-relative overflow-hidden ">
      <a className="bieten_sie_form_kostenlos" href="#">
        Kostenlos
      </a>
      <h2 className="bieten_sie_form_heading1">{heading}</h2>
      <form>
        <div className="row">
          <div className="col-12 col-md-6">
            {luxusehren && (
              <div className="bieten_sie_form_label_input">
                <label>Marke</label>
                <select
                  className="bieten_sie_form_select form-select "
                  aria-label="Default select"
                  defaultValue={"Bitte auswählen"}
                >
                  <option>Bitte auswählen</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
            )}
            {diamanten && (
              <div className="bieten_sie_form_label_input">
                <label>Karat</label>
                <select
                  className="bieten_sie_form_select form-select"
                  aria-label="Default select"
                  defaultValue={"Bitte auswählen"}
                >
                  <option>Bitte auswählen</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
            )}
          </div>
          <div className="col-12 col-md-6">
            {luxusehren && (
              <div className="bieten_sie_form_label_input">
                <label>Gehäuse / Material</label>
                <select
                  className="bieten_sie_form_select form-select "
                  aria-label="Default select"
                  defaultValue={"Bitte auswählen"}
                >
                  <option>Bitte auswählen</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
            )}
            {diamanten && (
              <div className="bieten_sie_form_label_input">
                <label>Farbe</label>
                <select
                  className="bieten_sie_form_select form-select "
                  aria-label="Default select"
                  defaultValue={"Bitte auswählen"}
                >
                  <option>Bitte auswählen</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
            )}
          </div>
          <div className="col-12 col-md-6">
            {luxusehren && (
              <div className="bieten_sie_form_label_input">
                <label>Modell</label>
                <select
                  className="bieten_sie_form_select form-select "
                  aria-label="Default select"
                  defaultValue={"Bitte auswählen"}
                >
                  <option>Bitte auswählen</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
            )}
            {diamanten && (
              <div className="bieten_sie_form_label_input">
                <label>Diamantenform</label>
                <select
                  className="bieten_sie_form_select form-select "
                  aria-label="Default select"
                  defaultValue={"Bitte auswählen"}
                >
                  <option>Bitte auswählen</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
            )}
          </div>
          <div className="col-12 col-md-6">
            {luxusehren && (
              <div className="bieten_sie_form_label_input">
                <label>Material Armband</label>
                <select
                  className="bieten_sie_form_select form-select "
                  aria-label="Default select"
                  defaultValue={"Bitte auswählen"}
                >
                  <option>Bitte auswählen</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
            )}
            {diamanten && (
              <div className="bieten_sie_form_label_input">
                <label>Schliff</label>
                <select
                  className="bieten_sie_form_select form-select "
                  aria-label="Default select"
                  defaultValue={"Bitte auswählen"}
                >
                  <option>Bitte auswählen</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
            )}
          </div>
          <div className="col-12 col-md-6">
            {luxusehren && (
              <div className="bieten_sie_form_label_input">
                <label>Kaufdatum</label>
                <input type="text" placeholder="Kaufdatum*" />
              </div>
            )}
            {diamanten && (
              <div className="bieten_sie_form_label_input">
                <label>Rheinheit</label>
                <select
                  className="bieten_sie_form_select form-select "
                  aria-label="Default select"
                  defaultValue={"Bitte auswählen"}
                >
                  <option>Bitte auswählen</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
            )}
          </div>
          <div className="col-12 col-md-6">
            {luxusehren && (
              <div className="bieten_sie_form_label_input">
                <label>Kaufland</label>
                <input type="text" placeholder="Kaufland*" />
              </div>
            )}
            {diamanten && (
              <div className="bieten_sie_form_label_input">
                <label>Zertifikat</label>
                <select
                  className="form-select bieten_sie_form_select"
                  aria-label="Default select"
                  defaultValue={"Bitte auswählen"}
                >
                  <option>Bitte auswählen</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
            )}
          </div>
        </div>
        {diamanten && (
          <div className="row">
            <div className="col-12 col-md-6">
              <div className="bieten_sie_form_label_input">
                <label>Verpackung</label>
                <select
                  className="bieten_sie_form_select form-select "
                  aria-label="Default select"
                  defaultValue={"Bitte auswählen"}
                >
                  <option>Bitte auswählen</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="bieten_sie_form_label_input">
                <label>lhr Wunschpreis</label>
                <input type="text" placeholder="lhr Wunschpreis" />
              </div>
            </div>
          </div>
        )}
        {luxusehren && (
          <div className="row">
            <div className="col-12 col-md-12">
              <div className="d-flex justify-content-center text-center ">
                <h3 className="bieten_sie_form_heading2">Zustand und Umfang</h3>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-6">
              <div className="bieten_sie_form_label_input">
                <label>Zustand</label>
                <select
                  className="bieten_sie_form_select form-select "
                  aria-label="Default select"
                  defaultValue={"Bitte auswählen"}
                >
                  <option>Bitte auswählen</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-6">
              <div className="bieten_sie_form_label_input">
                <label>Inkl. Box?</label>
                <select
                  className="bieten_sie_form_select form-select "
                  aria-label="Default select"
                  defaultValue={"Bitte auswählen"}
                >
                  <option>Bitte auswählen</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-6">
              <div className="bieten_sie_form_label_input">
                <label>Inkl. Papieren?</label>
                <select
                  className="bieten_sie_form_select form-select "
                  aria-label="Default select"
                  defaultValue={"Bitte auswählen"}
                >
                  <option>Bitte auswählen</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-6">
              <div className="bieten_sie_form_label_input">
                <label>lhr Wunschpreis</label>
                <select
                  className="bieten_sie_form_select form-select "
                  aria-label="Default select"
                  defaultValue={"Bitte auswählen"}
                >
                  <option>Bitte auswählen</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
            </div>
          </div>
        )}
        {luxusehren && (
          <div className="row">
            <div className="col-12">
              <div className="bieten_sie_form_bilder">
                <h3 className="bieten_sie_form_heading3">Bilder der Uhr</h3>
                <div className="bieten_sie_form_bilder_input">
                  <input
                    type="text"
                    placeholder="Bisher keine Bilder ausgewählt"
                  />
                  <Button
                    btnText="Bild auswählen"
                    height="34px"
                    borderRadius="10px"
                    margin="-10px 0px 0px -30px"
                  />
                </div>
                <div className="bieten_sie_form_bilder_input">
                  <input
                    type="text"
                    placeholder="Bisher keine Bilder ausgewählt"
                  />
                  <Button
                    btnText="Bild auswählen"
                    height="34px"
                    borderRadius="10px"
                    margin="-10px 0px 0px -30px"
                  />
                </div>
                <div className="bieten_sie_form_bilder_input">
                  <input
                    type="text"
                    placeholder="Bisher keine Bilder ausgewählt"
                  />
                  <Button
                    btnText="Bild auswählen"
                    height="34px"
                    borderRadius="10px"
                    margin="-10px 0px 0px -30px"
                  />
                </div>
                <div className="bieten_sie_form_bilder_input">
                  <input
                    type="text"
                    placeholder="Bisher keine Bilder ausgewählt"
                  />
                  <Button
                    btnText="Bild auswählen"
                    height="34px"
                    borderRadius="10px"
                    margin="-10px 0px 0px -30px"
                  />
                </div>
              </div>
            </div>
          </div>
        )}
        {diamanten && (
          <div className="row">
            <div className="col-12">
              <div className="bieten_sie_form_bilder">
                <h3 className="bieten_sie_form_heading3">
                  Bilder der Diamanten bzw. Zertifikate
                </h3>
                <div className="bieten_sie_form_bilder_input ">
                  <input
                    type="text"
                    placeholder="Bisher keine Bilder ausgewählt"
                  />
                  <Button
                    btnText="Bild auswählen"
                    height="34px"
                    borderRadius="10px"
                    margin="-10px 0px 0px -30px"
                  />
                </div>
                <div className="bieten_sie_form_bilder_input">
                  <input
                    type="text"
                    placeholder="Bisher keine Bilder ausgewählt"
                  />
                  <Button
                    btnText="Bild auswählen"
                    height="34px"
                    borderRadius="10px"
                    margin="-10px 0px 0px -30px"
                  />
                </div>
                <div className="bieten_sie_form_bilder_input">
                  <input
                    type="text"
                    placeholder="Bisher keine Bilder ausgewählt"
                  />
                  <Button
                    btnText="Bild auswählen"
                    height="34px"
                    borderRadius="10px"
                    margin="-10px 0px 0px -30px"
                  />
                </div>
              </div>
            </div>
          </div>
        )}
        <div className="row">
          <div className="col-12 col-md-6 col-lg-5">
            <h3 className=" bieten_sie_form_heading4">lhre Kontaktdaten</h3>
            <div className="bieten_sie_form_label_input">
              <label>Vorname</label>
              <input type="text" placeholder="Vorname" />
            </div>
            <div className="bieten_sie_form_label_input">
              <label>Nachname</label>
              <input type="text" placeholder="Nachname" />
            </div>
            <div className="bieten_sie_form_label_input">
              <label>Email</label>
              <input type="text" placeholder="Email" />
            </div>
            <div className="bieten_sie_form_label_input">
              <label>Telefon</label>
              <input type="text" placeholder="Telefon" />
            </div>
          </div>
          <div className="d-none d-lg-block col-lg-1"></div>
          <div className="col-12 col-md-6 col-lg-5">
            <h3 className="bieten_sie_form_heading5">{textareaHeading}</h3>
            <div className="bieten_sie_form_label_input">
              <textarea rows={7} />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="d-none d-md-block col-md-2"></div>
          <div className="col-12 col-md-10 bieten_sie_form_checkbox_col">
            <div className={className}>
              <input
                class="form-check-input"
                type="checkbox"
                id="bieten_sie_form_checkbox"
              />
              <label class="form-check-label" for="bieten_sie_form_checkbox">
                {termsLabel}
              </label>
            </div>
          </div>
        </div>

        <div className="d-flex justify-content-center">
          <Button
            btnText="Anfrage senden"
            width="256px"
            margin="25px 0px 10px 0px"
          />
        </div>
      </form>
    </div>
  );
};

export default BietenSieForm;

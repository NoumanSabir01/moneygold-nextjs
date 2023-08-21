import Button from "@/components/shared/button/Button";
import Image from "next/image";
import SmilingExecutive from "/public/assets/img/contact_smiling_executive.png";

const Contact = () => {
  return (
    <section className="contact_section">
      <div className="container">
        <div className="contact_wrapper">
          <div className="row">
            <div className="col-12 col-md-8">
              <h2 className="contact_wrapper_heading1">
                Nehmen Sie Kontakt zu moneyGold.de auf
              </h2>
              <p className="contact_wrapper_para1">
                Ob per Telefon, E-Mail, Kontaktformular oder über unseren
                Live-Chat: wir sind jederzeit für Sie erreichbar und helfen
                Ihnen immer gerne und schnell bei Ihren Fragen weiter.
              </p>

              <form>
                <div className="row">
                  <div className="col-12 col-md-6">
                    <div className="contact_wrapper_salute_radio">
                      <div className="contact_wrapper_salute">Anrede</div>
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault1"
                        />
                        <label class="form-check-label" for="flexRadioDefault1">
                          Herr
                        </label>
                      </div>
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault2"
                        />
                        <label class="form-check-label" for="flexRadioDefault2">
                          Frau
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="contact_form_input">
                  <div className="row">
                    <div className="col-12 col-md-6">
                      <input
                        type="text"
                        class="form-control"
                        id="contactVorname"
                        placeholder="Vorname"
                      />
                    </div>
                    <div className="col-12 col-md-6">
                      <input
                        type="text"
                        class="form-control"
                        id="contactNachname"
                        placeholder="Nachname"
                      />
                    </div>
                    <div className="col-12 col-md-12">
                      <input
                        type="email"
                        class="form-control"
                        id="contactEmail"
                        placeholder="E-Mail"
                      />
                    </div>
                    <div className="col-12 col-md-12">
                      <input
                        type="text"
                        class="form-control"
                        id="contactBetreff"
                        placeholder="Betreff"
                      />
                    </div>
                    <div className="col-12 col-md-12">
                      <textarea
                        class="form-control"
                        id="contactTextArea"
                        rows="6"
                        placeholder="Ihre Nachricht"
                      ></textarea>
                    </div>
                  </div>
                </div>
                <div class="form-check contact_checkbox">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label class="form-check-label" for="flexCheckDefault">
                    Ich akzeptiere die AGB. Ich habe die Datenschutzerklärung
                    gelesen und zur Kenntnis genommen. Ich stimme zu, dass meine
                    Angaben und Daten zur Beantwortung meiner Anfrage
                    elektronisch erhoben und gespeichert werden.
                  </label>
                </div>
                <div className="contact_form_submit_btn">
                  <Button
                    btnText="Nachricht absenden"
                    width="348px"
                    borderRadius="10px"
                    margin="25px 0px 0px 0px"
                    boxShadow="-0.035px 2px 3px 0px rgba(6, 0, 14, 0.2)"
                  />
                </div>
              </form>
            </div>
            <div className="col-12 col-md-4">
              <div className="contact_wrapper_card">
                <div className="contact_wrapper_card_upper_div">
                  <h2 className="contact_wrapper_card_upper_div_heading">
                    KUNDENSUPPORT
                  </h2>
                  <div className="contact_wrapper_card_upper_div_img">
                    <Image
                      src={SmilingExecutive}
                      alt="contact smilling executive"
                    />
                  </div>
                  <div className="contact_phone_fax">
                    <span className="color-gold fw-bold">HOTLINE</span>{" "}
                    <span className="fw-bold">040 76118501</span>
                    <br />
                    <span className="color-gold fw-bold">FAX</span>{" "}
                    <span className="fw-bold">76118502</span>
                    <br />
                    <span>MO - DO 10 - 17 Uhr</span>
                    <br />
                    <span>FR 10-15 Uhr</span>
                    <br />
                    <span>info@moneygold.de</span>
                  </div>
                </div>
                <div className="contact_wrapper_card_lower_div">
                  <div className="text-center text-white">
                    <span className="color-gold fw-bold">moneyGold.de</span>{" "}
                    <br />
                    ist ein Service der Firma
                    <br />
                    <span className="color-gold fw-bold">
                      Elias Consulting GmbH
                    </span>
                    <br />
                    Strucksbarg 33a <br />
                    21077 Hamburg
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

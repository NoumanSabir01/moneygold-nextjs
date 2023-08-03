import Image from "next/image";
import Button from "../shared/button/Button";
import VersandDelivery from "/public/assets/img/homepage/versand_delivery_img.png";
import VersandDeliveryRecieved from "/public/assets/img/homepage/versand_delivery_recieved_img.png";
import VersandMoneyGold from "/public/assets/img/homepage/versand_money_gold_img.png";
const Versandarten = () => {
  return (
    <section className="versandarten_wrapper">
      <div className="container">
        <div className="d-flex justify-content-center align-items-center versandarten_h2">
          <h2>Unsere Versandarten</h2>
        </div>
        <div className="row">
          <div className="col-12 col-md-6 col-lg-4">
            <div className="versandarten_card">
              <div className="versandarten_card_header">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50px"
                  height="52px"
                >
                  <path
                    fillRule="evenodd"
                    fill="rgb(217, 194, 108)"
                    d="M48.775,40.538 L25.328,51.850 C25.224,51.900 25.112,51.926 24.999,51.926 C24.887,51.926 24.774,51.900 24.671,51.850 L1.224,40.538 C0.962,40.411 0.796,40.148 0.796,39.857 L0.796,12.385 C0.796,12.95 0.962,11.830 1.224,11.705 L24.671,0.392 C24.878,0.292 25.120,0.292 25.328,0.392 L48.775,11.705 C49.36,11.830 49.202,12.95 49.202,12.385 L49.202,39.857 C49.202,40.148 49.36,40.411 48.775,40.538 ZM12.588,7.940 L34.254,18.394 L38.693,16.251 L17.18,5.794 L12.588,7.940 ZM35.54,19.685 L35.54,27.603 L39.200,25.602 L39.200,17.685 L35.54,19.685 ZM24.999,1.912 L18.726,4.940 L40.286,15.340 C40.332,15.362 40.374,15.391 40.414,15.421 L46.706,12.385 L24.999,1.912 ZM47.690,13.589 L40.713,16.956 L40.713,26.76 C40.713,26.368 40.547,26.632 40.286,26.758 L34.626,29.488 C34.522,29.538 34.409,29.563 34.297,29.563 C34.157,29.563 34.18,29.524 33.895,29.448 C33.675,29.310 33.541,29.68 33.541,28.808 L33.541,19.736 C33.537,19.731 33.534,19.727 33.530,19.721 L10.807,8.760 L3.293,12.385 L19.669,20.286 C20.45,20.467 20.203,20.920 20.22,21.297 C19.891,21.566 19.621,21.723 19.340,21.723 C19.230,21.723 19.118,21.699 19.12,21.648 L2.309,13.589 L2.309,39.383 L24.243,49.966 L24.243,24.172 L22.244,23.208 C21.868,23.26 21.710,22.573 21.892,22.198 C22.74,21.822 22.526,21.663 22.902,21.845 L24.999,22.858 L30.330,20.286 C30.706,20.105 31.158,20.262 31.340,20.638 C31.522,21.14 31.364,21.466 30.988,21.648 L25.756,24.172 L25.756,49.966 L47.690,39.383 L47.690,13.589 ZM11.389,35.828 C11.279,35.828 11.167,35.804 11.61,35.753 L4.458,32.567 C4.82,32.385 3.924,31.934 4.106,31.558 C4.287,31.181 4.739,31.23 5.116,31.205 L11.718,34.391 C12.95,34.573 12.252,35.24 12.71,35.400 C11.940,35.671 11.670,35.828 11.389,35.828 ZM5.111,34.791 L8.552,36.451 C8.928,36.633 9.86,37.84 8.904,37.460 C8.774,37.730 8.503,37.887 8.222,37.887 C8.112,37.887 8.0,37.864 7.894,37.812 L4.453,36.152 C4.77,35.971 3.919,35.519 4.101,35.143 C4.283,34.767 4.735,34.610 5.111,34.791 Z"
                  />
                </svg>
                <p>Eigenes Versandmaterial</p>
              </div>
              <div className="versandarten_card_img">
                <Image src={VersandDelivery} alt="" />
              </div>
              <div className="versandarten_card_body_card">
                <p className="versandarten_card_body_para1">
                  Wenn Sie bereits Versandmaterial (Karton) vorliegen haben,
                  dann können Sie alle benötigten Unterlagen direkt online
                  ausdrucken und sofort versenden.
                </p>
                <p className="versandarten_card_body_para2">
                  Abwicklungsdauer: 2-4 Tage Sendung versichert bis zu 1.000€
                </p>
              </div>
              <div className="d-flex justify-content-center align-items-center">
                <Button
                  btnText="Versandart auswählen"
                  borderRadius="30px"
                  margin="-25px 0px 0px 0px"
                  width="275px"
                />
              </div>
              <div className="versand_last_section">
                <div className="versand_last_section_step">
                  <div className="versand_last_section_circle ">
                    1.
                    <div className="versand_last_section_dashed_line"></div>
                  </div>
                  <div className="versand_last_section_text">
                    Auf den Folgeseiten geben Sie Ihre persönlichen Daten ein
                    und drucken den Paketschein sowie das Begleitschreiben aus.
                  </div>
                </div>
                <div className="versand_last_section_step">
                  <div className="versand_last_section_circle ">
                    2.
                    <div className="versand_last_section_dashed_line"></div>
                  </div>
                  <div className="versand_last_section_text">
                    Füllen Sie den Karton mit den zu verkaufenden Schmuckstücken
                    und geben diese bei der Deutschen Post kostenlos ab.
                  </div>
                </div>
                <div className="versand_last_section_step">
                  <div className="versand_last_section_circle ">3.</div>
                  <div className="versand_last_section_text">
                    Innerhalb von nur 48 Stunden nach Eingang erhalten Sie das
                    Ankaufsangebot. Bei Bestätigung erfolgt die direkte
                    Auszahlung.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <div className="versandarten2_card">
              <div className="versandarten_card_header">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="52px"
                  height="39px"
                >
                  <path
                    fillRule="evenodd"
                    fill="rgb(217, 194, 108)"
                    d="M0.30,0.887 L0.30,2.870 L0.30,36.127 L0.30,38.110 L51.969,38.110 L51.969,36.127 L51.969,2.870 L51.969,0.887 L0.30,0.887 ZM31.734,19.987 L27.20,24.724 C26.447,25.256 25.550,25.256 25.1,24.747 L20.264,19.987 L20.305,19.946 L3.187,2.619 L48.823,2.619 L31.693,19.947 L31.734,19.987 ZM17.796,19.960 L1.761,35.388 L1.761,3.851 L17.796,19.960 ZM19.17,21.187 L23.798,25.990 C24.412,26.563 25.200,26.850 25.991,26.850 C26.790,26.850 27.592,26.557 28.225,25.967 L32.983,21.187 L48.770,36.379 L3.220,36.379 L19.17,21.187 ZM34.203,19.961 L50.238,3.850 L50.238,35.388 L34.203,19.961 Z"
                  />
                </svg>
                <p className="versandarten_card_para2">
                  Versandtasche bestellen
                </p>
                <Button
                  btnText="Beliebteste Option"
                  fontSize="18px"
                  fontWeight="bold"
                  className="versandarten_card_header_btn"
                  border="1px solid #D9C26C"
                  borderRadius="30px"
                  backgroundColor="transparent"
                  color="#D9C26C"
                  margin="10px 0xp 0px 0px"
                  width="275px"
                />
              </div>
              <div className="versandarten_card_img">
                <Image src={VersandMoneyGold} alt="" />
              </div>
              <div className="versandarten_card_body_card">
                <p className="versandarten_card2_body_para1">
                  Bestellen Sie kostenlos Ihre persönliche Versandtasche. Sie
                  erhalten in wenigen Tagen alle benötigten Unterlagen per Post
                  zugeschickt.
                </p>
                <p className="versandarten_card2_body_para2">
                  Abwicklungsdauer: 4-5 Tage Sendung versichert bis zu 1.000€
                </p>
              </div>
              <div className="d-flex justify-content-center align-items-center">
                <Button
                  btnText="Versandart auswählen"
                  borderRadius="30px"
                  margin="-25px 0px 0px 0px"
                  width="275px"
                />
              </div>
              <div className="versand_last_section">
                <div className="versand_last_section2_step">
                  <div className="versand_last_section_circle ">
                    1.
                    <div className="versand_last_section_dashed_line"></div>
                  </div>
                  <div className="versand_last_section_text">
                    Füllen Sie das Bestellformular aus und Sie erhalten Ihre
                    persönlichen Versandunterlagen in wenigen Tagen kostenlos
                    zugeschickt.
                  </div>
                </div>
                <div className="versand_last_section2_step">
                  <div className="versand_last_section_circle ">
                    2.
                    <div className="versand_last_section_dashed_line"></div>
                  </div>
                  <div className="versand_last_section_text">
                    Füllen Sie die Versandtasche mit den zu verkaufenden
                    Schmuckstücken und geben diese bei der Deutschen Post
                    kostenlos ab.
                  </div>
                </div>
                <div className="versand_last_section2_step">
                  <div className="versand_last_section_circle ">3.</div>
                  <div className="versand_last_section_text">
                    Innerhalb von nur 48 Stunden nach Eingang erhalten Sie das
                    Ankaufsangebot. Bei Bestätigung erfolgt die direkte
                    Auszahlung.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <div className="versandarten3_card">
              <div className="versandarten_card_header">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="44px"
                  height="51px"
                >
                  <path
                    fillRule="evenodd"
                    fill="rgb(217, 194, 108)"
                    d="M40.338,50.859 L40.314,50.863 L40.291,50.869 C40.222,50.894 40.149,50.903 40.76,50.903 L3.923,50.903 C3.850,50.903 3.777,50.894 3.708,50.869 L3.685,50.863 L3.661,50.859 C1.806,50.573 0.408,48.940 0.408,47.63 L0.408,45.306 C0.408,43.660 1.456,42.199 3.15,41.669 L3.220,41.599 L3.220,31.846 C3.220,31.818 3.223,31.784 3.229,31.742 L3.231,31.728 L3.231,31.715 C3.309,30.304 3.838,28.922 4.721,27.825 C5.690,26.620 7.54,25.775 8.563,25.444 L17.116,23.569 L17.116,22.277 L16.989,22.188 C14.706,20.561 13.343,17.923 13.343,15.131 L13.343,8.745 C13.343,3.971 17.226,0.89 21.999,0.89 C26.773,0.89 30.656,3.971 30.656,8.745 L30.656,15.131 C30.656,17.923 29.293,20.561 27.10,22.188 L26.883,22.277 L26.883,23.569 L35.436,25.444 C36.945,25.775 38.309,26.620 39.278,27.825 C40.160,28.922 40.690,30.304 40.767,31.715 L40.768,31.728 L40.770,31.742 C40.776,31.784 40.779,31.818 40.779,31.846 L40.779,41.599 L40.983,41.669 C42.543,42.199 43.591,43.660 43.591,45.306 L43.591,47.63 C43.591,48.940 42.193,50.573 40.338,50.859 ZM1.814,45.306 L1.814,47.63 C1.814,48.406 2.906,49.497 4.249,49.497 L4.969,49.497 C5.555,49.497 6.32,49.22 6.32,48.436 L6.32,43.934 C6.32,43.347 5.555,42.871 4.969,42.871 L4.249,42.871 C2.906,42.871 1.814,43.963 1.814,45.306 ZM8.739,26.831 L8.344,26.961 C6.608,27.532 5.248,28.990 4.793,30.767 L4.697,31.144 L8.739,31.144 L8.739,26.831 ZM10.145,26.537 L10.145,31.144 L19.186,31.144 L17.451,24.933 L10.145,26.537 ZM17.882,32.549 L17.882,37.846 L26.117,37.846 L26.117,32.549 L17.882,32.549 ZM23.468,31.144 L25.477,24.29 L25.477,23.69 L25.69,23.225 C24.88,23.599 23.55,23.787 21.999,23.787 C20.944,23.787 19.911,23.599 18.930,23.225 L18.522,23.69 L18.522,23.575 L18.543,23.628 C18.551,23.650 18.558,23.673 18.565,23.694 L20.646,31.144 L23.468,31.144 ZM29.222,8.106 C28.897,4.399 25.724,1.495 21.999,1.495 C18.274,1.495 15.102,4.399 14.777,8.106 L14.748,8.434 L29.251,8.434 L29.222,8.106 ZM14.799,9.839 L14.993,10.266 C15.437,11.240 16.412,11.868 17.479,11.868 L26.520,11.868 C27.587,11.868 28.562,11.240 29.6,10.266 L29.200,9.839 L14.799,9.839 ZM29.250,15.131 L29.250,12.290 L28.783,12.596 C28.109,13.39 27.326,13.273 26.520,13.273 L17.479,13.273 C16.673,13.273 15.890,13.39 15.215,12.596 L14.749,12.290 L14.749,15.131 C14.749,19.129 18.1,22.382 21.999,22.382 C25.997,22.382 29.250,19.129 29.250,15.131 ZM33.854,26.537 L26.675,24.962 L24.929,31.144 L33.854,31.144 L33.854,26.537 ZM39.206,30.767 C38.751,28.990 37.391,27.532 35.655,26.961 L35.260,26.831 L35.260,31.144 L39.302,31.144 L39.206,30.767 ZM39.373,32.549 L27.523,32.549 L27.523,39.372 L16.476,39.372 L16.476,32.549 L4.626,32.549 L4.626,41.463 L4.969,41.463 C6.330,41.463 7.438,42.572 7.438,43.934 L7.438,48.436 C7.438,48.663 7.406,48.892 7.342,49.115 L7.233,49.497 L36.766,49.497 L36.657,49.115 C36.593,48.892 36.561,48.663 36.561,48.436 L36.561,43.934 C36.561,42.572 37.669,41.463 39.30,41.463 L39.373,41.463 L39.373,32.549 ZM42.185,45.306 C42.185,43.963 41.93,42.871 39.750,42.871 L39.30,42.871 C38.444,42.871 37.967,43.347 37.967,43.934 L37.967,48.436 C37.967,49.22 38.444,49.497 39.30,49.497 L39.750,49.497 C41.93,49.497 42.185,48.406 42.185,47.63 L42.185,45.306 ZM21.999,46.76 C21.815,46.76 21.634,46.1 21.502,45.870 C21.372,45.738 21.296,45.557 21.296,45.373 C21.296,45.187 21.372,45.7 21.502,44.876 C21.633,44.745 21.814,44.669 21.999,44.669 C22.185,44.669 22.366,44.745 22.496,44.876 C22.627,45.7 22.702,45.187 22.702,45.373 C22.702,45.557 22.627,45.739 22.496,45.870 C22.365,46.1 22.184,46.76 21.999,46.76 ZM17.995,46.75 L10.350,46.75 C9.962,46.75 9.647,45.760 9.647,45.373 C9.647,44.985 9.962,44.669 10.350,44.669 L17.995,44.669 C18.383,44.669 18.698,44.985 18.698,45.373 C18.698,45.760 18.383,46.75 17.995,46.75 ZM20.299,18.927 C20.166,18.794 20.93,18.618 20.93,18.430 C20.93,18.242 20.166,18.67 20.299,17.934 C20.432,17.801 20.608,17.727 20.796,17.727 C20.984,17.727 21.161,17.801 21.293,17.934 C21.481,18.122 21.732,18.226 21.999,18.226 C22.266,18.226 22.517,18.122 22.706,17.934 C22.838,17.801 23.15,17.727 23.203,17.727 C23.391,17.727 23.567,17.801 23.700,17.934 C23.833,18.67 23.906,18.242 23.906,18.430 C23.906,18.619 23.833,18.794 23.700,18.927 C23.246,19.382 22.642,19.632 21.999,19.632 C21.357,19.632 20.753,19.382 20.299,18.927 Z"
                  />
                </svg>
                <p>Wertsendung ab 1.000 €</p>
              </div>
              <div className="versandarten_card_img">
                <Image src={VersandDeliveryRecieved} alt="" />
              </div>
              <div className="versandarten_card_body_card">
                <p className="versandarten_card3_body_para1">
                  Bei einem Wert ab 1.000 Euro können Sie eine kostenlose
                  Abholung durch einen Sicherheitskurier mit einer Versicherung
                  bis max. 1,5 Millionen Euro buchen.
                </p>
                <p className="versandarten_card3_body_para2">
                  Abwicklungsdauer: 3-4 Tage Sendung versichert bis 1,5
                  Millionen
                </p>
              </div>
              <div className="d-flex justify-content-center align-items-center">
                <Button
                  btnText="Versandart auswählen"
                  borderRadius="30px"
                  margin="-25px 0px 0px 0px"
                  width="275px"
                />
              </div>
              <div className="versand_last_section">
                <div className="versand_last_section3_step">
                  <div className="versand_last_section_circle ">
                    1.
                    <div className="versand_last_section_dashed_line"></div>
                  </div>
                  <div className="versand_last_section_text">
                    Auf den Folgeseiten drucken Sie das Begleitschreiben aus und
                    bestimmen den Versicherungswert sowie das Abholdatum.
                  </div>
                </div>
                <div className="versand_last_section3_step">
                  <div className="versand_last_section_circle ">
                    2.
                    <div className="versand_last_section_dashed_line"></div>
                  </div>
                  <div className="versand_last_section_text">
                    Füllen Sie einen Karton mit den zu verkaufenden
                    Schmuckstücken und übergeben Sie diesen dem
                    Sicherheitskurier.
                  </div>
                </div>
                <div className="versand_last_section3_step">
                  <div className="versand_last_section_circle ">3.</div>
                  <div className="versand_last_section_text">
                    Innerhalb von nur 48 Stunden nach Eingang erhalten Sie das
                    Ankaufsangebot. Bei Bestätigung erfolgt die direkte
                    Auszahlung.
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

export default Versandarten;

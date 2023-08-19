import GoldCard from "@/components/shared/GoldCard";
import GoldCard2 from "@/components/shared/GoldCard2";
import Image from "next/image";
import BoxICon from "/public/assets/img/homepage/nur_noch_box_icon.png";
import DeliveryICon from "/public/assets/img/homepage/nur_noch_delivery_icon.png";
import PrintICon from "/public/assets/img/homepage/nur_noch_print_icon.png";

const page = () => {
  return (
    <section className="abgeschlossen_wertsendung_wrapper">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-12 col-lg-8">
            <h2 className="sind_unterwegs_heading">
              Ankauf abgeschlossen eigenes Versandmaterial
            </h2>
            <div className="abgeschlossen_wertsendung_box">
              <div className="abgeschlossen_wertsendung_box_card">
                <div className="abgeschlossen_wertsendung_box_card_black">
                  <h2 className="abgeschlossen_wertsendung_box_card_black_heading">
                    SCHRITT 1
                  </h2>
                  <Image src={PrintICon} alt="print" />
                </div>
                <div className="abgeschlossen_wertsendung_box_card_black_rightside">
                  <h2 className="abgeschlossen_wertsendung_box_card_black_heading2">
                    Begleitschreiben ausdrucken
                  </h2>
                  <p className="abgeschlossen_wertsendung_box_card_black_para1">
                    Hier finden Sie das Begleitschreiben
                  </p>
                  <p className="abgeschlossen_wertsendung_box_card_black_para2">
                    Drucken Sie das Begleitschreiben bitte aus und legen es
                    ausgefüllt in den Karton. Sie erhalten dieses auch an Ihre
                    E-Mail zugeschickt.
                  </p>
                </div>
              </div>
              <div className="abgeschlossen_wertsendung_box_card_black_triangle_down"></div>
            </div>
            <div className="abgeschlossen_wertsendung_box">
              <div className="abgeschlossen_wertsendung_box_card">
                <div className="abgeschlossen_wertsendung_box_card_black">
                  <h2 className="abgeschlossen_wertsendung_box_card_black_heading">
                    SCHRITT 2
                  </h2>
                  <Image src={BoxICon} alt="print" />
                </div>
                <div className="abgeschlossen_wertsendung_box_card_black_rightside">
                  <h2 className="abgeschlossen_wertsendung_box_card_black_heading2">
                    Edelmetalle verpacken
                  </h2>

                  <p className="abgeschlossen_wertsendung_box_card_black_para2">
                    Verpacken Sie die Edelmetalle sicher und legen Sie diese zum
                    Begleitschreiben in den Karton.
                  </p>
                </div>
              </div>
              <div className="abgeschlossen_wertsendung_box_card_black_triangle_down"></div>
            </div>
            <div className="abgeschlossen_wertsendung_box">
              <div className="abgeschlossen_wertsendung_box_card3">
                <div className="abgeschlossen_wertsendung_box_card_black">
                  <h2 className="abgeschlossen_wertsendung_box_card_black_heading">
                    SCHRITT 3
                  </h2>
                  <Image src={DeliveryICon} alt="print" />
                </div>
                <div className="abgeschlossen_wertsendung_box_card_black_rightside">
                  <h2 className="abgeschlossen_wertsendung_box_card_black_heading2">
                    Paketschein ausdrucken
                  </h2>
                  <p className="abgeschlossen_wertsendung_box_card_black_para1">
                    Hier finden Sie den DHL Paketschein
                  </p>
                  <p className="abgeschlossen_wertsendung_box_card3_black_para2">
                    Den Paketschein ausdrucken und auf Ihr Paket kleben und
                    dieses einfach bei der Deutschen Post kostenlos abgeben. Sie
                    erhalten ebenfalls per E-Mail den Link zum Paketschein
                    zugeschickt.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-12 col-lg-4 gold_and_etrustedshpw_wrapper">
            <div className="abgeschlossen_wertsendung_rightside">
              <GoldCard2 />
              <div className="abgeschlossen_wertsendung_goldcard">
                <GoldCard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;

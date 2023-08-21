"use client";
import EtrusredShop from "@/components/shared/EtrusredShop";
import GoldCard from "@/components/shared/GoldCard";
import { PriceValueForm2 } from "@/components/shared/PriceValueForm2";
import Breadcrumbs from "@/components/shared/breadcrumb/BreadcrumbsComponent";

const page = () => {
  return (
    <section className="eigenes_versandmaterial_wrapper">
      <div className="container">
        <Breadcrumbs />
        <div className="row">
          <div className="col-12 col-md-12 col-lg-8">
            <h2 className="eigenes_versandmaterial_heading">
              Versandtasche bestellen
            </h2>
            <p className="eigenes_versandmaterial_para">
              Lassen Sie sich jetzt kostenlos Ihre persönliche Versandtasche mit
              allen Unterlagen innerhalb von 2 Tagen unverbindlich zusenden.
            </p>
            <div className="eigenes_versandmaterial_service">
              <h3 className="eigenes_versandmaterial_h3">
                Unser Service - Ihre Sicherheiten
              </h3>
              <ul>
                <li>
                  <strong>kostenloser Rückversand ohne Risiko:</strong> Wenn
                  Ihnen unser Angebot nicht zusagt, bekommen Sie kostenlos ihre
                  Edelmetalle zurückgeschickt.
                </li>
                <li>keine versteckten Gebühren oder Abzüge</li>
                <li>
                  Die Versandtasche ist automatisch bis zu 1000€ versichert!
                </li>
              </ul>
            </div>
            <div>
              <PriceValueForm2
                topHeading="Versandtasche anfordern"
                bestellen={true}
              />
              <p className="eigenes_versandmaterial_note">
                * Um den Ankauf abzuschliessen benötigen wir eine gültige
                E-Mail-Adresse oder Telefonnummer, sodass wir Sie kontaktieren
                können. Mit klick auf "Paketschein kostenlos anfordern" stimme
                ich den AGB zu und habe die Datenschutzerklärung zur Kenntnis
                genommen.
              </p>
            </div>
          </div>
          <div className="col-12 col-md-12 col-lg-4 gold_and_etrustedshpw_wrapper">
            <GoldCard />
            <EtrusredShop />
          </div>
        </div>
      </div>
    </section>
  );
};
export default page;

import Image from "next/image";
import FooterLogo from "/public/assets/img/footer-logo.png";

const Footer = () => {
  return (
    <footer className="footer_section">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <Image className="mb-2" src={FooterLogo} alt="footer-logo" />
          </div>
        </div>
        <div className="row">
          <div className="col-6 col-md-6 col-lg-3">
            <div className="color-gold">Service</div>
            <div>
              <a href="#" className="text-white">
                GoldanKauf Lexikon
              </a>
            </div>
            <div>
              <a href="#" className="text-white">
                Städteankauf
              </a>
            </div>
            <div>
              <a href="#" className="text-white">
                Edelmetall Charts
              </a>
            </div>
            <div>
              <a href="#" className="text-white">
                Gold als Geldanlage
              </a>
            </div>
            <div>
              <a href="#" className="text-white">
                Werbebanner
              </a>
            </div>
            <div>
              <a href="#" className="text-white">
                Preise
              </a>
            </div>
            <div>
              <a href="#" className="text-white">
                Goldmünzen
              </a>
            </div>
          </div>
          <div className="col-6 col-md-6 col-lg-3">
            <div className="color-gold">Sicherheit</div>
            <div>
              <a href="#" className="text-white">
                Auszeichnungen
              </a>
            </div>
            <div>
              <a href="#" className="text-white">
                Videos über MoneyGold
              </a>
            </div>
            <div>
              <a href="#" className="text-white">
                Gold-zurück-Garantie
              </a>
            </div>
            <div>
              <a href="#" className="text-white">
                Verkaufsanleitung
              </a>
            </div>
            <div>
              <a href="#" className="text-white">
                Häufige Fragen
              </a>
            </div>
          </div>
          <div className="col-6 col-md-6 col-lg-3">
            <div className="color-gold">Goldankauf</div>
            <div>
              <a href="#" className="text-white">
                Goldankauf Hamburg
              </a>
            </div>
            <div>
              <a href="#" className="text-white">
                Goldankauf Berlin
              </a>
            </div>
            <div>
              <a href="#" className="text-white">
                Goldankauf München
              </a>
            </div>
            <div>
              <a href="#" className="text-white">
                Goldankauf Stuttgart
              </a>
            </div>
            <div>
              <a href="#" className="text-white">
                Goldankauf Frankfurt
              </a>
            </div>
            <div>
              <a href="#" className="text-white">
                Goldankauf Köln
              </a>
            </div>
            <div>
              <a href="#" className="text-white">
                Goldankauf Düsseldorf
              </a>
            </div>
          </div>
          <div className="col-6 col-md-6 col-lg-3">
            <div className="color-gold">Über Moneygold</div>
            <div>
              <a href="#" className="text-white">
                Kontakt
              </a>
            </div>
            <div>
              <a href="#" className="text-white">
                Impressum
              </a>
            </div>
            <div>
              <a href="#" className="text-white">
                AGB
              </a>
            </div>
            <div>
              <a href="#" className="text-white">
                Datenschutz
              </a>
            </div>
            <div>
              <a href="#" className="text-white">
                Blog
              </a>
            </div>
            <div className="color-gold">Informationen</div>
            <div>
              <a href="#" className="text-white">
                Gold
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

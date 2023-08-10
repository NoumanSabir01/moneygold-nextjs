import Image from "next/image";
import Link from "next/link";
import PhoneSvg from "./PhoneSvg";
import BurgerIcon from "/public/assets/img/burger-icon.png";
import EkomiVektor from "/public/assets/img/ekomi-vektor.png";
import Logo from "/public/assets/img/logo.png";
import NtvVektor from "/public/assets/img/ntv_vektor.png";
import ProvenExpert from "/public/assets/img/proven-expert.png";
import TrustedShops from "/public/assets/img/trusted-shops.png";

const Header = () => {
  return (
    <header className="gold-header">
      <div className="container">
        <div className="row py-2 align-items-center header-top-wrapper">
          <div className="col-md-4 col-lg-4 col-5 d-flex align-items-center">
            <Link href="/" className="navbar-brand">
              <Image className="Image-fluid" src={Logo} alt="Money Gold Logo" />
            </Link>
          </div>
          <div className="col-md-5 col-lg-4 col-4 d-flex align-items-center justify-content-center gap-md-4 header-imgs">
            <Image
              className="Image-fluid d-none d-lg-block me-1"
              src={NtvVektor}
              alt=""
              width="65"
              height="67"
            />
            <Image
              className="Image-fluid m-icon me-1"
              src={EkomiVektor}
              alt=""
              width="66"
              height="66"
            />
            <Image
              className="Image-fluid m-icon me-1"
              src={TrustedShops}
              alt=""
              width="66"
              height="66"
            />
            <Image
              className="Image-fluid d-none d-md-block me-1 proven-expert-Image"
              src={ProvenExpert}
              alt=""
              width="87"
              height="68"
            />
          </div>

          <div className="col-md-6 col-lg-4 text-end d-none d-lg-block">
            <p className="mb-0">
              SUPPORT |<span className="fnt-bld"> MO - DO 10 - 17 UHR</span>
            </p>
            <p className="fnt-bld mb-0">FR 10 - 15 UHR</p>
            <a
              href="tel:040 76118501"
              className="call-btn text-white position-relative"
            >
              <PhoneSvg />
              <div className="line"></div>
              <di className="fnt-bld">040 76118501</di>
            </a>
          </div>
          <div className="col-2 col-md-3 d-block d-lg-none text-md-end">
            <button
              className="navbar-toggler collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarText"
              aria-controls="navbarText"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon">
                Menü
                <Image src={BurgerIcon} width={18} height={20} />
              </span>
            </button>
          </div>
        </div>
      </div>
      <div className="d-lg-none mob-navigation">
        <ul className="container d-flex justify-content-around mb-2 mb-lg-0 w-100">
          <li className="nav-item">
            <Link href="/" className="nav-link active">
              SO FUNKTIONIERT´S
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/calculator" className="nav-link">
              GOLDRECHNER
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/kaufen" className="nav-link">
              WIR KAUFEN
            </Link>
          </li>
        </ul>
      </div>
      <nav className="navbar navbar-expand-lg py-0 py-lg-2">
        <div className="container">
          <div className="navbar-collapse collapse" id="navbarText">
            <ul className="navbar-nav mb-2 mb-lg-0 w-100 justify-content-evenly">
              <li className="nav-item">
                <Link className="nav-link active" href="/">
                  SO FUNKTIONIERT´S
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/calculator">
                  GOLDRECHNER
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="#">
                  WIR KAUFEN
                </Link>
              </li>

              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="true"
                >
                  VERSANDARTEN
                </Link>
                <ul className="dropdown-menu bg-dark sh">
                  <li>
                    <Link className="dropdown-item" href="#">
                      SUBMENU1
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">
                      SUBMENU2
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">
                      SUBMENU3
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="true"
                >
                  SICHERHEIT
                </Link>
                <ul className="dropdown-menu bg-dark sh">
                  <li>
                    <Link className="dropdown-item" href="#">
                      SUBMENU1
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">
                      SUBMENU2
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">
                      SUBMENU3
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

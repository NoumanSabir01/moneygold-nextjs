"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import PhoneSvg from "./PhoneSvg";
import BurgerIcon from "/public/assets/img/burger-icon.png";
import EkomiVektor from "/public/assets/img/ekomi-vektor.png";
import Logo from "/public/assets/img/logo.png";
import NtvVektor from "/public/assets/img/ntv_vektor.png";
import ProvenExpert from "/public/assets/img/proven-expert.png";
import TrustedShops from "/public/assets/img/trusted-shops.png";

const Header = () => {
  const [selectedNavItem, setSelectedNavItem] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDropdown2Open, setIsDropdown2Open] = useState(false);
  const [activeDropdownItem, setActiveDropdownItem] = useState("");
  const [activeDropdown2Item, setActiveDropdown2Item] = useState("");
  const router = useRouter();
  useEffect(() => {
    const currentPath = router.pathname;
    if (currentPath === "/") {
      setSelectedNavItem("home");
    } else if (currentPath === "/calculator") {
      setSelectedNavItem("calculator");
    } else if (currentPath === "/wir-kaufen") {
      setSelectedNavItem("wir-kaufen");
    } else if (currentPath === "/dropdown") {
      setSelectedNavItem("dropdown");
      if (currentPath === "/eigenes-versandmaterial") {
        setSelectedNavItem("eigenes-versandmaterial");
        setActiveDropdownItem("eigenes-versandmaterial");
      } else if (currentPath === "/sind-unterwegs") {
        setSelectedNavItem("sind-unterwegs");
        setActiveDropdownItem("sind-unterwegs");
      } else if (currentPath === "/versandtasche-bestellen") {
        setSelectedNavItem("versandtasche-bestellen");
        setActiveDropdownItem("versandtasche-bestellen");
      }
    } else if (currentPath === "/dropdown2") {
      setSelectedNavItem("dropdow2");
      if (currentPath === "/submenu1") {
        setSelectedNavItem("submenu1");
        setActiveDropdownItem("submenu1l");
      } else if (currentPath === "/submenu2") {
        setSelectedNavItem("submenu2");
        setActiveDropdownItem("submenu2");
      } else if (currentPath === "/submenu3") {
        setSelectedNavItem("submenu3");
        setActiveDropdownItem("submenu3");
      }
    } else {
      setSelectedNavItem("");
    }
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        event.target.closest(".dropdown-menu") === null &&
        event.target.closest(".dropdown-toggle") === null
      ) {
        setIsDropdownOpen(false);
        setIsDropdown2Open(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <header className="gold-header">
      <div className="container">
        <div className="row py-2 align-items-center header-top-wrapper">
          <div className="col-md-4 col-lg-4 col-5 d-flex align-items-center">
            <Link
              className={`navbar-brand ${
                selectedNavItem === "home" ? "active" : ""
              }`}
              onClick={() => setSelectedNavItem("home")}
              href="/"
              passHref
            >
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
              <span className="fnt-bld">040 76118501</span>
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
                <Link
                  className={`nav-link ${
                    selectedNavItem === "home" ? "active" : ""
                  }`}
                  onClick={() => setSelectedNavItem("home")}
                  href="/"
                  passHref
                >
                  SO FUNKTIONIERT´S
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    selectedNavItem === "calculator" ? "active" : ""
                  }`}
                  onClick={() => setSelectedNavItem("calculator")}
                  href="/calculator"
                  passHref
                >
                  GOLDRECHNER
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    selectedNavItem === "wir-kaufen" ? "active" : ""
                  }`}
                  onClick={() => setSelectedNavItem("wir-kaufen")}
                  href="/wir-kaufen"
                  passHref
                >
                  WIR KAUFEN
                </Link>
              </li>

              <li className="nav-item dropdown">
                <Link
                  className={`nav-link dropdown-toggle ${
                    selectedNavItem === "dropdown" ? "active" : ""
                  }`}
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded={isDropdownOpen}
                  onClick={() => {
                    setIsDropdownOpen(!isDropdownOpen);
                  }}
                >
                  VERSANDARTEN
                </Link>
                <ul
                  className={`dropdown-menu bg-dark sh ${
                    isDropdownOpen ? "show" : ""
                  }`}
                >
                  <li>
                    <Link
                      className={`nav-link dropdown-item ${
                        activeDropdownItem === "versandtasche-bestellen"
                          ? "active"
                          : ""
                      }`}
                      onClick={() => {
                        setActiveDropdownItem("versandtasche-bestellen");
                        setIsDropdownOpen(false); // Close the dropdown
                        setSelectedNavItem("versandtasche-bestellen");
                      }}
                      href="/versandtasche-bestellen"
                      passHref
                    >
                      Versandtasche Bestellen
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={`nav-link dropdown-item ${
                        activeDropdownItem === "eigenes-versandmaterial"
                          ? "active"
                          : ""
                      }`}
                      onClick={() => {
                        setActiveDropdownItem("eigenes-versandmaterial");
                        setIsDropdownOpen(false); // Close the dropdown
                        setSelectedNavItem("eigenes-versandmaterial");
                      }}
                      href="/eigenes-versandmaterial"
                      passHref
                    >
                      Eigenes Versandmaterial
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={`nav-link dropdown-item ${
                        activeDropdownItem === "sind-unterwegs" ? "active" : ""
                      }`}
                      onClick={() => {
                        setActiveDropdownItem("sind-unterwegs");
                        setIsDropdownOpen(false); // Close the dropdown
                        setSelectedNavItem("sind-unterwegs");
                      }}
                      href="/sind-unterwegs"
                      passHref
                    >
                      Sind Unterwegs
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown drodown2">
                <Link
                  className={`nav-link dropdown-toggle ${
                    selectedNavItem === "dropdown2" ? "active" : ""
                  }`}
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded={isDropdown2Open}
                  onClick={() => {
                    setIsDropdown2Open(!isDropdown2Open);
                  }}
                >
                  SICHERHEIT
                </Link>
                <ul
                  className={`dropdown-menu bg-dark sh ${
                    isDropdown2Open ? "show" : ""
                  }`}
                >
                  <li>
                    <Link
                      className={`dropdown-item ${
                        setSelectedNavItem === "submenu1" ? "active" : ""
                      }`}
                      href="#"
                      passHref
                      onClick={() => {
                        setActiveDropdownItem("submenu1");
                        setIsDropdownOpen(false); // Close the dropdown
                        setSelectedNavItem("submenu1");
                      }}
                    >
                      SUBMENU1
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={`dropdown-item ${
                        setSelectedNavItem === "submenu2" ? "active" : ""
                      }`}
                      href="#"
                      passHref
                      onClick={() => {
                        setActiveDropdownItem("submenu2");
                        setIsDropdownOpen(false); // Close the dropdown
                        setSelectedNavItem("submenu2");
                      }}
                    >
                      SUBMENU2
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={`dropdown-item ${
                        setSelectedNavItem === "submenu3" ? "active" : ""
                      }`}
                      href="#"
                      passHref
                      onClick={() => {
                        setActiveDropdownItem("submenu3");
                        setIsDropdownOpen(false); // Close the dropdown
                        setSelectedNavItem("submenu3");
                      }}
                    >
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

import React, { useState, useEffect } from "react";
import { Header, Nav, MobileNavToggle, Topbar } from "../Navbar/navbar-style";
import logito from "../../assets/logito.png";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Topbar id="topbar" className={`d-flex align-items-center fixed-top ${scrolled ? 'topbar-scrolled' : ''}`}>
        <div className="container-fluid container-xl d-flex align-items-center justify-content-center justify-content-lg-start">
          <i className="bi bi-phone d-flex align-items-center">
            <span>+1 5589 55488 55</span>
          </i>
          <i className="bi bi-clock ms-4 d-none d-lg-flex align-items-center">
            <span>Lunes a Viernes: 09:00 AM - 15:00PM / 16:00 - 20:00 PM</span>
          </i>
        </div>
      </Topbar>
      <Header id="header" className={`fixed-top d-flex align-items-center ${scrolled ? 'header-scrolled' : ''}`}>
        <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
          <div className="logo me-auto">
            <h1>
              <a href="/">
                <img src={logito} alt="logo" /> Delicious
              </a>
            </h1>
          </div>

          <Nav id="navbar" className="navbar order-last order-lg-0">
          <ul>
              <li>
                <a className="nav-link scrollto " href="/">
                 Inicio
                </a>
              </li>
              <li>
                <a className="nav-link scrollto" href="#menu">
                  Menu
                </a>
              </li>
              <li className="dropdown">
                <a href="#" className="nav-link scrollto">
                <span>Nuestros Servicios</span> <i className="bi bi-chevron-down"></i>
                </a>
                <ul>
                  <li>
                      <a href="Reserva">Reservas</a>
                  </li>
                  <li>
                    <a href="/Productos">Productos</a>
                  </li>
                  <li>
                    <a href="/Consumiciones">Consumiciones</a>
                  </li>
                  <li className="dropdown">
                    <a href="#">
                      <span>Deep Drop Down</span>{" "}
                      <i className="bi bi-chevron-right"></i>
                    </a>
                    <ul>
                      <li>
                        <a href="#">Deep Drop Down 1</a>
                      </li>
                      <li>
                        <a href="#">Deep Drop Down 2</a>
                      </li>
                      <li>
                        <a href="#">Deep Drop Down 3</a>
                      </li>
                      <li>
                        <a href="#">Deep Drop Down 4</a>
                      </li>
                      <li>
                        <a href="#">Deep Drop Down 5</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">Drop Down 2</a>
                  </li>
                  <li>
                    <a href="#">Drop Down 3</a>
                  </li>
                  <li>
                    <a href="#">Drop Down 4</a>
                  </li>
                </ul>
              </li>
            </ul>
            <MobileNavToggle className="bi bi-list mobile-nav-toggle"></MobileNavToggle>
          </Nav>

          <a href="/Login" className="book-a-table-btn scrollto">
            Inicio Sesión
          </a>
        </div>
      </Header>
    </>
  );
}

export default Navbar;
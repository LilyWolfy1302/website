import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Header.module.css";
import logo from "../assets/logo.jpg";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navList = [
    { name: "Hækkeklipning", href: "#haek" },
    { name: "Japanske beskæringskunst", href: "#beskaering" },
    { name: "Beskæring & Fældning", href: "#grass" },
    { name: "Tagrenderensning", href: "#haek" },
    { name: "Lugning", href: "#haek" },
    { name: "Græsslåning", href: "#haek" },
  ];

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* Logo */}
        <div className={styles.logo}>
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className={styles.nav}>
          <div className={styles.dropdown}>
            <Link to="/services" className={styles.navLink}>
              JEG TILBYDER
            </Link>

            <div className={styles.dropdownMenu}>
              {navList.map((item, index) => (
                <Link key={index} to={`/services${item.href}`}>
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          <Link to="/about" className={styles.navLink}>
            OM MIG
          </Link>

          <Link to="/contact" className={styles.contactBtn}>
            KONTAKT MIG
          </Link>
        </nav>

        {/* Mobile Hamburger */}
        <button
          className={styles.menuBtn}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className={styles.mobileMenu}>
          <Link to="/services" onClick={() => setMenuOpen(false)}>JEG TILBYDER</Link>
          {navList.map((item, index) => (
            <Link key={index} to={`/services${item.href}`} onClick={() => setMenuOpen(false)}>
              └ {item.name}
            </Link>
          ))}
          <Link to="/about" onClick={() => setMenuOpen(false)}>OM MIG</Link>
          <Link to="/contact" className={styles.contactBtn} onClick={() => setMenuOpen(false)}>
            KONTAKT MIG
          </Link>
        </div>
      )}
    </header>
  );
}

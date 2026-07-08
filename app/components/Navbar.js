"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className={styles.navbar}>
      <div className={`container ${styles.container}`}>
        {/* Logo */}
        <a href="#" className={styles.logoWrapper} onClick={closeMenu}>
          <Image
            src="/assets/brand.png"
            alt="Marques & Associados"
            width={32}
            height={32}
            style={{ objectFit: "contain" }}
          />
          <span className={styles.logoText}>
            Kleber Freitas<span> Advocacia</span>
          </span>
        </a>
 
        {/* Navigation Links */}
        <ul className={`${styles.navLinks} ${isOpen ? styles.open : ""}`}>
          <li>
            <a href="#sobre" className={styles.navLink} onClick={closeMenu}>
              Sobre
            </a>
          </li>
          <li>
            <a href="#areas" className={styles.navLink} onClick={closeMenu}>
              Áreas
            </a>
          </li>
          <li>
            <a href="#insights" className={styles.navLink} onClick={closeMenu}>
              Insights
            </a>
          </li>
          <li>
            <a href="#escritorios" className={styles.navLink} onClick={closeMenu}>
              Escritórios
            </a>
          </li>
          <li>
            <a href="#contato" className={styles.navLink} onClick={closeMenu}>
              Contato
            </a>
          </li>
          {isOpen && (
            <li style={{ width: "100%" }}>
              <a
                href="#contato"
                className={styles.ctaMobile}
                onClick={closeMenu}
              >
                Consultoria →
              </a>
            </li>
          )}
        </ul>

        {/* CTA Button Desktop */}
        <a href="#contato" className={styles.ctaButton}>
          Consultoria <span style={{ fontSize: "1rem" }}>→</span>
        </a>

        {/* Burger Button */}
        <button
          className={`${styles.burger} ${isOpen ? styles.open : ""}`}
          onClick={toggleMenu}
          aria-label="Abrir menu"
        >
          <span className={styles.burgerLine}></span>
          <span className={styles.burgerLine}></span>
          <span className={styles.burgerLine}></span>
        </button>
      </div>
    </nav>
  );
}

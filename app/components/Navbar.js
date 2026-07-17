"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

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
        <Link href={isHome ? "#" : "/"} className={styles.logoWrapper} onClick={closeMenu}>
          <Image
            src="/assets/brand.png"
            alt="Marques & Associados"
            width={58}
            height={58}
            style={{ objectFit: "contain" }}
          />
          <span className={styles.logoText}>
            Kleber Freitas<span> Advogados Associdados</span>
          </span>
        </Link>
 
        {/* Navigation Links */}
        <ul className={`${styles.navLinks} ${isOpen ? "open" : ""}`}>
          <li>
            <Link href={isHome ? "#sobre" : "/#sobre"} className={styles.navLink} onClick={closeMenu}>
              Sobre
            </Link>
          </li>
          <li>
            <Link href={isHome ? "#areas" : "/#areas"} className={styles.navLink} onClick={closeMenu}>
              Áreas
            </Link>
          </li>
          <li>
            <Link href={isHome ? "#insights" : "/#insights"} className={styles.navLink} onClick={closeMenu}>
              Insights
            </Link>
          </li>
          <li>
            <Link href={isHome ? "#escritorios" : "/#escritorios"} className={styles.navLink} onClick={closeMenu}>
              Escritórios
            </Link>
          </li>
          <li>
            <Link href={isHome ? "#contato" : "/#contato"} className={styles.navLink} onClick={closeMenu}>
              Contato
            </Link>
          </li>
          {isOpen && (
            <li style={{ width: "100%" }}>
              <a
                href="https://api.whatsapp.com/send/?phone=5575981300751&text&type=phone_number&app_absent=0"
                className={styles.ctaMobile}
                onClick={closeMenu}
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp 
              </a>
            </li>
          )}
        </ul>

        {/* CTA Button Desktop */}
        <a href="https://api.whatsapp.com/send/?phone=5575981300751&text&type=phone_number&app_absent=0" className={styles.ctaButton} target="_blank" rel="noopener noreferrer">
          WhatsApp <span style={{ fontSize: "1rem" }}></span>
        </a>

        {/* Burger Button */}
        <button
          className={`${styles.burger} ${isOpen ? "open" : ""}`}
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
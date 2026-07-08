import Image from "next/image";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={`${styles.footer} bg-texture-dark section-dark`}>
      <div className="container">
        {/* Top Row */}
        <div className={styles.topRow}>
          {/* Brand Info */}
          <div className={styles.brandCol}>
            <div className={styles.logoWrapper}>
              <Image
                src="/assets/brand.png"
                alt="Marques & Associados"
                width={32}
                height={32}
                style={{ objectFit: "contain" }}
              />
              <span className={styles.logoText}>
                Marques <span>& Associados</span>
              </span>
            </div>
            <p className={styles.brandDesc}>
              Advocacia full-service com sede em São Paulo e Rio de Janeiro.
              OAB/SP 12.345.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className={styles.colTitle}>Navegação</h4>
            <ul className={styles.linksList}>
              <li>
                <a href="#sobre" className={styles.link}>
                  Sobre
                </a>
              </li>
              <li>
                <a href="#areas" className={styles.link}>
                  Áreas
                </a>
              </li>
              <li>
                <a href="#insights" className={styles.link}>
                  Insights
                </a>
              </li>
              <li>
                <a href="#escritorios" className={styles.link}>
                  Escritórios
                </a>
              </li>
              <li>
                <a href="#contato" className={styles.link}>
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Contact details */}
          <div>
            <h4 className={styles.colTitle}>Contato</h4>
            <div className={styles.contactInfo}>
              <a href="mailto:contato@marquesadv.com.br">
                contato@marquesadv.com.br
              </a>
              <a href="tel:+551130001234">+55 (11) 3000-1234</a>
              <p>Av. Faria Lima, 3477 — SP</p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className={styles.divider}></div>

        {/* Bottom copyright row */}
        <div className={styles.bottomRow}>
          <p>© 2026 Marques & Associados. Todos os direitos reservados.</p>
          <div className={styles.bottomLinks}>
            <a href="#privacidade" className={styles.bottomLink}>
              Política de Privacidade
            </a>
            <a href="#termos" className={styles.bottomLink}>
              Termos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

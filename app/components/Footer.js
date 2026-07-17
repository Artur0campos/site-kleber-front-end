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
                Kleber Freitas <span>Advogados Associdados</span>
              </span>
            </div>
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
              <a href="mailto:kleber@kleberfreitasadvocacia.com.br">
                kleber@kleberfreitasadvocacia.com.br
              </a>
              <a  href="https://wa.me/5575981300751" target="_blank">(75) 98130-0751</a>
              <p>CEP: 44075-325 <br />R. Campos Sales, 91 — 1º Andar
Ponto Central, Feira de Santana — BA</p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className={styles.divider}></div>

        {/* Bottom copyright row */}
        <div className={styles.bottomRow}>
          <p>© 2026 Kleber Freitas advogados associdados. Todos os direitos reservados.</p>
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

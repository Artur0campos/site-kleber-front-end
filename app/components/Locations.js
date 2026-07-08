import styles from "./Locations.module.css";

// SVG Icons for the contact information
const PinIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

export default function Locations() {
  return (
    <section id="escritorios" className={`${styles.locationsSection} bg-texture-dark section-dark`}>
      <div className="container">
        {/* Header */}
        <div className={styles.titleGroup}>
          <span className="section-subtitle">Onde Estamos</span>
          <h2 className={styles.title}>Dois escritórios, uma só exigência.</h2>
        </div>

        {/* Locations Grid */}
        <div className={styles.grid}>
          {/* Card Feira de Santana */}
          <div className={styles.card}>
            <div className={styles.mapContainer}>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3898.9002971650934!2d-38.94570279999999!3d-12.255025999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x714378e041a97ef%3A0x9d2c9c7ee39c683a!2sKleber%20Freitas%20Advogados%20Associados!5e0!3m2!1spt-BR!2sbr!4v1783429533737!5m2!1spt-BR!2sbr" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="strict-origin-when-cross-origin"
              ></iframe>
            </div>
            <div className={styles.cardBody}>
              <h3 className={styles.cardTitle}>Feira de Santana</h3>
              <div className={styles.infoList}>
                <div className={styles.infoItem}>
                  <div className={styles.iconWrapper}><PinIcon /></div>
                  <p>
                    R. Campos Sales, 91 — 1º Andar<br />
                    Ponto Central, Feira de Santana — BA
                  </p>
                </div>
                <div className={styles.infoItem}>
                  <div className={styles.iconWrapper}><PhoneIcon /></div>
                  <p>+55 (75) 3000-1234</p>
                </div>
              </div>
            </div>
          </div>

          {/* Card Salvador */}
          <div className={styles.card}>
            <div className={styles.mapContainer}>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15551.380669040585!2d-38.45505616854387!3d-12.98175314713777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7161b1aeb5090c3%3A0xe38a4f2fa22a215b!2sAv.%20Tancredo%20Neves%2C%201221%20-%20913%20-%20Caminho%20das%20%C3%81rvores%2C%20Salvador%20-%20BA%2C%2041820-021!5e0!3m2!1spt-BR!2sbr!4v1783429608443!5m2!1spt-BR!2sbr" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="strict-origin-when-cross-origin"
              ></iframe>
            </div>
            <div className={styles.cardBody}>
              <h3 className={styles.cardTitle}>Salvador</h3>
              <div className={styles.infoList}>
                <div className={styles.infoItem}>
                  <div className={styles.iconWrapper}><PinIcon /></div>
                  <p>
                    Av. Tancredo Neves, 1221<br />
                    Ed. Catabas Tower, Sala 913 — Caminho das Árvores
                  </p>
                </div>
                <div className={styles.infoItem}>
                  <div className={styles.iconWrapper}><PhoneIcon /></div>
                  <p>+55 (71) 3500-5678</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
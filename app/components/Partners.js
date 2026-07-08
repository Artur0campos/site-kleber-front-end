import styles from "./Partners.module.css";

const PARTNERS = ["FIESP", "OAB/SP", "IBGC", "ABRADT", "AMCHAM", "CESA"];

export default function Partners() {
  return (
    <section className={`${styles.partnersSection} bg-texture-light`}>
      <div className="container">
        <h2 className={styles.title}>Parceiros e Instituições</h2>
        <div className={styles.grid}>
          {PARTNERS.map((partner, index) => (
            <div key={index} className={styles.logoItem}>
              {partner}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

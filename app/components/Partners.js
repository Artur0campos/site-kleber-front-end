import styles from "./Partners.module.css";

const PARTNERS = [
  {
    name: "CM Advocacia Militar",
    logo: "/assets/Cm.png",
    url: "https://cmadvocaciamilitar.com.br/",
    address: "R. da Mouraria, 28 - 1ª andar - Nazaré, Salvador - BA, 40240-900",
  },
  {
    name: "OAB/BA",
    logo: "/assets/oab.png",
    url: "https://www.oab-ba.org.br/"
  },
  {
    name: "MPBA",
    logo: "/assets/mpba.jpg",
    url: "https://www.mpba.mp.br/"
  },
  {
    name: "TJBA",
    logo: "/assets/tjba.png",
    url: "https://www.tjba.jus.br/portal/"
  },
];

export default function Partners() {
  return (
    <section className={`${styles.partnersSection} bg-texture-light`}>
      <div className="container">
        <h2 className={styles.title}>Parceiros e Instituições</h2>
        <div className={styles.grid}>
          {PARTNERS.map((partner, index) => {
            if (partner.url) {
              return (
                <a
                  key={index}
                  href={partner.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${styles.logoItem} ${styles.linkItem}`}
                  title={`${partner.name} - ${partner.address || ""}`}
                >
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className={styles.partnerLogo}
                  />
                  {partner.address && (
                    <span className={styles.addressTooltip}>
                      {partner.address}
                    </span>
                  )}
                </a>
              );
            }

            return (
              <div key={index} className={styles.logoItem} title={partner.name}>
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className={styles.partnerLogo}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
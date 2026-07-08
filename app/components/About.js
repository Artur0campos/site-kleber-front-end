import styles from "./About.module.css";

export default function About() {
  return (
    <section id="sobre" className={`${styles.aboutSection} bg-texture-light`}>
      <div className={`container ${styles.grid}`}>
        {/* Left Column: Headings */}
        <div className={styles.leftCol}>
          <span className="section-subtitle">sobre</span>
          <h2 className={styles.title}>O escritório.</h2>
        </div>

        {/* Right Column: Narrative and Pillars */}
        <div className={styles.rightCol}>
          <p className={styles.text}>
            A justiça é o princípio que preserva a ordem social e garante os direitos de cada cidadão. Nesse contexto, a advocacia exerce papel fundamental na defesa dessas garantias, pautada pelos princípios do Estado Democrático de Direito.

O escritório Kleber Freitas Advocacia atua com dedicação, ética e profissionalismo, oferecendo atendimento personalizado e buscando sempre as melhores soluções para cada cliente. Nossa atuação é fundamentada em constante atualização jurídica, tecnologia e compromisso com a excelência na prestação de serviços.

Com reputação construída sobre honestidade, perseverança e resultados, trabalhamos para defender os direitos de nossos clientes com eficiência, responsabilidade e respeito à justiça.
          </p>

          <div className={styles.valuesGrid}>
            <div className={styles.valueItem}>
              <div className={styles.valueDivider}></div>
              <h3 className={styles.valueTitle}>Ética</h3>
              <p className={styles.valueDesc}>
                Sigilo e integridade em cada relação.
              </p>
            </div>

            <div className={styles.valueItem}>
              <div className={styles.valueDivider}></div>
              <h3 className={styles.valueTitle}>Técnica</h3>
              <p className={styles.valueDesc}>
                Estudo doutrinário aliado à jurisprudência atual.
              </p>
            </div>

            <div className={styles.valueItem}>
              <div className={styles.valueDivider}></div>
              <h3 className={styles.valueTitle}>Resultado</h3>
              <p className={styles.valueDesc}>
                Estratégias mensuráveis e foco em desfecho.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

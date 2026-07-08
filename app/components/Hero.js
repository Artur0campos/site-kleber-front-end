import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      {/* Background and overlays */}
      <div className={styles.heroBackground}></div>
      <div className={styles.heroOverlay}></div>

      {/* Main hero body */}
      <div className={`container ${styles.container}`}>
        <div className={styles.heroContent}>
          <div className={styles.subtitleBadge}>Desde 2013</div>
          <h1 className={styles.title}>
            Assessoria jurídica. <br />
            <span className={styles.titleHighlight}>preventiva e empresarial</span> sob medida.
          </h1>
          <p className={styles.description}>
            Inscrito na Sessão Bahia da Ordem dos Advogados do Brasil, Kleber Freitas Advocacia oferece suporte e assessoria jurídica, preventiva e empresarial com soluções efetivas e conciliatórias, tanto na espera administrativa quanto nas judiciais.
          </p>
          <div className={styles.buttonGroup}>
            <a href="#contato" className="btn-primary">
              Agendar consulta <span>→</span>
            </a>
            <a href="#areas" className="btn-outline">
              Nossas áreas
            </a>
          </div>
        </div>
      </div>

    </section>
  );
}

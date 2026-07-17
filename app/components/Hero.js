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
          
          <div className={styles.subtitleBadge}>Desde 2012</div>
          
          {/* Bloco unificado: Imagem ao lado esquerdo do Título */}
          <div className={styles.titleFlexBlock}>
            <div className={styles.brandSideWrapper}>
              <img 
                src="/assets/brand.png" 
                alt="Logo Kleber Freitas Advocacia" 
                className={styles.brandSideImage} 
              />
            </div>
            
            <h1 className={styles.title}>
              Advocacia e <br />
              <span className={styles.titleHighlight}>Assessoria jurídica.</span>
            </h1>
          </div>

          <p className={styles.description}>
            Inscrito na Seção Bahia da Ordem dos Advogados do Brasil, Kleber Freitas Advogados Associados oferece suporte e assessoria jurídica, preventiva e empresarial com soluções efetivas e conciliatórias, tanto na esfera administrativa quanto nas judiciais.
          </p>
          
          <div className={styles.buttonGroup}>
            <a href="#contato" className="btn-primary">
              Agendar consulta <span>→</span>
            </a>

          </div>
        </div>
      </div>
    </section>
  );
}
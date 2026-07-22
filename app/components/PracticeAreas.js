import styles from "./PracticeAreas.module.css";

// SVG Icons as React components for clean inline rendering
const BalanceIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="3" x2="12" y2="21" />
    <line x1="2" y1="7" x2="22" y2="7" />
    <path d="M5 7c0 4 3 6 7 6s7-2 7-6" />
    <path d="M5 7c0-2.5 1-4 3-4s3 1.5 4 4" />
    <path d="M19 7c0-2.5-1-4-3-4s-3 1.5-4 4" />
    <path d="M9 17h6" />
  </svg>
);

const BuildingIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
    <line x1="9" y1="22" x2="9" y2="16" />
    <line x1="15" y1="22" x2="15" y2="16" />
    <line x1="9" y1="16" x2="15" y2="16" />
    <path d="M8 6h2" />
    <path d="M8 10h2" />
    <path d="M14 6h2" />
    <path d="M14 10h2" />
  </svg>
);

const UsersIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const ScaleIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 3v17" />
    <path d="M19 21H5" />
    <path d="M5 7h14" />
    <path d="m5 7-2 6c0 1.5 1 2 2 2s2-.5 2-2z" />
    <path d="m19 7-2 6c0 1.5 1 2 2 2s2-.5 2-2z" />
  </svg>
);

const TempleIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 22h20" />
    <path d="M4 22v-9" />
    <path d="M9 22v-9" />
    <path d="M15 22v-9" />
    <path d="M20 22v-9" />
    <path d="M12 2l10 5H2L12 2z" />
  </svg>
);

const HammerIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="m14 13-8.3 8.3a2 2 0 1 1-2.8-2.8L11.2 10" />
    <path d="m16 11 5-5a2 2 0 1 0-2.8-2.8L13 8.5" />
    <path d="m9.5 7.5 7 7" />
  </svg>
);

const ShieldIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);

/* Ícone Novo: Sacola de compras sofisticada para Direito do Consumidor */
const ShoppingBagIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
    <line x1="3" y1="6" x2="21" y2="6" />
    <path d="M16 10a4 4 0 0 1-8 0" />
  </svg>
);

const AREAS_DATA = [
  {
    icon: <BalanceIcon />,
    title: "Direito Civil",
    desc: "Contratos, família, sucessões, responsabilidade civil e disputas patrimoniais.",
  },
  {
    icon: <BuildingIcon />,
    title: "Direito Empresarial/comercial",
    desc: "Societário, M&A, governança corporativa e reestruturações.",
  },
  {
    icon: <UsersIcon />,
    title: "Direito Trabalhista",
    desc: "Consultoria preventiva, contencioso e compliance trabalhista.",
  },
  {
    icon: <ScaleIcon />,
    title: "Direito Administrativo",
    desc: "Consultiva, preventiva e contenciosa envolvendo a relação entre particulares, empresas e o Poder Público.",
  },
  {
    icon: <HammerIcon />,
    title: "Direito Penal",
    desc: "Defesa criminal estratégica em todas as instâncias.",
  },
  {
    icon: <TempleIcon />,
    title: "Direito Tributário",
    desc: "Planejamento fiscal estratégico, otimização de tributos e defesa rigorosa em litígios judiciais ou administrativos."
  },
  {
    icon: <ShieldIcon />,
    title: "Direito Militar",
    desc: "Suporte especializado para militares, abrangendo Sindicância, PDS, PAD, IPM, Fazenda Pública e Penal Militar."
  },
  {
    icon: <ShoppingBagIcon />,
    title: "Direito do Consumidor",
    desc: "Defesa de direitos nas relações de consumo, resolução de conflitos, práticas abusivas e responsabilidade civil de fornecedores."
  }
];

export default function PracticeAreas() {
  return (
    <section id="areas" className={`${styles.practiceSection} bg-texture-light`}>
      <div className="container">
        {/* Top Header */}
        <div className={styles.header}>
          <span className="section-subtitle">Áreas de Atuação</span>
          <h2 className={styles.title}>Especialidades para cada desafio.</h2>
          <p className={styles.text}>
            Equipes dedicadas e protocolos próprios garantem profundidade técnica
            em todas as frentes em que atuamos.
          </p>
        </div>

        {/* Content Grid: Photo + Areas */}
        <div className={styles.contentGrid}>
          {/* Left Column: Photo */}
          <div className={styles.imageWrapper}>
            <img 
              src="/assets/foto_kleber3.jpeg" 
              alt="Kleber Freitas em atuação" 
              className={styles.practiceImage}
            />
          </div>

          {/* Right Column: Grid */}
          <div className={styles.rightColGrid}>
            {AREAS_DATA.map((area, index) => (
              <div key={index} className={styles.gridItem}>
                <div className={styles.iconWrapper}>{area.icon}</div>
                <h3 className={styles.itemTitle}>{area.title}</h3>
                <p className={styles.itemDesc}>{area.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
import styles from "./SocialGrid.module.css";


const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397 0 11.93 0c3.166.001 6.141 1.233 8.377 3.469 2.235 2.237 3.465 5.212 3.466 8.377-.003 6.582-5.339 11.93-11.871 11.93-2.007-.001-3.982-.51-5.751-1.483L0 24zm6.59-4.817c1.661.985 3.29 1.488 4.743 1.49 5.31 0 9.638-4.307 9.64-9.6A9.52 9.52 0 0 0 18.2 4.358A9.522 9.522 0 0 0 11.43 1.3c-5.311 0-9.64 4.307-9.642 9.6-.001 1.632.443 3.218 1.288 4.599l-.97 3.547 3.652-.958zm12.366-5.417c-.33-.165-1.951-.963-2.251-1.072-.3-.109-.518-.165-.736.165-.218.329-.84 1.055-1.031 1.274-.19.218-.381.243-.711.079-.33-.165-1.393-.513-2.653-1.637-.98-.874-1.642-1.953-1.834-2.282-.192-.33-.02-.508.145-.671.149-.147.33-.384.495-.577.165-.191.22-.319.33-.534.11-.214.055-.403-.028-.567-.082-.164-.736-1.774-1.009-2.43-.267-.641-.54-.555-.736-.565-.19-.01-.408-.012-.627-.012-.218 0-.572.082-.872.411-.3.33-1.144 1.116-1.144 2.719 0 1.603 1.166 3.153 1.329 3.372.163.22 2.296 3.506 5.563 4.914.777.335 1.384.535 1.856.685.782.248 1.494.213 2.057.129.628-.094 1.952-.798 2.224-1.57.272-.771.272-1.434.191-1.571-.081-.137-.295-.219-.625-.384z"/>
  </svg>
);


const SOCIAL_CHANNELS = [
  {
    name: "Instagram",
    user: "@kleberfreitasadvocacia",
    icon: <InstagramIcon />,
    link: "https://www.instagram.com/kleberfreitasadvocacia?igsh=OGt3NmxoeWpzNXJ5",
  },
  {
    name: "Facebook",
    user: "Kleber Freitas ",
    icon: <FacebookIcon />,
    link: "https://www.facebook.com/kleberfreitasadvocacia",
  },
    {
    name: "Whatsapp",
    user: "Kleber Freitas Advocacia",
    icon: <WhatsAppIcon />,
    link: "https://api.whatsapp.com/send/?phone=5575988368663&text&type=phone_number&app_absent=0",
  },
];

export default function SocialGrid() {
  return (
    <section className={`${styles.socialSection} bg-texture-light`}>
      <div className="container">
        {/* Header Row */}
        <div className={styles.headerRow}>
          <div className={styles.titleGroup}>
            <span className="section-subtitle">Redes Sociais</span>
            <h2 className={styles.title}>Acompanhe nosso trabalho e fale conosco.</h2>
          </div>
        </div>

        {/* Social Grid */}
        <div className={styles.grid}>
          {SOCIAL_CHANNELS.map((channel, index) => (
            <a
              key={index}
              href={channel.link}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.card}
            >
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{channel.name}</h3>
                <span className={styles.cardUser}>{channel.user}</span>
              </div>
              <div className={styles.iconWrapper}>{channel.icon}</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

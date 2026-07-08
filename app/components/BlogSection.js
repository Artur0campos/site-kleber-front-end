import Image from "next/image";
import Link from "next/link";
import { getStrapiImageUrl } from "@/lib/strapi";
import styles from "./BlogSection.module.css";

// Mock posts para quando o Strapi não está disponível
const FALLBACK_POSTS = [
  {
    id: "mock-1",
    documentId: "mock-1",
    categoria: "EMPRESARIAL",
    data: "12 JUN 2026",
    titulo: "Reforma Tributária: o que muda para holdings familiares",
    subtitle: "Análise dos principais impactos da nova legislação no planejamento patrimonial e sucessório.",
    imagem: null,
  },
  {
    id: "mock-2",
    documentId: "mock-2",
    categoria: "TRABALHISTA",
    data: "28 MAI 2026",
    titulo: "Home office e o novo entendimento do TST sobre jornada",
    subtitle: "Decisões recentes redefinem os limites do controle de jornada no trabalho remoto.",
    imagem: null,
  },
  {
    id: "mock-3",
    documentId: "mock-3",
    categoria: "CIVIL",
    data: "10 MAI 2026",
    titulo: "Contratos inteligentes e validade jurídica no Brasil",
    subtitle: "Como tribunais brasileiros vêm tratando obrigações executadas via blockchain.",
    imagem: null,
  },
];

export default function BlogSection({ posts = [] }) {
  const hasApiPosts = posts && posts.length > 0;

  const displayPosts = hasApiPosts
    ? posts.slice(0, 3).map((post) => {
        const attrs = post.attributes || post;

        // Formata data do Strapi
        let postDate = "INSIGHT";
        if (attrs.publishedAt || attrs.createdAt) {
          const dateObj = new Date(attrs.publishedAt || attrs.createdAt);
          const months = [
            "JAN", "FEV", "MAR", "ABR", "MAI", "JUN",
            "JUL", "AGO", "SET", "OUT", "NOV", "DEZ"
          ];
          postDate = `${dateObj.getDate()} ${months[dateObj.getMonth()]} ${dateObj.getFullYear()}`;
        }

        return {
          id: post.id || Math.random().toString(),
          documentId: post.documentId || post.id,
          categoria: attrs.Categoria || "Geral",
          data: postDate,
          titulo: attrs.Titutlo || attrs.Titullo || "Sem título",
          subtitle: attrs.subtitle || "Confira este artigo sobre o tema.",
          imagem: getStrapiImageUrl(attrs.Imagem),
        };
      })
    : FALLBACK_POSTS;

  return (
    <section id="insights" className={`${styles.blogSection} bg-texture-light`}>
      <div className="container">
        {/* Section Header */}
        <div className={styles.headerRow}>
          <div className={styles.titleGroup}>
            <span className="section-subtitle">Insights </span>
            <h2 className={styles.title}>Análises recentes</h2>
          </div>
          <Link href="/blog" className={styles.viewAllLink}>
            Ver todos os artigos <span>→</span>
          </Link>
        </div>

        {/* Posts Grid */}
        <div className={styles.grid}>
          {displayPosts.map((post) => {
            const postHref = post.documentId && !post.documentId.startsWith("mock")
              ? `/blog/${post.documentId}`
              : "#insights";

            return (
              <Link
                key={post.id}
                href={postHref}
                className={styles.cardLink}
              >
                <article className={styles.card}>
                  {/* Imagem */}
                  <div className={styles.cardImageWrapper}>
                    {post.imagem ? (
                      <Image
                        src={post.imagem}
                        alt={post.titulo}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 992px) 50vw, 33vw"
                        className={styles.cardImage}
                      />
                    ) : (
                      <div className={styles.cardImagePlaceholder}>
                        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/>
                          <circle cx="12" cy="13" r="3"/>
                        </svg>
                      </div>
                    )}
                    <div className={styles.cardImageOverlay} />
                  </div>

                  {/* Conteúdo */}
                  <div className={styles.cardBody}>
                    <div className={styles.cardMeta}>
                      <span className={styles.cardCategory}>{post.categoria}</span>
                      <span className={styles.cardDate}>{post.data}</span>
                    </div>
                    <h3 className={styles.cardTitle}>{post.titulo}</h3>
                    <p className={styles.cardSubtitle}>{post.subtitle}</p>
                  </div>

                  {/* Footer */}
                  <div className={styles.cardFooter}>
                    <span className={styles.readMore}>
                      Ler artigo <span>→</span>
                    </span>
                  </div>
                </article>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import Link from "next/link";
import { getPosts, getStrapiImageUrl } from "@/lib/strapi";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styles from "./page.module.css";

export const metadata = {
  title: "Blog — Kleber Freitas Advocacia",
  description:
    "Artigos, análises e insights jurídicos da equipe Kleber Freitas Advocacia.",
};

export default async function BlogPage() {
  const posts = await getPosts();

  const displayPosts = posts.map((post) => {
    const attrs = post.attributes || post;

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
  });

  return (
    <>
      <Navbar />

      <main className={styles.blogPage}>
        <div className="container">
          {/* Header */}
          <div className={styles.pageHeader}>
            <span className="section-subtitle">Blog</span>
            <h1 className={styles.pageTitle}>Todos os artigos</h1>
            <p className={styles.pageDescription}>
              Análises, insights e atualizações sobre o cenário jurídico brasileiro.
            </p>
          </div>

          {/* Grid de Posts */}
          {displayPosts.length > 0 ? (
            <div className={styles.grid}>
              {displayPosts.map((post) => (
                <Link
                  key={post.id}
                  href={`/blog/${post.documentId}`}
                  className={styles.cardLink}
                >
                  <article className={styles.card}>
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

                    <div className={styles.cardBody}>
                      <div className={styles.cardMeta}>
                        <span className={styles.cardCategory}>{post.categoria}</span>
                        <span className={styles.cardDate}>{post.data}</span>
                      </div>
                      <h2 className={styles.cardTitle}>{post.titulo}</h2>
                      <p className={styles.cardSubtitle}>{post.subtitle}</p>
                    </div>

                    <div className={styles.cardFooter}>
                      <span className={styles.readMore}>
                        Ler artigo <span>→</span>
                      </span>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          ) : (
            <div className={styles.emptyState}>
              <p>Nenhum artigo publicado ainda.</p>
              <Link href="/" className={styles.backLink}>
                ← Voltar para o início
              </Link>
            </div>
          )}

          {/* Voltar */}
          <div className={styles.backWrapper}>
            <Link href="/#insights" className={styles.backLink}>
              ← Voltar para o início
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

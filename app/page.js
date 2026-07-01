import { getPosts } from "@/lib/strapi";
import PostCard from "./components/PostCard";
import styles from "./page.module.css";

export const metadata = {
  title: "Blog | Kleber",
  description:
    "Confira os últimos posts do nosso blog. Conteúdo atualizado diretamente do Strapi CMS.",
};

export default async function Home() {
  const posts = await getPosts();

  return (
    <>
      {/* Header */}
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <span className={styles.logo}>Kleber Blog</span>
          <span className={styles.headerTag}>Strapi + Next.js</span>
        </div>
      </header>

      {/* Hero */}
      <section className={styles.hero}>
        <h1 className={styles.heroTitle}>
          Últimos{" "}
          <span className={styles.heroTitleAccent}>Posts</span>
        </h1>
        <p className={styles.heroSubtitle}>
          Conteúdo gerenciado pelo Strapi CMS e renderizado com Next.js.
          Cada post é buscado em tempo real da API.
        </p>
      </section>

      {/* Posts Grid */}
      <main className={styles.postsSection}>
        {posts.length > 0 ? (
          <div className={styles.postsGrid}>
            {posts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <div className={styles.emptyState}>
            <div className={styles.emptyIcon}>📝</div>
            <h2 className={styles.emptyTitle}>Nenhum post encontrado</h2>
            <p className={styles.emptyText}>
              Verifique se o Strapi está rodando em{" "}
              <strong>http://localhost:1337</strong> e se existem posts
              cadastrados na collection &ldquo;Post&rdquo;.
            </p>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className={styles.footer}>
        <p>Feito com Next.js &amp; Strapi</p>
      </footer>
    </>
  );
}

import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPostByDocumentId, getStrapiImageUrl } from "@/lib/strapi";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import styles from "./page.module.css";

export async function generateMetadata({ params }) {
  const { documentId } = await params;
  const post = await getPostByDocumentId(documentId);

  if (!post) {
    return { title: "Post não encontrado — Kleber Freitas Advocacia" };
  }

  const attrs = post.attributes || post;
  const titulo = attrs.Titutlo || attrs.Titullo || "Sem título";
  const subtitle = attrs.subtitle || "Kleber Freitas Advocacia";

  return {
    title: `${titulo} — Kleber Freitas Advocacia`,
    description: subtitle,
  };
}

export default async function BlogPostPage({ params }) {
  const { documentId } = await params;
  const post = await getPostByDocumentId(documentId);

  if (!post) {
    notFound();
  }

  const attrs = post.attributes || post;
  const titulo = attrs.Titutlo || attrs.Titullo || "Sem título";
  const subtitle = attrs.subtitle || "";
  const categoria = attrs.Categoria || "Geral";
  const texto = attrs.Texto || "";
  const imageUrl = getStrapiImageUrl(attrs.Imagem);

  // Formata a data
  let formattedDate = "";
  if (attrs.publishedAt || attrs.createdAt) {
    const dateObj = new Date(attrs.publishedAt || attrs.createdAt);
    formattedDate = dateObj.toLocaleDateString("pt-BR", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  }

  return (
    <>
      <Navbar />

      <main className={styles.postPage}>
        {/* Hero com imagem de capa */}
        <div className={styles.heroWrapper}>
          {imageUrl ? (
            <Image
              src={imageUrl}
              alt={titulo}
              fill
              sizes="100vw"
              className={styles.heroImage}
              priority
            />
          ) : (
            <div className={styles.heroPlaceholder} />
          )}
          <div className={styles.heroOverlay} />
        </div>

        {/* Conteúdo do Post */}
        <article className={styles.article}>
          <div className={styles.articleHeader}>
            <div className={styles.metaRow}>
              <span className={styles.category}>{categoria}</span>
              {formattedDate && (
                <>
                  <span className={styles.metaDivider}>·</span>
                  <span className={styles.date}>{formattedDate}</span>
                </>
              )}
            </div>

            <h1 className={styles.postTitle}>{titulo}</h1>

            {subtitle && (
              <p className={styles.postSubtitle}>{subtitle}</p>
            )}
          </div>

          <div className={styles.articleDivider} />

          {/* Corpo do texto */}
          <div className={styles.articleBody}>
            {texto.split("\n").map((paragraph, index) =>
              paragraph.trim() ? (
                <p key={index}>{paragraph}</p>
              ) : (
                <br key={index} />
              )
            )}
          </div>

          {/* Voltar */}
          <div className={styles.backWrapper}>
            <Link href="/#insights" className={styles.backLink}>
              ← Voltar para Insights
            </Link>
          </div>
        </article>
      </main>

      <Footer />
    </>
  );
}

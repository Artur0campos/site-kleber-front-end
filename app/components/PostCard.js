import Image from "next/image";
import { getStrapiImageUrl } from "@/lib/strapi";
import styles from "../page.module.css";

export default function PostCard({ post }) {
  // Strapi v5: campos ficam diretamente no objeto data
  // Strapi v4: campos ficam em data.attributes
  const attrs = post.attributes || post;

  const titulo = attrs.Titutlo || attrs.Titullo || "Sem título";
  const categoria = attrs.Categoria || "Geral";
  const texto = attrs.Texto || "";
  const imageUrl = getStrapiImageUrl(attrs.Imagem);

  return (
    <article className={`${styles.card} ${styles.animateIn}`}>
      <div className={styles.cardImageWrapper}>
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={titulo}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className={styles.cardImage}
          />
        ) : (
          <div className={styles.cardImagePlaceholder}>
            <span>📷 Sem imagem</span>
          </div>
        )}
      </div>

      <div className={styles.cardBody}>
        <span className={styles.cardCategory}>{categoria}</span>
        <h2 className={styles.cardTitle}>{titulo}</h2>
        <p className={styles.cardText}>{texto}</p>
      </div>
    </article>
  );
}

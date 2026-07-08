const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";

/**
 * Busca os posts da API do Strapi.
 * Popula a relação de Imagem para obter a URL do arquivo.
 */
export async function getPosts() {
  try {
    const res = await fetch(
      `${STRAPI_URL}/api/posts?populate=Imagem`,
      {
        next: { revalidate: 60 }, // revalida o cache a cada 60 segundos
      }
    );

    if (!res.ok) {
      throw new Error(`Erro ao buscar posts: ${res.status} ${res.statusText}`);
    }

    const json = await res.json();
    return json.data || [];
  } catch (error) {
    console.error("Falha ao conectar com o Strapi:", error);
    return [];
  }
}

/**
 * Busca um post individual pela documentId do Strapi.
 * Popula a relação de Imagem para obter a URL do arquivo.
 */
export async function getPostByDocumentId(documentId) {
  try {
    const res = await fetch(
      `${STRAPI_URL}/api/posts/${documentId}?populate=Imagem`,
      {
        next: { revalidate: 60 },
      }
    );

    if (!res.ok) {
      throw new Error(`Erro ao buscar post: ${res.status} ${res.statusText}`);
    }

    const json = await res.json();
    return json.data || null;
  } catch (error) {
    console.error("Falha ao buscar post individual:", error);
    return null;
  }
}

/**
 * Retorna a URL completa de uma imagem do Strapi.
 */
export function getStrapiImageUrl(image) {
  if (!image) return null;

  // Strapi v5 retorna o objeto de imagem diretamente
  const imageData = image?.data?.attributes || image?.data || image;
  const url = imageData?.url;

  if (!url) return null;

  // Se a URL já é absoluta, retorna como está
  if (url.startsWith("http")) return url;

  // Caso contrário, adiciona o domínio do Strapi
  return `${STRAPI_URL}${url}`;
}

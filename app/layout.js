import "./globals.css";

export const metadata = {
  title: "Blog | Kleber",
  description: "Blog conectado ao Strapi CMS com Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}

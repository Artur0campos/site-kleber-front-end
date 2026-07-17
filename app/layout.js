import { Merriweather, Merriweather_Sans } from "next/font/google";
import "./globals.css";

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  variable: "--font-serif",
  display: "swap",
});

const merriweatherSans = Merriweather_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata = {
  title: "Kleber Freitas Advocacia",
  description:
    "Soluções jurídicas sob medida. Advocacia full-service com sede em Feira de Santana e Salvador.",
};

export default function RootLayout({ children }) {
  return (
    <html 
      lang="pt-BR" 
      style={{
        '--font-sans': merriweatherSans.style.fontFamily,
        '--font-serif': merriweather.style.fontFamily,
      }}
    >
      <body>{children}</body>
    </html>
  );
}
import { getPosts } from "@/lib/strapi";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CTAAction from "./components/CTAAction";
import About from "./components/About";
import BlogSection from "./components/BlogSection";
import PracticeAreas from "./components/PracticeAreas";
import Locations from "./components/Locations";
import Partners from "./components/Partners";
import SocialGrid from "./components/SocialGrid";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

export const metadata = {
  title: "Kleber Freitas Advocacia",
  description:
    "Defesa estratégica. Soluções jurídicas sob medida. Especialistas em Direito Civil, Empresarial, Trabalhista, Tributário e Penal.",
};

export default async function Home() {
  const posts = await getPosts();

  return (
    <>
      <Navbar />
      <Hero />
      <CTAAction />
      <About />
      <BlogSection posts={posts} />
      <PracticeAreas />
      <Locations />
      <Partners />
      <SocialGrid />
      <ContactForm />
      <Footer />
    </>
  );
}

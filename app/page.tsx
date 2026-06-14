import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Offer } from "@/components/Offer";
import { Locations } from "@/components/Locations";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Offer />
        <Locations />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

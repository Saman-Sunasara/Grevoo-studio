import Hero from "@/components/Hero";
import FeaturedWork from "@/components/FeaturedWork";
import Services from "@/components/Services";
import Process from "@/components/Process";
import WhyUs from "@/components/WhyUs";
import Founder from "@/components/Founder";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex-1 flex flex-col">
      <Hero />
      <FeaturedWork />
      <Services />
      <Process />
      <WhyUs />
      <Founder />
      <Contact />
      <Footer />
    </main>
  );
}

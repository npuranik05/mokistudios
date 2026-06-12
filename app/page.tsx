import About from "@/components/About";
import Contact from "@/components/Contact";
import DemoShowcase from "@/components/DemoShowcase";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import PromiseBanner from "@/components/PromiseBanner";
import ScrollProgress from "@/components/ScrollProgress";
import Services from "@/components/Services";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Header />
      <main className="flex-1">
        <Hero />
        <Services />
        <DemoShowcase />
        <PromiseBanner />
        <HowItWorks />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

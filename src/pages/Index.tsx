import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Products from "@/components/Products";
import VideoShowcase from "@/components/VideoShowcase";
import ServiceArea from "@/components/ServiceArea";
import Stats from "@/components/Stats";
import Team from "@/components/Team";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <Products />
      <VideoShowcase />
      <ServiceArea />
      <Stats />
      <About />
      <Team />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  );
};

export default Index;

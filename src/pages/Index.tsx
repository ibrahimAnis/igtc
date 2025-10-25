import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Products from "@/components/Products";
import Certifications from "@/components/Certifications";
import Facilities from "@/components/Facilities";
import VideoGallery from "@/components/VideoGallery";
import CustomerReviews from "@/components/CustomerReviews";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import AnalyticsDashboard from "@/components/AnalyticsDashboard";
import { useAnalytics } from "@/hooks/useAnalytics";

const Index = () => {
  // Initialize analytics for this page
  useAnalytics();

  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Products />
      <Certifications />
      <About />
      <Facilities />
      <VideoGallery />
      <CustomerReviews />
      <Contact />
      <Footer />
      <WhatsAppButton />
      <AnalyticsDashboard />
    </main>
  );
};

export default Index;

import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToServices = () => {
    const productsSection = document.getElementById('products');
    productsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollDown = () => {
    const servicesSection = document.getElementById('services');
    servicesSection?.scrollIntoView({ behavior: 'smooth' });
  };

  // Calculate scale and opacity based on scroll position
  const scale = Math.max(0.7, 1 - scrollY / 1000);
  const opacity = Math.max(0.5, 1 - scrollY / 500);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-28 md:pt-32">
      {/* Background Video with Overlay */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        <div 
          className="max-w-4xl mx-auto animate-fade-in transition-all duration-300"
          style={{
            transform: `scale(${scale})`,
            opacity: opacity,
          }}
        >
          <h1 className="font-playfair text-5xl md:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
            Your Trusted Partner in Global Agricultural Exports
          </h1>
          <p className="font-inter text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto">
            Connecting India's finest agricultural products to international markets across 50+ countries. Specializing in premium rice, authentic spices, nutritious pulses, healthy millets, and fresh produce with FSSAI certification and export-grade quality assurance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up">
            <Button 
              size="lg" 
              onClick={scrollToServices}
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-6 text-lg group"
              aria-label="Discover our wholegrain manufacturing services in Madhya Pradesh"
            >
              Explore Our Products
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={scrollToContact}
              className="bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary font-semibold px-8 py-6 text-lg"
              aria-label="Contact us for export inquiries"
            >
              Start Export Inquiry
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <button 
          onClick={scrollDown}
          className="absolute bottom-5 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer bg-transparent border-none"
          aria-label="Scroll down to services section"
        >
          <div className="w-6 h-10 border-2 border-primary-foreground rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-primary-foreground rounded-full"></div>
          </div>
        </button>
      </div>
    </section>
  );
};

export default Hero;

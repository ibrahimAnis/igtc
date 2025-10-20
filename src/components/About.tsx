import { CheckCircle } from "lucide-react";
import grainsImage from "@/assets/corn.png";

const About = () => {
  const capabilities = [
    "Direct sourcing from premium farmers",
    "State-of-the-art cleaning facilities",
    "Temperature-controlled warehouse storage",
    "Advanced processing machinery",
  ];

  return (
    <section id="about" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="animate-scale-in">
            <div className="relative rounded-lg overflow-hidden shadow-lg">
              <img 
                src={grainsImage} 
                alt="Premium wholegrain quality control" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary/90 to-transparent p-6">
                <p className="text-primary-foreground font-playfair text-2xl font-bold">
                  Quality You Can Trust
                </p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="animate-fade-in">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4">
              Madhya Pradesh's Trusted Wholegrain Partner
            </h2>
            <div className="w-20 h-1 bg-accent mb-6" aria-hidden="true"></div>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              Based in West Nimar, Madhya Pradesh, we are a leading B2B wholegrain manufacturer serving businesses across Central India, Maharashtra, Gujarat, and Rajasthan. Our comprehensive solutions span the entire supply chain—from partnering with local farmers to delivering premium processed wheat, rice, barley, and oats.
            </p>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              With over 25 years of experience and state-of-the-art processing facilities in Madhya Pradesh, we ensure that every grain meets international quality standards while supporting regional agriculture.
            </p>
            
            <div className="space-y-4">
              {capabilities.map((capability, index) => (
                <div 
                  key={index} 
                  className="flex items-start gap-3 animate-slide-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                  <span className="text-foreground font-inter text-lg">{capability}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

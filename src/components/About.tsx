import { Eye, Crosshair, CheckCircle } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import ownersImage from "@/assets/owners.jpg";

const About = () => {
  const promises = [
    "Premium quality at competitive prices",
    "On-time delivery and transparent communication",
    "Ethical sourcing and sustainable trade practices",
    "Long-term business relationships built on mutual trust"
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4">
            About Us
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-6" aria-hidden="true"></div>
        </div>

        {/* Main Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Owner Image */}
          <div className="animate-fade-in order-2 md:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
              <img 
                src={ownersImage} 
                alt="Business owners - Agricultural export specialists from Khargone, Madhya Pradesh" 
                className="w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent group-hover:from-black/90 transition-all duration-500"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <p className="text-white font-playfair text-3xl font-bold mb-2">
                  Leadership & Vision
                </p>
                <p className="text-white/90 text-lg">
                We don't just sell products - we build relationships based on trust and consistent performance.
                </p>
              </div>
            </div>
          </div>

          {/* Vision & Mission */}
          <div className="animate-fade-in order-1 md:order-2 space-y-6">
            {/* Vision */}
            <Card className="group hover:shadow-xl transition-all duration-500 border-2 border-blue-500/20 hover:border-blue-500">
              <CardContent className="p-6">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-blue-500/10 rounded-full mb-4 group-hover:bg-blue-500 group-hover:scale-110 transition-all duration-300">
                  <Eye className="h-7 w-7 text-blue-500 group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-playfair text-2xl font-bold text-foreground mb-3">
                  Vision
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  To be a globally recognized leader in agricultural exports, known for exceptional quality, trusted partnerships, and sustainable growth, bringing the best of Indian harvests to the world.
                </p>
              </CardContent>
            </Card>

            {/* Mission */}
            <Card className="group hover:shadow-xl transition-all duration-500 border-2 border-accent/20 hover:border-accent">
              <CardContent className="p-6">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-accent/10 rounded-full mb-4 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                  <Crosshair className="h-7 w-7 text-accent group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-playfair text-2xl font-bold text-foreground mb-3">
                  Mission
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  To uphold our promise of "Harvesting Quality, Delivering Trust" by sourcing the finest agricultural produce, ensuring uncompromised quality at every stage, and building lasting relationships through integrity and reliability.
                </p>
              </CardContent>
            </Card>

            {/* Our Promise */}
            <div className="bg-white rounded-lg p-6 border-2 border-accent/30 shadow-md">
              <h3 className="font-playfair text-xl font-bold text-foreground mb-4">
                Our Promise
              </h3>
              <div className="space-y-3">
                {promises.map((promise, index) => (
                  <div 
                    key={index} 
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-foreground text-sm font-medium">{promise}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

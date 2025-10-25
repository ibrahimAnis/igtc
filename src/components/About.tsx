import { CheckCircle, Globe, Target, Award, TrendingUp } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import ownersImage from "@/assets/owners.jpg";

const About = () => {
  const capabilities = [
    "Direct sourcing from certified farmers across India",
    "State-of-the-art processing and packaging facilities",
    "Temperature-controlled storage and cold chain logistics",
    "International quality certifications (FSSAI, ISO)",
    "Export documentation and customs clearance support",
    "Bulk export to 50+ countries worldwide",
  ];

  const values = [
    {
      icon: Globe,
      title: "Global Reach",
      description: "Exporting to Singapore, Malaysia, UAE, USA, Europe, and more"
    },
    {
      icon: Target,
      title: "Quality Focus",
      description: "FSSAI certified with international quality standards"
    },
    {
      icon: Award,
      title: "Trusted Partner",
      description: "10+ years of reliable export and quality service"
    },
    {
      icon: TrendingUp,
      title: "Growing Network",
      description: "Expanding to new markets across Asia, Middle East, and Americas"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4">
            About Our Global Export Business
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-6" aria-hidden="true"></div>
          <p className="text-muted-foreground text-xl max-w-3xl mx-auto">
            Leading agricultural product exporter from Madhya Pradesh to international markets
          </p>
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
                  Committed to delivering premium quality agricultural products to the world
                </p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="animate-fade-in order-1 md:order-2">
            <div className="inline-block mb-4">
              <Globe className="h-10 w-10 text-accent" />
            </div>
            <h3 className="font-playfair text-3xl md:text-4xl font-bold text-foreground mb-4">
              Exporting Quality from India to the World
            </h3>
            <div className="w-20 h-1 bg-accent mb-6" aria-hidden="true"></div>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              Based in Khargone, Madhya Pradesh, we are a premier agricultural product exporter specializing in premium rice, spices, pulses, millets, and fresh produce. Our business connects Indian farmers with international markets across Singapore, Malaysia, UAE, Dubai, Qatar, Oman, Bahrain, Europe, UK, USA, and beyond.
            </p>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              With over a decade of export experience, FSSAI certification, and state-of-the-art processing facilities, we ensure every shipment meets international quality standards. Our comprehensive export solutions include sourcing, processing, quality control, documentation, and global logistics.
            </p>
            
            <div className="space-y-3">
              {capabilities.map((capability, index) => (
                <div 
                  key={index} 
                  className="flex items-start gap-3 animate-slide-up p-3 rounded-lg hover:bg-secondary/50 transition-colors duration-300"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-foreground font-medium text-base">{capability}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {values.map((value, index) => (
            <Card 
              key={index}
              className="group hover:shadow-xl hover:-translate-y-2 transition-all duration-500 border-t-4 border-transparent hover:border-accent"
            >
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-4 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                  <value.icon className="h-8 w-8 text-accent group-hover:text-white transition-colors" />
                </div>
                <h4 className="font-playfair text-xl font-bold text-foreground mb-2">
                  {value.title}
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <Card className="text-center p-6 bg-gradient-to-br from-accent/10 to-accent/5 border-accent/20 hover:shadow-lg transition-shadow">
            <div className="text-4xl md:text-5xl font-bold text-accent mb-2">50+</div>
            <p className="text-sm text-muted-foreground font-semibold">Countries Served</p>
          </Card>
          <Card className="text-center p-6 bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20 hover:shadow-lg transition-shadow">
            <div className="text-4xl md:text-5xl font-bold text-primary mb-2">10+</div>
            <p className="text-sm text-muted-foreground font-semibold">Products Exported</p>
          </Card>
          <Card className="text-center p-6 bg-gradient-to-br from-green-500/10 to-green-500/5 border-green-500/20 hover:shadow-lg transition-shadow">
            <div className="text-4xl md:text-5xl font-bold text-green-600 mb-2">100%</div>
            <p className="text-sm text-muted-foreground font-semibold">FSSAI Certified</p>
          </Card>
          <Card className="text-center p-6 bg-gradient-to-br from-blue-500/10 to-blue-500/5 border-blue-500/20 hover:shadow-lg transition-shadow">
            <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">24/7</div>
            <p className="text-sm text-muted-foreground font-semibold">Export Support</p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;

import { Tractor, Factory, Warehouse, Settings } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import storageImage from "@/assets/bajra.png";
import machineryImage from "@/assets/jowar.png";
import factoryImage from "@/assets/soyabean.png";
import harvestImage from "@/assets/corn.png";

const Services = () => {
  const services = [
    {
      icon: Tractor,
      title: "Premium Farming in West Nimar",
      description: "Direct partnerships with experienced farmers across Madhya Pradesh ensuring the highest quality grain production from seed to harvest in West Nimar and surrounding regions.",
      image: harvestImage,
      alt: "Premium farming operations in West Nimar, Madhya Pradesh showing wheat and grain harvesting"
    },
    {
      icon: Factory,
      title: "Advanced Grain Processing",
      description: "State-of-the-art cleaning and processing facilities in Madhya Pradesh that maintain grain integrity and purity for wheat, rice, barley, and oats.",
      image: factoryImage,
      alt: "Modern grain processing facility in Madhya Pradesh with advanced machinery"
    },
    {
      icon: Warehouse,
      title: "Secure Storage Facilities",
      description: "Temperature-controlled warehouse facilities across Central India with optimal conditions for long-term grain preservation and distribution to Maharashtra, Gujarat, and Rajasthan.",
      image: storageImage,
      alt: "Temperature-controlled grain storage warehouse in Madhya Pradesh"
    },
    {
      icon: Settings,
      title: "Modern Processing Machinery",
      description: "Comprehensive range of processing and tooling equipment designed for efficiency and precision in wholegrain manufacturing.",
      image: machineryImage,
      alt: "Advanced wholegrain processing machinery and equipment in Madhya Pradesh facility"
    },
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4">
            Complete Wholegrain Solutions Across Madhya Pradesh
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-6" aria-hidden="true"></div>
          <p className="text-muted-foreground text-xl max-w-2xl mx-auto">
            End-to-end grain manufacturing services from West Nimar farms to your doorstep across Central India
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-300 overflow-hidden animate-slide-up border-border"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-0">
                {service.image ? (
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.alt || service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="bg-accent p-2 rounded-lg">
                          <service.icon className="h-6 w-6 text-accent-foreground" />
                        </div>
                        <h3 className="font-playfair text-2xl font-bold text-primary-foreground">
                          {service.title}
                        </h3>
                      </div>
                      <p className="text-primary-foreground/90">{service.description}</p>
                    </div>
                  </div>
                ) : (
                  <div className="p-8">
                    <div className="bg-accent/10 p-4 rounded-lg w-fit mb-4 group-hover:bg-accent/20 transition-colors">
                      <service.icon className="h-8 w-8 text-accent" />
                    </div>
                    <h3 className="font-playfair text-2xl font-bold text-foreground mb-3">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

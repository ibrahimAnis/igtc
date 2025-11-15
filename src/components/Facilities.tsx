import { Card, CardContent } from "./ui/card";
import { Factory, Warehouse, Gauge, Shield, Truck, Package } from "lucide-react";
import machineryImg from "@/assets/machinery.jpg";
import machineryPng from "@/assets/machinery-1.png";
import storageImg1 from "@/assets/storage-image-1.png";
import storageImg2 from "@/assets/storage-image-2.png";
import storageImg3 from "@/assets/storage-image-3.png";
import storageImg4 from "@/assets/storage-image-4.png";

const Facilities = () => {
  const features = [
    {
      icon: Factory,
      title: "Modern Processing Unit",
      description: "Machinery for cleaning, sorting, and processing agricultural products",
      color: "bg-blue-500"
    },
    {
      icon: Warehouse,
      title: "Skilled Workforce",
      description: "Experienced team trained in quality control, hygiene standards, and international export protocols ensuring consistent product excellence",
      color: "bg-green-500"
    },
    {
      icon: Truck,
      title: "Secure Transportation",
      description: "Secure transportation of products to and from the warehouse",
      color: "bg-red-500"
    },
  ];
// TODO Change machinery images and description
  const machineryImages = [
    {
      src: machineryImg,
      title: "Primary Processing Machinery",
      description: "High-capacity equipment for cleaning and grading"
    },
    {
      src: machineryPng,
      title: "Automated Sorting System",
      description: "Advanced technology for quality sorting"
    }
  ];

  const storageImages = [
    {
      src: storageImg1,
      title: "Temperature-Controlled Warehouse",
      description: "Modern storage facility with climate control"
    },
    {
      src: storageImg2,
      title: "Bulk Storage Facility",
      description: "Large capacity storage for export volumes"
    },
    {
      src: storageImg3,
      title: "Inventory Management Area",
      description: "Organized storage with tracking systems"
    },
    {
      src: storageImg4,
      title: "Loading & Dispatch Zone",
      description: "Efficient loading operations for containers"
    }
  ];

  return (
    <section id="facilities" className="py-20 bg-gradient-to-b from-secondary/20 to-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-3 mb-4">
            <Factory className="h-10 w-10 text-accent" />
            <Warehouse className="h-10 w-10 text-accent" />
          </div>
          <h2 className="font-playfair text-4xl md:text-6xl font-bold text-foreground mb-4">
            Processing & Storage Facilities
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-6" aria-hidden="true"></div>
          <p className="text-muted-foreground text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed">
            TODO Change description and take reference of whatsapp
            Modern infrastructure equipped with advanced machinery and climate-controlled storage ensuring premium quality for international exports
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="group hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border-t-4 border-transparent hover:border-accent"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                <div className={`inline-flex items-center justify-center w-14 h-14 ${feature.color} rounded-xl mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}>
                  <feature.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="font-playfair text-xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <Card className="text-center p-6 bg-gradient-to-br from-blue-500/10 to-blue-500/5 border-blue-500/20 hover:shadow-xl transition-all">
            <Factory className="h-8 w-8 text-blue-600 mx-auto mb-3" />
            <div className="text-3xl font-bold text-blue-600 mb-2">5000+</div>
            <p className="text-sm text-muted-foreground font-semibold">Tons Capacity</p>
          </Card>
          <Card className="text-center p-6 bg-gradient-to-br from-green-500/10 to-green-500/5 border-green-500/20 hover:shadow-xl transition-all">
            <Warehouse className="h-8 w-8 text-green-600 mx-auto mb-3" />
            <div className="text-3xl font-bold text-green-600 mb-2">20000</div>
            <p className="text-sm text-muted-foreground font-semibold">Sq Ft Storage</p>
          </Card>
          <Card className="text-center p-6 bg-gradient-to-br from-purple-500/10 to-purple-500/5 border-purple-500/20 hover:shadow-xl transition-all">
            <Gauge className="h-8 w-8 text-purple-600 mx-auto mb-3" />
            <div className="text-3xl font-bold text-purple-600 mb-2">100%</div>
            <p className="text-sm text-muted-foreground font-semibold">Quality Control</p>
          </Card>
          <Card className="text-center p-6 bg-gradient-to-br from-orange-500/10 to-orange-500/5 border-orange-500/20 hover:shadow-xl transition-all">
            <Shield className="h-8 w-8 text-orange-600 mx-auto mb-3" />
            <div className="text-3xl font-bold text-orange-600 mb-2">FSSAI</div>
            <p className="text-sm text-muted-foreground font-semibold">Certified</p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Facilities;


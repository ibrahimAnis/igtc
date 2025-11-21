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
    <section id="facilities" className="py-20 relative overflow-hidden">
      {/* Background Images with Light Blur */}
      <div className="absolute inset-0">
        {/* First background image - left side */}
        <div 
          className="absolute inset-0 bg-cover bg-left"
          style={{ 
            backgroundImage: `url(${storageImg1})`,
            backgroundSize: 'cover',
            backgroundPosition: 'left center'
          }}
        />
        {/* Second background image - right side */}
        <div 
          className="absolute inset-0 bg-cover bg-right opacity-50"
          style={{ 
            backgroundImage: `url(${storageImg3})`,
            backgroundSize: 'cover',
            backgroundPosition: 'right center'
          }}
        />
        {/* Light blur and overlay */}
        <div className="absolute inset-0 backdrop-blur-sm bg-white/75"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
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
      </div>
    </section>
  );
};

export default Facilities;


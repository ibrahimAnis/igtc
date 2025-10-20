import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import waLogo from "@/assets/wa-logo.svg";
import wheatProduct from "@/assets/corn.png";
import barleyProduct from "@/assets/bajra.png";
import oatsProduct from "@/assets/jowar.png";
import riceProduct from "@/assets/soyabean.png";

const Products = () => {
  const products = [
    {
      name: "Premium Wheat from Madhya Pradesh",
      description: "High-quality wheat grains from West Nimar farms, perfect for milling and baking applications across Central India.",
      image: wheatProduct,
      features: ["Protein: 12-14%", "Moisture: <12%", "Bulk Available"],
      alt: "Premium wheat grains from Madhya Pradesh for B2B milling and baking"
    },
    {
      name: "Golden Barley",
      description: "Premium barley grains from Madhya Pradesh, ideal for brewing, animal feed, and food production in Maharashtra and Gujarat.",
      image: barleyProduct,
      features: ["Quality Grade A", "Cleaned & Sorted", "Bulk Orders"],
      alt: "Golden barley grains from West Nimar for brewing and food production"
    },
    {
      name: "Whole Oats",
      description: "Nutritious whole oats from Central India with superior quality for cereal and health food manufacturing.",
      image: oatsProduct,
      features: ["High Fiber", "Non-GMO", "Food Grade"],
      alt: "Whole oats from Madhya Pradesh for cereal and health food manufacturing"
    },
    {
      name: "Premium Rice",
      description: "Long-grain rice from Madhya Pradesh with excellent texture and aroma for food processing and export across India.",
      image: riceProduct,
      features: ["Long Grain", "Aged Quality", "Export Grade"],
      alt: "Premium long-grain rice from Central India for export and processing"
    },
  ];

  const handleWhatsAppInquiry = (productName: string) => {
    const message = `Hi, I'm interested in bulk ordering ${productName}. Please provide more details.`;
    const whatsappUrl = `https://wa.me/15551234567?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="products" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4">
            Premium Wholegrains from Madhya Pradesh
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-6" aria-hidden="true"></div>
          <p className="text-muted-foreground text-xl max-w-2xl mx-auto">
            Quality wheat, rice, barley & oats for B2B partners across Madhya Pradesh, Maharashtra, Gujarat & Rajasthan
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-300 overflow-hidden animate-scale-in flex flex-col"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-0 flex flex-col h-full">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.alt || product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/95 to-transparent"></div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="font-playfair text-2xl font-bold text-foreground mb-3">
                    {product.name}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {product.description}
                  </p>
                  <ul className="space-y-2 mb-6 flex-grow">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-foreground flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button 
                    onClick={() => handleWhatsAppInquiry(product.name)}
                    className="w-full bg-[#25D366] hover:bg-[#20BA5A] text-white mt-auto"
                    aria-label={`Send WhatsApp inquiry about ${product.name}`}
                  >
                    <img src={waLogo} alt="" className="mr-2 h-4 w-4" aria-hidden="true" />
                    Inquire via WhatsApp
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;

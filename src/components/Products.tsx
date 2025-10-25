import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Package, Globe, ShieldCheck } from "lucide-react";
import waLogo from "@/assets/wa-logo.svg";
import bajraImg from "@/assets/bajra.png";
import jowarImg from "@/assets/jowar.png";
import soyabeanImg from "@/assets/soyabean.png";
import cornImg from "@/assets/corn.png";
import chickpeasImg from "@/assets/chickpeas.jpg";
import treeGumImg from "@/assets/gond-1.jpg";
import redChilliImg from "@/assets/red-chilli.jpg";

const Products = () => {
  const products = [
    {
      name: "Premium Rice",
      description: "High-quality long-grain rice processed and exported globally. Perfect for international food distribution in Singapore, UAE, USA, and Europe.",
      image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=500",
      features: ["Long Grain", "Export Grade", "FSSAI Certified", "Global Shipping"],
      category: "Grains",
      exportMarkets: ["Singapore", "Malaysia", "UAE", "USA"]
    },
    {
      name: "Red Chilli",
      description: "Premium quality red chilli powder and whole chillies. Exported to Middle East, Europe, and Asian markets with consistent heat levels and vibrant color.",
      image: redChilliImg,
      features: ["High Capsaicin", "Premium Quality", "Bulk Export", "Custom Packing"],
      category: "Spices",
      exportMarkets: ["Dubai", "Qatar", "UK", "Malaysia"]
    },
    {
      name: "Yellow Corn",
      description: "High-quality yellow corn for animal feed and food processing. Exported globally to manufacturers in Asia, Middle East, and European markets.",
      image: cornImg,
      features: ["High Grade", "Bulk Export", "Food & Feed Grade", "Moisture Control"],
      category: "Grains",
      exportMarkets: ["Singapore", "Malaysia", "UAE", "Europe"]
    },
    {
      name: "Fresh Banana",
      description: "Fresh, ripe bananas sourced from quality farms. Exported to international markets with proper cold chain logistics for Qatar, Oman, Bahrain, and UAE.",
      image: "https://images.unsplash.com/photo-1603833665858-e61d17a86224?w=500",
      features: ["Fresh Quality", "Cold Chain", "Ripe & Ready", "Daily Export"],
      category: "Fruits",
      exportMarkets: ["UAE", "Qatar", "Oman", "Bahrain"]
    },
    {
      name: "Premium Papaya",
      description: "Fresh papayas with excellent sweetness and texture. Exported to Europe, UAE, and Asian markets with premium packaging and quality assurance.",
      image: "https://images.unsplash.com/photo-1617112848923-cc2234396a8d?w=500",
      features: ["Sweet & Fresh", "Premium Grade", "Export Ready", "Quality Packed"],
      category: "Fruits",
      exportMarkets: ["Europe", "UAE", "Singapore", "UK"]
    },
    {
      name: "Tree Gum (Gond)",
      description: "Natural tree gum (edible gum) used in food processing and pharmaceuticals. Exported globally to food manufacturers and pharmaceutical companies.",
      image: treeGumImg,
      features: ["100% Natural", "Food Grade", "Pharma Grade", "Bulk Orders"],
      category: "Natural Products",
      exportMarkets: ["USA", "Europe", "Singapore", "UAE"]
    },
    {
      name: "Chickpeas (Chana)",
      description: "Premium quality chickpeas processed for international markets. Exported to Middle East, Europe, USA, and Asian countries for food processing.",
      image: chickpeasImg,
      features: ["Premium Quality", "Export Grade", "FSSAI Approved", "Bulk Available"],
      category: "Pulses",
      exportMarkets: ["Dubai", "UK", "USA", "Singapore"]
    },
    {
      name: "Premium Wheat",
      description: "High-quality wheat grains for milling and food processing. Exported to international markets with excellent protein content and moisture control.",
      image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=500",
      features: ["Protein: 12-14%", "Moisture: <12%", "Export Quality", "Bulk Orders"],
      category: "Grains",
      exportMarkets: ["Malaysia", "UAE", "Qatar", "Oman"]
    },
    {
      name: "Soyabean",
      description: "Premium soyabeans for oil extraction and food processing. Exported globally to manufacturers in Singapore, Malaysia, Europe, and USA.",
      image: soyabeanImg,
      features: ["High Oil Content", "Non-GMO", "Export Grade", "Quality Certified"],
      category: "Oilseeds",
      exportMarkets: ["Singapore", "USA", "Europe", "UAE"]
    },
    {
      name: "Bajra (Pearl Millet)",
      description: "Nutritious bajra grains exported to health-conscious markets worldwide. Popular in USA, Europe, and Middle East for gluten-free food production.",
      image: bajraImg,
      features: ["Gluten-Free", "High Protein", "Export Ready", "Bulk Available"],
      category: "Millets",
      exportMarkets: ["USA", "Europe", "UAE", "UK"]
    },
    {
      name: "Jowar (Sorghum)",
      description: "Premium quality jowar for international health food markets. Exported to USA, Europe, and Asian countries for cereal and health food manufacturing.",
      image: jowarImg,
      features: ["High Fiber", "Gluten-Free", "Export Quality", "Bulk Orders"],
      category: "Millets",
      exportMarkets: ["USA", "UK", "Singapore", "Europe"]
    },
  ];

  const handleWhatsAppInquiry = (productName: string) => {
    const message = `Hi, I'm interested in importing ${productName} to my country. Please provide details about bulk export, pricing, and shipping.`;
    const whatsappUrl = `https://wa.me/919561357752?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="products" className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block mb-4">
            <div className="flex items-center gap-2 text-accent mb-2">
              <Globe className="h-8 w-8" />
              <Package className="h-8 w-8" />
              <ShieldCheck className="h-8 w-8" />
            </div>
          </div>
          <h2 className="font-playfair text-4xl md:text-6xl font-bold text-foreground mb-4">
            Global Agricultural Export Products
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-6" aria-hidden="true"></div>
          <p className="text-muted-foreground text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed">
            Premium processed agricultural products exported to Singapore, Malaysia, UAE, Dubai, Qatar, Oman, Bahrain, Europe, UK, USA, and worldwide
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            {["Singapore", "Malaysia", "UAE", "Dubai", "Qatar", "USA", "UK", "Europe", "Bahrain", "Oman"].map((country, idx) => (
              <span key={idx} className="px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-semibold">
                {country}
              </span>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden animate-fade-in flex flex-col border-2 hover:border-accent"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-0 flex flex-col h-full">
                {/* Product Image with Overlay */}
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={`${product.name} - Export quality agricultural product to ${product.exportMarkets.join(', ')}`}
                    className="w-full h-full object-cover group-hover:scale-125 group-hover:rotate-2 transition-all duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-3 right-3">
                    <span className="px-3 py-1 bg-accent text-white text-xs font-bold rounded-full shadow-lg">
                      {product.category}
                    </span>
                  </div>
                  
                  {/* Export Markets on Hover */}
                  <div className="absolute bottom-3 left-3 right-3 transform translate-y-10 group-hover:translate-y-0 transition-transform duration-300">
                    <div className="flex flex-wrap gap-1">
                      {product.exportMarkets.slice(0, 3).map((market, idx) => (
                        <span key={idx} className="px-2 py-1 bg-white/90 text-black text-xs rounded-md font-semibold">
                          {market}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Product Details */}
                <div className="p-5 flex flex-col flex-grow bg-white">
                  <h3 className="font-playfair text-xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed line-clamp-3">
                    {product.description}
                  </p>
                  
                  {/* Features */}
                  <ul className="space-y-1.5 mb-5 flex-grow">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="text-xs text-foreground flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0"></span>
                        <span className="font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {/* Export Badge */}
                  <div className="mb-4 flex items-center gap-2 text-xs text-accent">
                    <Globe className="h-4 w-4" />
                    <span className="font-semibold">Global Export Ready</span>
                  </div>

                  {/* WhatsApp Button */}
                  <Button 
                    onClick={() => handleWhatsAppInquiry(product.name)}
                    className="w-full bg-[#25D366] hover:bg-[#20BA5A] text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group/btn relative overflow-hidden"
                    aria-label={`Inquire about exporting ${product.name} via WhatsApp`}
                  >
                    <span className="relative z-10 flex items-center justify-center">
                      <img src={waLogo} alt="" className="mr-2 h-6 w-6 group-hover/btn:scale-110 transition-transform" aria-hidden="true" />
                      Get Export Quote
                    </span>
                    <span className="absolute inset-0 bg-white/20 transform -translate-x-full group-hover/btn:translate-x-0 transition-transform duration-300 ease-out"></span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center animate-fade-in">
          <Card className="max-w-4xl mx-auto bg-gradient-to-r from-primary to-accent border-0">
            <CardContent className="p-8 md:p-12">
              <Globe className="h-16 w-16 text-white mx-auto mb-4" />
              <h3 className="font-playfair text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Export Worldwide
              </h3>
              <p className="text-white/90 text-lg mb-6 max-w-2xl mx-auto">
                We handle international shipping, quality certifications, and export documentation for Singapore, Malaysia, UAE, Dubai, Qatar, Oman, Bahrain, Europe, UK, USA, and more.
              </p>
              <Button 
                onClick={() => handleWhatsAppInquiry("your product requirements")}
                size="lg"
                className="bg-white text-primary hover:bg-gray-100 font-bold px-8 py-6 text-lg shadow-xl"
              >
                <img src={waLogo} alt="" className="mr-2 h-5 w-5" aria-hidden="true" />
                Start Export Inquiry
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Products;

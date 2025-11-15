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
      name: "Jowar (Sorghum)",
      description: "Export-grade gluten-free jowar with high fiber content. Carefully processed, quality tested, and certified for international health food standards and applications.",
      image: jowarImg,
      features: ["High Fiber", "Gluten-Free", "Export Quality", "Bulk Orders"],
      category: "Millets",
      exportMarkets: ["USA", "UK", "Singapore", "Europe"]
    },
    {
      name: "Bajra (Pearl Millet)",
      description: "Premium nutritious bajra with high protein content. Cleaned, sorted, and packaged meeting international gluten-free food production standards and certifications.",
      image: bajraImg,
      features: ["Gluten-Free", "High Protein", "Export Ready", "Bulk Available"],
      category: "Millets",
      exportMarkets: ["USA", "Europe", "UAE", "UK"]
    },
    {
      name: "Soyabean",
      description: "Non-GMO premium soyabeans with high oil content. Export-grade quality for oil extraction and food processing with international quality certification.",
      image: soyabeanImg,
      features: ["High Oil Content", "Non-GMO", "Export Grade", "Quality Certified"],
      category: "Oilseeds",
      exportMarkets: ["Singapore", "USA", "Europe", "UAE"]
    },
    {
      name: "Maize",
      description: "High-quality moisture-controlled maize for food and feed grade applications. Thoroughly cleaned, graded, and tested for international export standards.",
      image: cornImg,
      features: ["High Grade", "Bulk Export", "Food & Feed Grade", "Moisture Control"],
      category: "Grains",
      exportMarkets: ["Singapore", "Malaysia", "UAE", "Europe"]
    },
    {
      name: "Chickpeas (Chana)",
      description: "Premium quality chickpeas with consistent size and color. Machine-cleaned, double-sorted, and quality-checked for international food processing and export standards.",
      image: chickpeasImg,
      features: ["Premium Quality", "Export Grade", "Quality Certified", "Bulk Available"],
      category: "Pulses",
      exportMarkets: ["Dubai", "UK", "USA", "Singapore"]
    },
    {
      name: "Edible Gum (Gond)",
      description: "100% natural food-grade and pharma-grade tree gum. Carefully sourced, processed, and tested meeting international quality standards for multiple applications.",
      image: treeGumImg,
      features: ["100% Natural", "Food Grade", "Pharma Grade", "Bulk Orders"],
      category: "Natural Products",
      exportMarkets: ["USA", "Europe", "Singapore", "UAE"]
    },
    {
      name: "Red Chilli",
      description: "Premium red chilli with consistent heat levels and vibrant color. High capsaicin content, perfectly dried, and custom-packed for export standards.",
      image: redChilliImg,
      features: ["High Capsaicin", "Premium Quality", "Bulk Export", "Custom Packing"],
      category: "Spices",
      exportMarkets: ["Dubai", "Qatar", "UK", "Malaysia"]
    },
    {
      name: "Fresh Banana",
      description: "Farm-fresh ripe bananas with superior quality and taste. Transported via temperature-controlled cold chain logistics ensuring optimal freshness and minimal damage.",
      image: "https://images.unsplash.com/photo-1603833665858-e61d17a86224?w=500",
      features: ["Fresh Quality", "Cold Chain", "Ripe & Ready", "Daily Export"],
      category: "Fruits",
      exportMarkets: ["UAE", "Qatar", "Oman", "Bahrain"]
    },
    {
      name: "Premium Papaya",
      description: "Sweet, fresh papayas with excellent texture and rich flavor. Premium-grade selection, protective packaging, and proper handling ensuring quality delivery worldwide.",
      image: "https://images.unsplash.com/photo-1617112848923-cc2234396a8d?w=500",
      features: ["Sweet & Fresh", "Premium Grade", "Export Ready", "Quality Packed"],
      category: "Fruits",
      exportMarkets: ["Europe", "UAE", "Singapore", "UK"]
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
